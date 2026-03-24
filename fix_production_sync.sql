-- Esse script limpa o usuário que ficou preso na autenticação e 
-- cria "Gatilhos" (Triggers) no banco para sincronizar automaticamente 
-- a "app_users" com o Supabase Auth. Assim, o site atual em produção 
-- já vai funcionar 100% mesmo antes de você atualizar o código (fazer o deploy).

-- 1. Limpa o usuário órfão que você tentou excluir (marlisson e outros)
-- Deleta do Auth qualquer usuário que não exista mais na tabela app_users
DELETE FROM auth.users 
WHERE id NOT IN (
    SELECT id::uuid FROM public.app_users
);

-- 2. Gatilho para Exclusão: Quando o site em produção deletar de app_users, deleta do Auth também
CREATE OR REPLACE FUNCTION public.cascade_delete_auth_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Deleta o usuário real da autenticação
  DELETE FROM auth.users WHERE id = OLD.id::uuid;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS tr_cascade_delete_auth_user ON public.app_users;
CREATE TRIGGER tr_cascade_delete_auth_user
AFTER DELETE ON public.app_users
FOR EACH ROW
EXECUTE FUNCTION public.cascade_delete_auth_user();

-- 3. Gatilho para Troca de Senha: Quando o site em produção alterar a senha em app_users, altera no Auth
CREATE OR REPLACE FUNCTION public.sync_password_to_auth()
RETURNS TRIGGER AS $$
BEGIN
  -- Se a senha foi alterada
  IF NEW.password IS DISTINCT FROM OLD.password AND NEW.password IS NOT NULL THEN
    -- Atualiza a senha criptografada oficial no Auth
    UPDATE auth.users 
    SET encrypted_password = crypt(NEW.password, gen_salt('bf'))
    WHERE id = NEW.id::uuid;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS tr_sync_password ON public.app_users;
CREATE TRIGGER tr_sync_password
AFTER UPDATE OF password ON public.app_users
FOR EACH ROW
EXECUTE FUNCTION public.sync_password_to_auth();

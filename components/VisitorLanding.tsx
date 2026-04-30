import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  BrainCircuit,
  MessageSquare,
  ChevronRight
} from 'lucide-react';

const VisitorLanding: React.FC = () => {
  const navigate = useNavigate();

  // Animations observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in', 'fade-in', 'slide-in-from-bottom-8', 'duration-1000');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-8');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-dvh w-full bg-[#020617] text-white font-sans overflow-x-hidden selection:bg-gai-teal/30 selection:text-white">
      {/* HEADER NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-gradient-to-br from-gai-teal to-teal-600 w-10 h-10 rounded-xl flex items-center justify-center text-slate-900 font-black text-xl shadow-lg shadow-teal-500/20">
                G
             </div>
             <span className="font-black text-xl tracking-tight">G.AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
             <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
             <a href="#comparativo" className="hover:text-white transition-colors">Comparativo</a>
          </div>
          {/* Botões removidos conforme solicitado */}
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-dvh flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[400px] md:h-[600px] bg-gai-teal/20 blur-[100px] md:blur-[150px] rounded-full z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

        <div className="relative z-10 text-center space-y-8 animate-on-scroll max-w-5xl mx-auto mt-10 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-teal-400 text-sm font-medium mb-4 backdrop-blur-sm">
            <BrainCircuit size={16} />
            <span>A primeira Inteligência Artificial para Fábricas de Gelo</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
            Abandone o caderninho.<br/>
            Assuma o <span className="text-transparent bg-clip-text bg-gradient-to-r from-gai-teal to-blue-500">controle total</span>.
          </h1>
          
          <p className="text-slate-400 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
            Pare de perder dinheiro por não saber onde está o seu gelo. O G.AI transforma a gestão da sua fábrica, do controle de produção até o fechamento de caixa, em um único lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto group relative px-8 py-4 bg-white hover:bg-slate-200 text-slate-900 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] flex items-center justify-center gap-3 overflow-hidden"
            >
              Quero Profissionalizar Meu Negócio
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => navigate('/cardapio-adega')}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Ver Demonstração <ChevronRight size={20} className="text-slate-400" />
            </button>
          </div>
          
          <div className="pt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-medium text-slate-500">
             <div className="flex items-center gap-2"><CheckCircle2 className="text-gai-teal" size={18} /> Sem taxas ocultas</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-gai-teal" size={18} /> Suporte dedicado</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-gai-teal" size={18} /> Funciona offline</div>
          </div>
        </div>
      </section>

      {/* DORES SECTION */}
      <section className="py-32 px-4 relative border-t border-white/5 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-4 animate-on-scroll">
            <h2 className="text-3xl md:text-5xl font-black">Você se identifica com essas situações?</h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto">Gerir uma fábrica de gelo sem ferramentas adequadas é trabalhar no escuro.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Onde foi parar o gelo?",
                desc: "Diferenças constantes entre o que foi produzido e o que foi vendido. Derretimento, esquecimento ou desvio? Você nunca sabe com certeza.",
                icon: TrendingUp,
                color: "text-red-400",
                bg: "bg-red-400/10"
              },
              {
                title: "Clientes fiados e esquecidos",
                desc: "Controle de crédito feito na confiança ou no papel. Difícil de cobrar, fácil de esquecer. O seu lucro fica preso na rua.",
                icon: MessageSquare,
                color: "text-amber-400",
                bg: "bg-amber-400/10"
              },
              {
                title: "Caixa que nunca bate",
                desc: "No fim do dia, horas são perdidas somando recibos, transferências PIX e dinheiro físico. O fechamento é sempre uma dor de cabeça.",
                icon: Zap,
                color: "text-orange-400",
                bg: "bg-orange-400/10"
              }
            ].map((item, i) => (
              <div key={i} className="animate-on-scroll bg-[#0A0F1F] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-colors">
                <div className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className={item.color} size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 px-4 relative">
         {/* Glow Decor */}
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-gai-teal/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 space-y-4 animate-on-scroll">
            <h2 className="text-4xl md:text-6xl font-black">A solução definitiva. Tudo em um só lugar.</h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">Desenvolvido especificamente para a realidade de geleiros, atacados e distribuidoras.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 animate-on-scroll">
             <div className="space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gai-teal/20 text-gai-teal mb-2">
                   <Smartphone size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">PDV Ultrarrápido</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                   Venda no balcão ou na rua em segundos. Suporte total a varejo e atacado, emissão de recibos térmicos, controle de limite de crédito de clientes e múltiplas formas de pagamento na mesma venda.
                </p>
                <ul className="space-y-4 pt-4">
                   {['Modo offline para rotas sem internet', 'Impressão térmica via Bluetooth', 'Gestão de fiados e limite de crédito'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                        <CheckCircle2 className="text-gai-teal shrink-0" size={20} />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-gai-teal/20 to-transparent rounded-[2rem] blur-2xl transform -rotate-6"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-2xl aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center overflow-hidden">
                   {/* Abstract Representation of POS */}
                   <div className="w-full max-w-sm space-y-4">
                      <div className="h-12 bg-slate-800/50 rounded-xl w-full"></div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-32 bg-slate-800 rounded-2xl border border-slate-700 p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-full bg-gai-teal/20"></div>
                            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                         </div>
                         <div className="h-32 bg-slate-800 rounded-2xl border border-slate-700 p-4 flex flex-col justify-between">
                            <div className="w-8 h-8 rounded-full bg-blue-500/20"></div>
                            <div className="h-4 bg-slate-700 rounded w-1/2"></div>
                         </div>
                      </div>
                      <div className="h-16 bg-gai-teal rounded-xl w-full mt-8 shadow-lg shadow-teal-500/20 flex items-center justify-center">
                         <div className="h-2 w-1/3 bg-white/50 rounded-full"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center mb-32 animate-on-scroll">
             <div className="order-2 md:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-600/20 to-transparent rounded-[2rem] blur-2xl transform rotate-6"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-6 shadow-2xl aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center overflow-hidden">
                   {/* Abstract Representation of Dashboard/Finances */}
                   <div className="w-full max-w-sm space-y-4">
                      <div className="flex justify-between items-end mb-8">
                         <div className="space-y-2">
                           <div className="h-3 bg-slate-700 rounded w-16"></div>
                           <div className="h-8 bg-slate-200 rounded w-32"></div>
                         </div>
                         <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                            <TrendingUp size={16} className="text-green-500" />
                         </div>
                      </div>
                      <div className="flex items-end gap-2 h-40">
                         {[40, 70, 45, 90, 65, 100, 80].map((h, i) => (
                           <div key={i} className="flex-1 bg-gradient-to-t from-gai-teal/80 to-gai-teal rounded-t-sm" style={{ height: `${h}%` }}></div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             <div className="order-1 md:order-2 space-y-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/20 text-blue-400 mb-2">
                   <BarChart3 size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold">Gestão Financeira e Indicadores</h3>
                <p className="text-lg text-slate-400 leading-relaxed">
                   DRE automático, fechamento de caixa impecável e relatórios gerenciais reais. Saiba quanto a sua fábrica realmente lucra, quais são os maiores custos e quem são os melhores clientes.
                </p>
                <ul className="space-y-4 pt-4">
                   {['DRE (Demonstrativo de Resultado) Automático', 'Controle de Múltiplos Caixas', 'Análise de Lucratividade por Produto'].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                        <CheckCircle2 className="text-blue-400 shrink-0" size={20} />
                        {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Grid secundario */}
          <div className="grid md:grid-cols-3 gap-6 animate-on-scroll">
             {[
               { title: 'Controle de Produção', desc: 'Registre turnos, perda de gelo e produtividade por máquina.', icon: Zap },
               { title: 'Estoque Multi-Depósitos', desc: 'Gerencie Matriz, Filiais e caminhões com transferências simples.', icon: Database },
               { title: 'Segurança e Nuvem', desc: 'Criptografia avançada e backups diários. Seus dados sempre a salvo.', icon: ShieldCheck }
             ].map((feature, idx) => (
               <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                  <feature.icon className="text-slate-300 mb-6" size={32} />
                  <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                  <p className="text-slate-400">{feature.desc}</p>
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* COMPARATIVO SECTION */}
      <section id="comparativo" className="py-32 px-4 relative bg-slate-900/50 border-y border-white/5">
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">O Preço de Ficar no Passado</h2>
            <p className="text-slate-400 text-xl">Veja a diferença entre continuar como está e modernizar sua fábrica.</p>
          </div>

          <div className="bg-[#0A0F1F] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
             <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6 md:p-8">
                <div className="font-bold text-slate-400 text-lg">Característica</div>
                <div className="font-bold text-slate-400 text-lg flex items-center gap-2"><XCircle className="text-slate-500" /> Caderninho/Excel</div>
                <div className="font-black text-white text-xl flex items-center gap-2"><div className="w-6 h-6 bg-gai-teal rounded-md flex items-center justify-center text-slate-900 text-xs">G</div> G.AI</div>
             </div>
             
             {[
               { label: 'Fechamento de Caixa', old: 'Demorado e sujeito a erros matemáticos', new: 'Automático e à prova de falhas' },
               { label: 'Controle de Fiados', old: 'Fácil de esquecer de cobrar', new: 'Limites de crédito e extrato claro' },
               { label: 'Acesso Remoto', old: 'Só acessível onde o caderno está', new: 'Acesso pelo celular de qualquer lugar' },
               { label: 'Visão de Lucro Real', old: 'Apenas estimativas baseadas no "achômetro"', new: 'DRE e indicadores em tempo real' },
               { label: 'Perda de Dados', old: 'Alto risco (caderno molha, some)', new: 'Backup contínuo na nuvem' },
             ].map((row, i) => (
                <div key={i} className={`grid grid-cols-1 md:grid-cols-3 p-6 md:p-8 ${i !== 4 ? 'border-b border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}>
                   <div className="font-medium text-slate-300 mb-2 md:mb-0">{row.label}</div>
                   <div className="text-slate-500 md:pr-4 mb-2 md:mb-0 flex items-start gap-2">
                      <XCircle size={18} className="shrink-0 mt-0.5 opacity-50" />
                      <span>{row.old}</span>
                   </div>
                   <div className="text-gai-teal font-medium flex items-start gap-2">
                      <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                      <span>{row.new}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <footer className="relative py-32 px-4 overflow-hidden text-center">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gai-teal/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto space-y-10 relative z-10 animate-on-scroll">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            Pronto para o próximo nível?
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl font-medium">
            Junte-se aos produtores de gelo que já revolucionaram suas fábricas com o G.AI. Menos dores de cabeça, mais lucro no bolso.
          </p>
          
          <div className="flex justify-center pt-8">
            <button
              onClick={() => navigate('/login')}
              className="group relative px-10 py-5 bg-white text-slate-900 rounded-full font-black text-xl md:text-2xl transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
            >
              Começar Agora
              <div className="bg-slate-100 rounded-full p-1 group-hover:bg-gai-teal group-hover:text-slate-900 transition-colors">
                <ArrowRight size={24} />
              </div>
            </button>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-white/10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 text-slate-500 text-sm">
          <div className="flex items-center gap-2 font-bold text-slate-400">
             <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-[10px] text-white">G</div>
             G.AI - Gestão Auto Inteligente
          </div>
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <div className="flex gap-4">
             <a href="#" className="hover:text-white transition-colors">Termos</a>
             <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VisitorLanding;

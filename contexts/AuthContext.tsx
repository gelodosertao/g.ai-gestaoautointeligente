import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { User, Role } from '../types';

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProfile = async (sessionUser: any) => {
      try {
        const { data: profile, error } = await supabase
          .from('app_users')
          .select('*, tenants(name)')
          .eq('id', sessionUser.id)
          .single();

        if (error) {
          console.error('Error fetching user profile:', error);
          if (isMounted) {
            setCurrentUser(null);
            setIsLoading(false);
          }
          return;
        }

        if (isMounted && profile) {
          setCurrentUser({
            id: profile.id,
            name: profile.name,
            email: profile.email,
            role: profile.role as Role,
            avatarInitials: profile.avatar_initials,
            tenantId: profile.tenant_id || '00000000-0000-0000-0000-000000000000',
            tenantName: profile.tenants?.name || 'G.AI Gestão',
            allowedModules: profile.allowed_modules,
          });
        }
      } catch (err) {
        console.error('Unexpected error fetching profile:', err);
        if (isMounted) setCurrentUser(null);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        fetchProfile(session.user);
      } else {
        if (isMounted) {
          setCurrentUser(null);
          setIsLoading(false);
        }
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        fetchProfile(session.user);
      } else {
        if (isMounted) {
          setCurrentUser(null);
          setIsLoading(false);
        }
      }
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider value={{ currentUser, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import { supabase } from '../lib/supabase';

export async function handleLogin(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    throw error;
  }

  return data;
}

export async function handleLogout() {
  await supabase.auth.signOut();
}

export async function checkAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  return !!session;
}

export async function requireAuth() {
  const isAuthenticated = await checkAuth();
  
  if (!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  
  return {
    props: {},
  };
}
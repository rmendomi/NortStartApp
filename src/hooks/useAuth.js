import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";

/**
 * session: undefined (cargando) | null (no log) | objeto (log)
 * user: atajo de session?.user
 * isAuthed: boolean
 */
export function useAuth() {
  const [session, setSession] = useState(undefined);

  useEffect(() => {
    let mounted = true;

    // 1) sesión inicial
    supabase.auth.getSession().then(({ data }) => {
      if (mounted) setSession(data.session ?? null);
    });

    // 2) suscripción a cambios
    const { data: sub } = supabase.auth.onAuthStateChange((_evt, s) => {
      setSession(s ?? null);
    });

    return () => {
      mounted = false;
      sub?.subscription?.unsubscribe?.();
    };
  }, []);

  return { session, user: session?.user ?? null, isAuthed: !!session };
}

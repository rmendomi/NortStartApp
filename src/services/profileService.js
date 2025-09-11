import { supabase } from "./supabaseClient";

/** Obtiene el perfil del usuario actual */
export async function getMyProfile() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();
  if (error) throw error;
  return data;
}

/** Actualiza campos seguros del perfil propio */
export async function updateMyProfile(patch) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("No session");
  const { data, error } = await supabase
    .from("profiles")
    .update({ ...patch, updated_at: new Date().toISOString() })
    .eq("id", user.id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

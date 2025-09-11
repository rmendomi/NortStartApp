// src/services/supabaseClient.js  (editar: soporte a Functions en local opcional)
import { createClient } from "@supabase/supabase-js";
const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;
const functionsUrl = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL; // solo en local

export const supabase = createClient(url, key, {
  ...(functionsUrl ? { functions: { url: functionsUrl } } : {}),
});

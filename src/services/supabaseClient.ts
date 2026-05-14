import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn("Supabase credentials are missing (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).");
}

export const supabase = createClient(url || "", anonKey || "");

export async function createReservationSupabase(payload: any) {
  const { data, error } = await supabase.from("reservations").insert([payload]);
  return { data, error };
}

export async function listReservationsSupabase() {
  const { data, error } = await supabase.from("reservations").select("*").order("created_at", { ascending: false });
  return { data, error };
}

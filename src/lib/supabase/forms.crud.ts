import { supabase } from "../supabase.config";

export async function getForms() {
  const { data, error } = await supabase.from("forms").select("*");
  return { data, error };
}

export async function addNewForm(form: Record<string, any>) {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (!session || error) return { error };

  const data = supabase.from("forms").insert([
    {
      owner_id: session.user.id,
      form: form,
    },
  ]);

  return { data, error };
}

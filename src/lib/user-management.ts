import { SESSION_STORAGE_KEYS } from "@/constants/web-store";
import { supabase } from "./supabase.config";

export const logoutUser = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
  } else {
    sessionStorage.removeItem(SESSION_STORAGE_KEYS.REDIRECT_PATH);
  }
};

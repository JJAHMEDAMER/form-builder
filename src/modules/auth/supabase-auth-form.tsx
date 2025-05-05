import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase.config";
import AuthImages from "../../assets/images/auth/auth-page-image.png";
import { SESSION_STORAGE_KEYS } from "@/constants/web-store";
import { routes } from "@/constants/routes";

export default function SupabaseAuthForm() {
  const redirectToUrl =
    sessionStorage.getItem(SESSION_STORAGE_KEYS.REDIRECT_PATH) || routes.home;

  return (
    <div className="container flex h-full w-full items-center justify-center gap-8">
      <div className="max-w-lg flex-1 lg:max-w-none">
        <h1 className="mb-4 text-center text-3xl font-bold">Welcome back!</h1>
        <Auth
          providers={[]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          redirectTo={redirectToUrl} // For email redirects
        />
      </div>
      <div className="hidden flex-1 lg:block">
        <img
          src={AuthImages}
          alt="Supabase Logo"
          className="mx-auto mb-4 w-full"
        />
      </div>
    </div>
  );
}

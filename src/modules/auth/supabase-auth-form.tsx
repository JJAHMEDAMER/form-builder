import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/lib/supabase.config";
import AuthImages from "../../assets/images/auth/auth-page-image.png";
import { SESSION_STORAGE_KEYS } from "@/constants/web-store";
import { routes } from "@/constants/routes";

export default function SupabaseAuthForm() {
  const redirectToUrl =
    sessionStorage.getItem(SESSION_STORAGE_KEYS.REDIRECT_PATH) || routes.home;

  console.log("redirectToUrl", redirectToUrl);
  return (
    <div className="container h-full flex items-center justify-center w-full gap-8">
      <div className="flex-1 max-w-lg lg:max-w-none">
        <h1 className="text-3xl font-bold text-center mb-4">Welcome back!</h1>
        <Auth
          providers={[]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          redirectTo={redirectToUrl}
        />
      </div>
      <div className="flex-1 hidden lg:block">
        <img
          src={AuthImages}
          alt="Supabase Logo"
          className="w-full mx-auto mb-4"
        />
      </div>
    </div>
  );
}

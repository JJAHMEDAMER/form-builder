import { useState, useEffect, createContext, useContext } from "react";
import { Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase.config";
import { Outlet, useNavigate } from "react-router";
import { routes } from "@/constants/routes";

interface AuthContext {
  session: Session | null | undefined;
}

const initialContext: AuthContext = {
  session: undefined,
};

const AuthContext = createContext<AuthContext>(initialContext);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export const AuthContextProvider = () => {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (event === "SIGNED_IN") {
        navigate(sessionStorage.getItem("redirectPath") || routes.home);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const sharedState: AuthContext = {
    session,
  };

  return (
    <AuthContext.Provider value={sharedState}>
      <Outlet />
    </AuthContext.Provider>
  );
};

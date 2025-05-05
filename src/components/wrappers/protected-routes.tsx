import { routes } from "@/constants/routes";
import { SESSION_STORAGE_KEYS } from "@/constants/web-store";
import { useAuthContext } from "@/context/auth-context";
import { useEffect } from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session } = useAuthContext();

  useEffect(() => {
    if (!session) {
      sessionStorage.setItem(
        SESSION_STORAGE_KEYS.REDIRECT_PATH,
        window.location.pathname,
      );
    }
  }, [session]);

  if (!session) {
    return <Navigate to={routes.auth} />;
  }

  return children;
}

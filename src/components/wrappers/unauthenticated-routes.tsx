import React from "react";
import { SESSION_STORAGE_KEYS } from "@/constants/web-store";
import { Navigate, Outlet, useLoaderData } from "react-router";
import { supabase } from "@/lib/supabase.config";
import { routes } from "@/constants/routes";

export const unauthenticatedRoutesLoader = async () => {
  const userSession = await supabase.auth.getSession();
  const { session } = userSession.data;
  return session;
};

export function UnauthenticatedRoutes({
  children,
}: {
  children?: React.ReactNode;
}) {
  const session = useLoaderData();

  if (session) {
    const redirectPath =
      sessionStorage.getItem(SESSION_STORAGE_KEYS.REDIRECT_PATH) ?? routes.home;
    return <Navigate to={redirectPath} />;
  }

  return children ?? <Outlet />;
}

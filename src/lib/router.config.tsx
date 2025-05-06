import { MainLayout } from "@/layouts/main-layout";
import { AuthContextProvider } from "@/context/auth-context";
import SupabaseAuthForm from "@/modules/auth/supabase-auth-form";
import { getUserPageContentLoader, HomePage } from "@/modules/home/home-page";
import { createBrowserRouter } from "react-router";
import { routes } from "@/constants/routes";
import ProtectedRoute from "@/components/wrappers/protected-routes";
import {
  UnauthenticatedRoutes,
  unauthenticatedRoutesLoader,
} from "@/components/wrappers/unauthenticated-routes";
import ThemeProvider from "@/context/app-theme";

export const router = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <AuthContextProvider />
      </ThemeProvider>
    ),
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: routes.home,
            loader: getUserPageContentLoader,
            element: (
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            ),
          },
          {
            path: routes.auth,
            loader: unauthenticatedRoutesLoader,
            element: (
              <UnauthenticatedRoutes>
                <SupabaseAuthForm />
              </UnauthenticatedRoutes>
            ),
          },
        ],
      },
    ],
  },
]);

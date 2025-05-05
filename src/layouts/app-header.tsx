import { routes } from "@/constants/routes";
import { useThemeContext } from "@/context/app-theme";
import { useAuthContext } from "@/context/auth-context";
import { logoutUser } from "@/lib/user-management";
import { MoonIcon, SunIcon } from "lucide-react";
import { useNavigate } from "react-router";

export default function AppHeader() {
  const { session } = useAuthContext();
  const navigate = useNavigate();
  const { theme, toggleThemeState } = useThemeContext();

  const handleLogOutButton = () => {
    session ? logoutUser() : navigate(routes.auth);
  };

  return (
    <header className="bg-surface-200 flex h-full items-center p-4">
      <div className="container flex w-full items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Form Builder</h1>
          <p className="text-text-400 text-sm">Build forms with ease</p>
        </div>

        <span className="text-sm font-semibold text-gray-300">
          {session ? `Welcome, ${session.user.email}` : "Please log in"}
        </span>

        <button className="cursor-pointer" onClick={toggleThemeState}>
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 text-yellow-400" />
          ) : (
            <MoonIcon className="h-6 w-6 text-gray-300" />
          )}
        </button>

        <button
          onClick={handleLogOutButton}
          className="mt-4 cursor-pointer rounded bg-red-600 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
          {session ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}

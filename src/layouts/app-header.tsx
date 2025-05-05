import { routes } from "@/constants/routes";
import { useAuthContext } from "@/context/AuthContext";
import { logoutUser } from "@/lib/user-management";
import { useNavigate } from "react-router";

export default function AppHeader() {
  const { session } = useAuthContext();
  const navigate = useNavigate();

  const handleLogOutButton = () => {
    session ? logoutUser() : navigate(routes.auth);
  };

  return (
    <header className="flex h-full items-center bg-sky-900 p-4 text-white">
      <div className="container flex w-full items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Form Builder</h1>
          <p className="text-sm text-gray-300">Build forms with ease</p>
        </div>

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

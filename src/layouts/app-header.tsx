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
    <header className="flex items-center h-full bg-sky-900 text-white p-4">
      <div className="w-full container flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Form Builder</h1>
          <p className="text-sm text-gray-300">Build forms with ease</p>
        </div>

        <button
          onClick={handleLogOutButton}
          className="mt-4 cursor-pointer bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          {session ? "Logout" : "Login"}
        </button>
      </div>
    </header>
  );
}

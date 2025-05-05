import { Outlet } from "react-router";
import AppHeader from "./app-header";

export const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-10 h-[5rem]">
        <AppHeader />
      </div>
      <div className="relative container h-[calc(100vh-5rem)]">
        <Outlet />
      </div>
    </div>
  );
};

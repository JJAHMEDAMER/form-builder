import { getTheme, initializeTheme, toggleTheme } from "@/lib/theme";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Outlet } from "react-router";

const themeContext = createContext({
  theme: getTheme(),
  toggleThemeState: () => {},
});

export const useThemeContext = () => {
  const context = useContext(themeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};

export default function ThemeProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [themeState, setThemeState] = useState(getTheme);

  useEffect(() => {
    initializeTheme();
  }, []);

  const toggleThemeState = useCallback(() => {
    setThemeState(toggleTheme());
  }, []);

  const value = useMemo(
    () => ({ theme: themeState, toggleThemeState }),
    [themeState],
  );

  return (
    <themeContext.Provider value={value}>
      {children ?? <Outlet />}
    </themeContext.Provider>
  );
}

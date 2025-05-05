import { LOCALE_STORAGE_KEYS } from "@/constants/web-store";

type Theme = "dark" | "light";

function getSystemTheme(): Theme {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  return systemPrefersDark ? "dark" : "light";
}

function getThemeFromLocalStorage(): Theme | undefined {
  const storedTheme = localStorage.getItem(LOCALE_STORAGE_KEYS.THEME);
  if (storedTheme === "dark" || storedTheme === "light") {
    return storedTheme as Theme;
  }
  return undefined;
}

export function initializeTheme(): void {
  const stored = getThemeFromLocalStorage();
  const systemPrefersDark = getSystemTheme();

  const theme = stored ?? systemPrefersDark;
  document.documentElement.setAttribute("data-theme", theme);
}

export function toggleTheme(): Theme {
  const stored = getThemeFromLocalStorage();
  const systemPrefersDark = getSystemTheme();

  const base = stored ?? systemPrefersDark;
  const next = base === "light" ? "dark" : "light";

  localStorage.setItem(LOCALE_STORAGE_KEYS.THEME, next);
  document.documentElement.setAttribute("data-theme", next);
  return next;
}

export function getTheme(): Theme {
  const stored = getThemeFromLocalStorage();
  const systemPrefersDark = getSystemTheme();

  return stored ?? systemPrefersDark;
}

export function setTheme(theme: string): void {
  localStorage.setItem(LOCALE_STORAGE_KEYS.THEME, theme);
  document.documentElement.setAttribute("data-theme", theme);
}

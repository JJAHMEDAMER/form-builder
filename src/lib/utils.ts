import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lastModified(dateString: string) {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  const timeSec = Date.now() - date.getTime();

  if (timeSec > 1000 * 60 * 60 * 24 * 7)
    return `Modified ${date.toLocaleDateString()}`;

  if (timeSec > 1000 * 60 * 60 * 24)
    return `Modified ${Math.floor(timeSec / 1000 / 60 / 60 / 24)}d ago`;

  if (timeSec > 1000 * 60 * 60)
    return `Modified ${Math.floor(timeSec / 1000 / 60 / 60)}h ago`;

  if (timeSec > 1000 * 60)
    return `Modified ${Math.floor(timeSec / 1000 / 60)}m ago`;

  if (timeSec > 1000) return `Modified ${Math.floor(timeSec / 1000)}s ago`;
}

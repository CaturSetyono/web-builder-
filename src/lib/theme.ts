export function applyTheme(theme?: {
  primary?: string;
  secondary?: string;
  background?: string;
  text?: string;
  mode?: "light" | "dark";
}) {
  if (typeof window === "undefined") return;

  const root = document.documentElement;

  if (theme?.primary) {
    root.style.setProperty("--primary", theme.primary);
  }
  if (theme?.secondary) {
    root.style.setProperty("--secondary", theme.secondary);
  }
  if (theme?.background) {
    root.style.setProperty("--background", theme.background);
  }
  if (theme?.text) {
    root.style.setProperty("--foreground", theme.text);
  }
  if (theme?.mode) {
    root.classList.toggle("dark", theme.mode === "dark");
  }
}

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored) setDark(stored === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    window.localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="surface relative flex h-9 w-[4.25rem] shrink-0 items-center rounded-full px-1 transition-colors hover:border-primary/40"
    >
      <span
        className="absolute h-7 w-7 rounded-full bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: dark ? "translateX(2.1rem)" : "translateX(0)" }}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-1.5">
        <Sun
          className={`h-4 w-4 transition-colors ${dark ? "text-muted-foreground" : "text-primary-foreground"}`}
        />
        <Moon
          className={`h-4 w-4 transition-colors ${dark ? "text-primary-foreground" : "text-muted-foreground"}`}
        />
      </span>
    </button>
  );
}

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type DaisyTheme = "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate";

interface ThemeContextType {
  theme: DaisyTheme;
  toggleTheme: () => void;
  setTheme: (theme: DaisyTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<DaisyTheme>(() => {
    return (localStorage.getItem("theme") as DaisyTheme) || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === "dark" ? "light" : "dark"));
  };

  const setTheme = (newTheme: DaisyTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
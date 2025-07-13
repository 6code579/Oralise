// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type DaisyTheme = "light" | "dark" | "cupcake" | "bumblebee" | "emerald" | "corporate";

interface ThemeContextType {
  theme: DaisyTheme;
  toggleTheme: () => void;
  setTheme: (theme: DaisyTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<DaisyTheme>(() => {
    return (localStorage.getItem("theme") as DaisyTheme) || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
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

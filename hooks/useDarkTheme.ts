import { useState, useEffect, useCallback } from "react";

const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

const useDarkTheme = () => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  //TODO: enable this later
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme && ["dark", "light"]?.includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const themeToggler = useCallback(() => {
    const updatedTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  }, [theme]);

  return { theme, themeToggler };
};

export default useDarkTheme;

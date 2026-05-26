import { useLayoutEffect, useState } from "react";
import { ThemeContext } from "./theme_context";

const THEME_STORAGE_KEY = "portfolio-theme";

export const ThemeProvider = ({ children }) => {
  const [swLight, setSwLight] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === "light"
  );

  useLayoutEffect(() => {
    const theme = swLight ? "light" : "dark";

    document.body.className = `body--${theme}`;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [swLight]);

  const handleSwLight = () => {
    setSwLight((isLight) => !isLight);
  };

  return (
    <ThemeContext.Provider value={{ swLight, handleSwLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

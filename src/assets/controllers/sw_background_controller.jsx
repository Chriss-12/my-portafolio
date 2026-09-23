import { useLayoutEffect, useState } from "react";
import { ThemeContext } from "./theme_context";

const THEME_STORAGE_KEY = "portfolio-theme";
const PALETTE_STORAGE_KEY = "portfolio-palette";

export const ThemeProvider = ({ children }) => {
  const [swLight, setSwLight] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === "light"
  );
  const [palette, setPalette] = useState(
    () => localStorage.getItem(PALETTE_STORAGE_KEY) === "lantern" ? "lantern" : "original"
  );

  useLayoutEffect(() => {
    const theme = swLight ? "light" : "dark";

    document.body.classList.toggle("body--light", swLight);
    document.body.classList.toggle("body--dark", !swLight);
    document.body.classList.toggle("palette--lantern", palette === "lantern");
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    localStorage.setItem(PALETTE_STORAGE_KEY, palette);
  }, [swLight, palette]);

  const handleSwLight = () => {
    setSwLight((isLight) => !isLight);
  };

  return (
    <ThemeContext.Provider value={{ swLight, handleSwLight, palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

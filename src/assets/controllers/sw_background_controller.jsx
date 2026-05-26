import { useEffect, useState } from "react";
import { ThemeContext } from "./theme_context";

export const ThemeProvider = ({ children }) => {
  const [swLight, setSwLight] = useState(true);

  useEffect(() => {
    document.body.className = swLight ? "body--light" : "body--dark";
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

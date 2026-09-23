import { useEffect, useState } from "react";
import { translations } from "../../data/translations";
import { LanguageContext } from "./language_context_value";

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // Browser settings can disable local storage; language detection still works.
  }

  const preferred = navigator.languages?.[0] || navigator.language || "es";
  return preferred.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "es"
      ? "Cristhian Alave Sanjines | Desarrollo Full Stack"
      : "Cristhian Alave Sanjines | Full Stack Developer";
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      language === "es"
        ? "Cristhian Alave Sanjines, ingeniero en sistemas y desarrollador Full Stack en La Paz, Bolivia. Desarrollo web, móvil y automatización."
        : "Cristhian Alave Sanjines, systems engineer and Full Stack developer in La Paz, Bolivia. Web and mobile development, and automation.",
    );
  }, [language]);

  const changeLanguage = (nextLanguage) => {
    if (nextLanguage !== "es" && nextLanguage !== "en") return;
    setLanguage(nextLanguage);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // The manual switch still works during this visit.
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, copy: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

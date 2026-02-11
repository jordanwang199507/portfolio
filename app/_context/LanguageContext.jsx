"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext();

const STORAGE_KEY = "jw_portfolio_lang";

/**
 * Supported:
 * - "en" (English, 🇨🇦)
 * - "zh-TW" (Traditional Chinese, 🇹🇼)
 */
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  // detect browser language on first load (but allow stored override)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "zh-TW") {
        setLang(stored);
      } else {
        const browserLang = navigator.language || "en";
        setLang(browserLang.toLowerCase().startsWith("zh") ? "zh-TW" : "en");
      }
    } catch {
      // ignore
    } finally {
      setMounted(true);
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === "en" ? "zh-TW" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  const value = useMemo(
    () => ({
      lang,
      mounted,
      toggleLanguage,
      isEN: lang === "en",
      isZHTW: lang === "zh-TW",
    }),
    [lang, mounted]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);

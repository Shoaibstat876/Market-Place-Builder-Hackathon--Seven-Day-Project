import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../public/locals/eng/common.json"; // ✅ Corrected path
import urTranslation from "../public/locals/ur/common.json"; // ✅ Corrected path

const storedLanguage = typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ur: { translation: urTranslation },
  },
  lng: storedLanguage, // Load the last selected language
  fallbackLng: "en", // Fallback to English
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("language", lng);
});

export default i18n;

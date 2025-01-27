import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";

const userLanguage = navigator.language.startsWith("es") ? "es" : "en";

i18n
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
    },
    supportedLngs: ["en", "es"],
    lng: userLanguage, // Default language based on user device
    fallbackLng: "en", // Fallback language
    debug: false,
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"], // Store the user's language in a cookie
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;

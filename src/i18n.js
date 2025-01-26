import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./locales/en/translation.json"; // Importing JSON using import
import esTranslation from "./locales/es/translation.json";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    supportedLngs: ["en", "es"],
    fallbackLng: "en",
    debug: false,
    backend: {
      loadPath: "/src/locales/{{lng}}/translation.json",
    },
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
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

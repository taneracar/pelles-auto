import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../src/locales/en/translation.json"
import es from "../src/locales/es/translation.json"
const resources = {
  en: { translation: en },
  es: { translation: es },
};

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
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

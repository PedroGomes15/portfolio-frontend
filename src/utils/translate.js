import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,

  resources: {
    en: {
      translation: require("../locales/en.json"),
    },
    ptbr: {
      translation: require("../locales/ptbr.json"),
    },
  },
});

export const translate = i18n.t.bind(i18n);

export default i18n;

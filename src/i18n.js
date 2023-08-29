import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_es from "./translations/es/global.json";
import global_en from "./translations/en/global.json";

const resources = {
  es: {
    global: global_es,
  },
  en: {
    global: global_en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

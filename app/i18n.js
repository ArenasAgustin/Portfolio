import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_es from "../translations/es/global.json";
import education_es from "../translations/es/education.json";
import experience_es from "../translations/es/experience.json";
import projects_es from "../translations/es/projects.json";

import global_en from "../translations/en/global.json";
import education_en from "../translations/en/education.json";
import experience_en from "../translations/en/experience.json";
import projects_en from "../translations/en/projects.json";

const resources = {
  es: {
    global: {
      ...global_es,
      education: { ...education_es },
      experience: { ...experience_es },
      projects: { ...projects_es },
    },
  },
  en: {
    global: {
      ...global_en,
      education: { ...education_en },
      experience: { ...experience_en },
      projects: { ...projects_en },
    },
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

import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import answers_en from "./translations/en/en.json";
import answers_ua from "./translations/ua/ua.json";
import answers_deu from "./translations/deu/deu.json";
import answers_fre from "./translations/fre/fre.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          answers: answers_en,
        },
      },
      ua: {
        translation: {
          answers: answers_ua,
        },
      },
      deu: {
        translation: {
          answers: answers_deu,
        },
      },
      fre: {
        translation: {
          answers: answers_fre,
        },
      },
    },
  });

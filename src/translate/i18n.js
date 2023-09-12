import i18next from "i18next";
import { initReactI18next } from "react-i18next";
//ru VS en
import translationRu from "./locales/ru.json";
import translationEn from "./locales/en.json";

i18next.use(initReactI18next).init({
  resources: {
    ru: {
      translation:  translationRu,
    },
    us: {
      translation:  translationEn,
    },
  },
  detection: {
    order: ["localStorage", "cookie"],
    cashes: ["localStorage", "cookie"],
  },
  lng: "ru",
  fallbackLng: "ru",
  whiteList: ["ru", "en"],
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});


export default i18next;


// import { initReactI18next } from "react-i18next";
// //kg VS ru
// import enJson from "./locales/en.json";
// import ruJson from "./locales/ru.json";

// const resources = {
//   en: {
//     translation: enJson,
//   },
//   ru: {
//     translation: ruJson,
//   },
// };

// i18next.use(initReactI18next).init({
//   lng: "ru",
//   fallbackLng: "ru",
//   debug: true,
//   resources,
// });

// export default i18next;

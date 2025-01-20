import i18n from 'i18next'
import HttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    lng: 'es', 
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/src/utils/lang/{{lng}}/translation.json',
    },
  });

export default i18n;

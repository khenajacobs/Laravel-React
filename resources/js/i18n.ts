import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        //TODO: HMW define multiple language files?
        "randomView": {
          "title": "Random View",
          "description": "This is a random view component.",
          "currentCount": "Current count: {{count}}",
          "incrementButton": "Increment"
        }
      }
    },
    // Add other languages here
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;
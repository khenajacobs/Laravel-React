import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "randomView": {
          "title": "Random View",
          "description": "This is a random view component.",
          "currentCount": "Current count: {{count}}",
          "incrementButton": "Increment"
        }
      }
    },
    nl_BE: {
      translation: {
        "randomView": {
          "title": "Willekeurige Weergave",
          "description": "Dit is een willekeurige weergavecomponent.",
          "currentCount": "Huidige telling: {{count}}",
          "incrementButton": "Verhogen"
        }
      }
    },
    fr_BE: {
      translation: {
        "randomView": {
          "title": "Vue Aléatoire",
          "description": "Ceci est un composant de vue aléatoire.",
          "currentCount": "Compte actuel: {{count}}",
          "incrementButton": "Incrémenter"
        }
      }
    }
  },
  lng: selectedLanguage, // Use the selected language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;
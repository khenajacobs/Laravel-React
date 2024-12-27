import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en_translations from './locales/en';
import nl_translations from './locales/nl';
import fr_translations from './locales/fr';
import { FALLBACK_LANGUAGE } from '../defaults';

const selectedLanguage = localStorage.getItem('selectedLanguage') || FALLBACK_LANGUAGE;

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en_translations
    },
    nl_BE: {
      translation: nl_translations
    },
    fr_BE: {
      translation: fr_translations
    }
  },
  lng: selectedLanguage, // Use the selected language
  fallbackLng: FALLBACK_LANGUAGE, // Fallback to English if the selected language file is missing
  interpolation: {
    escapeValue: false // React already escapes values
  }
});

export default i18n;
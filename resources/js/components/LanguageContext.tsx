import React, { createContext, useState, useEffect } from 'react';
import i18n from './i18n';

export const LanguageContext = createContext({
  language: 'en',
  changeLanguage: (lang: string) => {}
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('selectedLanguage', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
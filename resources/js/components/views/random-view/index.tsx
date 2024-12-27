import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { RandomView } from './view/RandomView';
import '../../config/i18n';
import i18n from 'i18next';
import { LanguageProvider } from '../../contexts/LanguageContext';

const rootElement = document.getElementById('random');

const locale = document.getElementById('app')?.getAttribute('data-locale') || 'en';
i18n.changeLanguage(locale);

if (rootElement) {
  // Using React 18's createRoot method
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
       <RandomView />
      </LanguageProvider>
    </React.StrictMode>
  );
}
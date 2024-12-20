import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { RoutesProvider } from './contexts/RoutesContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ReactTestView } from './views/ReactTest.view';
import { LanguageProvider } from '../../LanguageContext';

const reactTestElement = document.getElementById('react-test');

if (reactTestElement) {
  // Using React 18's createRoot method
  const root = ReactDOM.createRoot(reactTestElement);
  root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <LanguageProvider>
          <ReactTestView />
        </LanguageProvider>
        {/* </BrowserRouter> */}
    </React.StrictMode>
  );
}

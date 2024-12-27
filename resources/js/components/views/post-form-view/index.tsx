import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { LanguageProvider } from '../../contexts/LanguageContext';
import FormView from './FormView';

const reactTestElement = document.getElementById('post-form');

if (reactTestElement) {
  // Using React 18's createRoot method
  const root = ReactDOM.createRoot(reactTestElement);
  root.render(
    <React.StrictMode>
        {/* <BrowserRouter> */}
        <LanguageProvider>
          <FormView />
        </LanguageProvider>
        {/* </BrowserRouter> */}
    </React.StrictMode>
  );
}

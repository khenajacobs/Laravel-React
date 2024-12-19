import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import Example from '../example-component/Example';
import { Header } from '../react-test-page/components/header/Header';
import { BrowserRouter } from 'react-router-dom';
import { RoutesProvider } from '../react-test-page/contexts/RoutesContext';
import { Layout } from '../react-test-page/components/layout/Layout';

const rootElement = document.getElementById('app');

if (rootElement) {
  // Using React 18's createRoot method
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      <RoutesProvider>
        <Layout>
          <Example />
        </Layout>
      </RoutesProvider>
      </BrowserRouter>

    </React.StrictMode>
  );
}
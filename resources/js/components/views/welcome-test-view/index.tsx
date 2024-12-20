import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import { BrowserRouter } from 'react-router-dom';
import Example from '../../components/example-component/Example';
import { Layout } from '../../components/layout/Layout';
// import { RoutesProvider } from '../react-test-page/contexts/RoutesContext';

const rootElement = document.getElementById('app');

if (rootElement) {
  // Using React 18's createRoot method
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
      {/* <RoutesProvider> */}
        <Layout>
          <Example />
        </Layout>
      {/* </RoutesProvider> */}
      </BrowserRouter>

    </React.StrictMode>
  );
}
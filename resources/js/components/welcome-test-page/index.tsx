import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import Example from '../example-component/Example';

const rootElement = document.getElementById('app');

if (rootElement) {
  // Using React 18's createRoot method
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Example />
    </React.StrictMode>
  );
}
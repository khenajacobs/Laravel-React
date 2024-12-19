import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../react-test-page/components/layout/Layout';
import { RoutesProvider } from '../../react-test-page/contexts/RoutesContext';

export const RandomView: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <RoutesProvider>
      <Layout>
        <div className="random-view p-4 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-center text-2xl font-bold mb-4">{t('randomView.title')}</h1>
          <p className="mb-2">{t('randomView.description')}</p>
          <p className="mb-4">{t('randomView.currentCount', { count })}</p>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            onClick={incrementCount}
          >
            {t('randomView.incrementButton')}
          </button>
        </div>
      </Layout>
    </RoutesProvider>
  );
};
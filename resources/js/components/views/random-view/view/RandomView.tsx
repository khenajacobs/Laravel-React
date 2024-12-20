import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../../components/layout/Layout';
// import { RoutesProvider } from '../../react-test-page/contexts/RoutesContext';

export const RandomView: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
      <Layout>
        <div className="random-view p-4 bg-gray-100 rounded-lg shadow-md" role="main" aria-labelledby="random-view-title">
          <h1 id="random-view-title" className="text-center text-2xl font-bold mb-4">{t('randomView.title')}</h1>
          <p className="mb-2">{t('randomView.description')}</p>
          <p className="mb-4">{t('randomView.currentCount', { count })}</p>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
            onClick={incrementCount}
            aria-label={t('randomView.incrementButton')}
          >
            {t('randomView.incrementButton')}
          </button>
          {count >= 4 && (
            <div className="random-content mt-4 p-4 bg-green-100 rounded-lg shadow-md" role="region" aria-labelledby="extra-content-title">
              <h2 id="extra-content-title" className="text-center text-xl font-bold mb-2">{t('randomView.extraContentTitle')}</h2>
              <p>{t('randomView.extraContentDescription')}</p>
              {/* Add more content here as needed */}
            </div>
          )}
        </div>
      </Layout>
  );
};
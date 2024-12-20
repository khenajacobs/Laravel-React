import React, { useEffect, useState } from 'react';
import { RoutesProvider } from '../contexts/RoutesContext';
import { useTranslation } from 'react-i18next';

import './ReactTest.view.scss';
import { Layout } from '../../../components/layout/Layout';
import Spinner from '../../../components/spinner/Spinner.component';
import { ReactTestComponent } from '../../../components/table/ReactTest.component';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const ReactTestView: React.FC = () => {
  const { t } = useTranslation();

  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    loading ? (
      <Spinner />
    ) : (
      <RoutesProvider>
        <Layout>
          <main role="main" aria-labelledby="page-title">
            <header>
              <h1 id="page-title" className="text-center">{t('reactTestPage.title')}</h1>
            </header>
            <section aria-labelledby="todos-section-title">
              <h2 id="todos-section-title" className="sr-only">{t('reactTestPage.todosSectionTitle')}</h2>
              <ReactTestComponent todos={todos} />
            </section>
          </main>
        </Layout>
      </RoutesProvider>
    )
  );
};
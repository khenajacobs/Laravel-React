import React, { useEffect, useState } from 'react';
import { RoutesProvider } from '../contexts/RoutesContext';
import { Layout } from '../components/layout/Layout';
import { ReactTestComponent } from '../components/ReactTest.component';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const ReactTestView: React.FC = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    // <RoutesProvider>
      <Layout>
        <h1 className="text-center">React Test Page!</h1>
        <ReactTestComponent todos={todos} />
      </Layout>
    // </RoutesProvider>
  );
};
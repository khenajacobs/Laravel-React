import React from 'react';
import './ReactTest.component.scss';
import { useTranslation } from 'react-i18next';
import '../../i18n';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface ReactTestComponentProps {
  todos: Todo[];
}

export const ReactTestComponent: React.FC<ReactTestComponentProps> = ({ todos }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold mb-2">{t('reactTestPage.todoList')}</h1>
      <table className="min-w-full bg-white border border-gray-200 table-shadow" aria-label={t('reactTestPage.todoList')}>
        <caption className="sr-only">{t('reactTestPage.todoList')}</caption>
        <thead>
          <tr>
            <th className="py-2 px-4 border-b" scope="col">{t('reactTestPage.id')}</th>
            <th className="py-2 px-4 border-b" scope="col">{t('reactTestPage.title')}</th>
            <th className="py-2 px-4 border-b" scope="col">{t('reactTestPage.completed')}</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td className="py-2 px-4 border-b" scope="row">{todo.id}</td>
              <td className="py-2 px-4 border-b">{todo.title}</td>
              <td className="py-2 px-4 border-b">{todo.completed ? t('reactTestPage.yes') : t('reactTestPage.no')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
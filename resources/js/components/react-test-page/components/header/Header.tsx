import React from 'react';
import { Link } from 'react-router-dom';
import { useRoutes } from '../../contexts/RoutesContext';

export const Header: React.FC = () => {
  // const routes = useRoutes();

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">My App</div>
      </nav>
    </header>
  );
};
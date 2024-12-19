import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRoutes } from '../../contexts/RoutesContext';
import axios from 'axios';

export const Header: React.FC = () => {
  const routes = useRoutes();
  const navigate = useNavigate();

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <div className="text-lg font-bold">My App</div>
        <div>
          {routes.map((route) => (
            route.path === '/' ? (
              <Link key={route.path} to={route.path} className="mr-4" onClick={handleHomeClick}>
                {route.name}
              </Link>
            ) : (
              <Link key={route.path} to={route.path} className="mr-4">
                {route.name}
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
};
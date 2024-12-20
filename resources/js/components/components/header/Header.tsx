import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRoutes } from '../../views/react-test-view/contexts/RoutesContext';

export const Header: React.FC = () => {
  const routes = useRoutes();
  const navigate = useNavigate();

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <header className="bg-blue-500 text-white p-4" role="banner">
      <nav className="flex justify-between" role="navigation" aria-label="Main Navigation">
        <div className="text-lg font-bold">My App</div>
        <div>
          {routes.map((route) => (
            route.path === '/' ? (
              <Link key={route.path} to={route.path} className="mr-4" onClick={handleHomeClick}>
                <span>{route.name}</span>
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
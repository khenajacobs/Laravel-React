import React, { createContext, useContext, ReactNode } from 'react';
import { routes, Route } from './routes';

interface RoutesContextProps {
  routes: Route[];
}

// Context for Routes to determine the routes that should be rendered in the Router
const RoutesContext = createContext<RoutesContextProps | undefined>(undefined);

// Components that should be rendered inside the RouterProvider Wrapper
interface RoutesProviderProps {
  children: ReactNode;
}

export const RoutesProvider: React.FC<RoutesProviderProps> = ({ children }) => {
  if (!routes || routes.length === 0) {
    console.error('RoutesProvider: No routes provided.');
  }

  return (
    <RoutesContext.Provider value={{ routes }}>
      {children}
    </RoutesContext.Provider>
  );
};

// Function used by components to get the routes that should be rendered
export const useRoutes = (): Route[] => {
  const context = useContext(RoutesContext);
  if (!context) {
    const errorMessage = 'useRoutes must be used within a RoutesProvider';
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
  return context.routes;
};
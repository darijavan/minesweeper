import React, { createContext, useContext, useState } from 'react';

export interface RouteState {
  location: string;
}

export interface RouteContext extends RouteState {
  push: (path: string) => void;
}

const RoutingContext = createContext<RouteContext>({
  location: '/',
  push: () => {},
});

export const useLocation: () => string = () =>
  useContext(RoutingContext).location;

export interface RouterProps {
  defaultRoute?: string;
}

export const Router: React.FC<RouterProps> = ({ children, defaultRoute }) => {
  const [location, setLocation] = useState<string | null>(defaultRoute);

  return (
    <RoutingContext.Provider
      value={{
        location: location || '/',
        push: (path) => setLocation(path),
      }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export interface RouteProps {
  path: string;
  component?: React.ElementType<RouteState>;
}

export const Route: React.FC<RouteProps> = ({
  path,
  children,
  component: Component,
}) => {
  const location = useLocation();

  if (location === path) {
    if (Component) return <Component location={path} />;

    return <>{children}</>;
  }

  return null;
};

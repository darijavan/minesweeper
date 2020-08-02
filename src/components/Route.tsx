import React, { createContext, useContext, useState } from 'react';

export interface RouteState {
  location: string;
}

export interface RouteAction {
  push: (path: string) => void;
  pop: () => void;
}

export type RouteContext = RouteState & RouteAction;

const RoutingContext = createContext<RouteContext>({
  location: '/',
  push: () => {},
  pop: () => {},
});

export interface RouterProps {
  defaultRoute?: string;
}

export const Router: React.FC<RouterProps> = ({ children, defaultRoute }) => {
  const [{ location }, setState] = useState<RouteState | null>({
    location: defaultRoute || '/',
  });
  const [states, setStates] = useState<RouteState[]>([]);

  return (
    <RoutingContext.Provider
      value={{
        location: location || '/',
        push: (location) => {
          setState({ location });
          setStates((states) => [...states, { location }]);
        },
        pop: () => {
          const prevState = states.pop();
          setState(prevState);
          setStates([...states]);
        },
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

  if (location === path)
    return (
      <div id={location} role="routing">
        {(Component && <Component location={location}>{children}</Component>) ||
          children}
      </div>
    );

  return null;
};

// ------------ HOOKS ------------
export const useLocation: () => string = () =>
  useContext(RoutingContext).location;

export const useRouter: () => RouteAction = () => {
  const { location, ...actions } = useContext(RoutingContext);

  return actions;
};

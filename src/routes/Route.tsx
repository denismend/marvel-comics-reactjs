import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouterProps
} from 'react-router-dom';


interface RouteProps extends ReactDOMRouterProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />
      }}
    />
  );
};

export default Route;

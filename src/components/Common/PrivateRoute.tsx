import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const accessToken = localStorage.getItem('access_token');
  const isLoggedIn = Boolean(accessToken);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};

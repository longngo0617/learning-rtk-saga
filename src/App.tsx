import React from 'react';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LoginPage } from 'features/auth/pages/LoginPage';
import { MainLayout } from 'components/Layout';
import { NotFound } from 'components/Common';
import { PrivateRoute } from 'components/Common/PrivateRoute';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <PrivateRoute path="/admin">
              <MainLayout />
            </PrivateRoute>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;

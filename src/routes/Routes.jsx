import React from 'react';
import { Route, Switch } from 'react-router-dom';
import isNil from 'lodash/isNil';
import PropTypes from 'prop-types';
import HomePage from 'components/views/HomePage';
import LoginPage from 'components/views/Users/LoginPage';
import LogoutPage from 'components/views/Users/LogoutPage';
import ShowUserPage from 'components/views/Users/ShowUserPage';
import SignUpPage from 'components/views/Users/SignUpPage';
import Dashboard from 'components/views/Dashboard';
import NotFoundPage from 'components/views/Errors/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const Routes = (props) => {
  const { currentUser } = props;
  return (
    <Switch>
      <Route exact path="/" component={HomePage} name="HomePage" />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/logout" component={LogoutPage} />
      <Route exact path="/sign-up" component={SignUpPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/users/:userId" component={ShowUserPage} isLoggedIn={!isNil(currentUser)} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

Routes.propTypes = {
  currentUser: PropTypes.object,
};

Routes.defaultProps = {
  currentUser: null,
};

export default Routes;

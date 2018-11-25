import React from 'react';
import { Route, Switch } from 'react-router-dom';
import isNil from 'lodash/isNil';
import HomePage from 'views/HomePage';
import LoginPage from 'views/users/LoginPage';
import LogoutPage from 'views/users/LogoutPage';
import ShowUserPage from 'views/users/ShowUserPage';
import NotFoundPage from 'views/Errors/NotFoundPage';
import PrivateRoute from './PrivateRoute';

class Routes extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} name="HomePage" />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <PrivateRoute exact path="/users/:id" component={ShowUserPage} isLoggedIn={!isNil(currentUser)} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;

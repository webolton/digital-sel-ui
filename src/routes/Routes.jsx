import React from 'react';
import { Route, Switch } from 'react-router-dom';
import isNil from 'lodash/isNil';
import HomePage from 'views/HomePage';
import LoginPage from 'views/Users/LoginPage';
import LogoutPage from 'views/Users/LogoutPage';
import ShowUserPage from 'views/Users/ShowUserPage';
import SignUpPage from 'views/Users/SignUpPage';
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
        <Route exact path="/sign-up" component={SignUpPage} />
        <PrivateRoute exact path="/users/:id" component={ShowUserPage} isLoggedIn={!isNil(currentUser)} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;

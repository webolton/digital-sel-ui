import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'views/HomePage';
import LoginPage from 'views/users/LoginPage';
import LogoutPage from 'views/users/LogoutPage';
import NotFoundPage from 'views/Errors/NotFoundPage';

class Routes extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} name="HomePage" />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;

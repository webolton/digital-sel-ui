import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from 'views/HomePage';
import NotFoundPage from 'views/Errors/NotFoundPage';

class Routes extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} name="HomePage" />
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;

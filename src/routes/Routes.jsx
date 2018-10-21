import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from 'views/HomePage';

class Routes extends React.Component {
  render() {
    const { currentUser } = this.props;
    return (
      <Switch>
        <Route exact path="/" component={HomePage} name="HomePage" />
      </Switch>
    );
  }
}

export default Routes;

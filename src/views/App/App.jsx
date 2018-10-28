/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from 'routes';
import withStyles from '@material-ui/core/styles/withStyles';
import headerStyle from 'assets/javascripts/components/headerStyle';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/HeaderLinks';

export class App extends React.Component {
  render() {
    const dashboardRoutes = [];
    const { classes, currentUser, ...rest } = this.props;
    return (
      <div>
        <Header
          color="lightGray"
          routes={dashboardRoutes}
          brand="The Digital South English Legendary"
          rightLinks={<HeaderLinks />}
          fixed="false"
          changeColorOnScroll="false"
          {...rest}
        />
        <Routes currentUser={currentUser} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(withStyles(headerStyle)(App)));

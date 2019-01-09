/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from 'store/history';
import Routes from 'routes';
import withStyles from '@material-ui/core/styles/withStyles';
import appStyles from 'assets/javascripts/views/appStyles';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import withTransition from 'views/layouts/withTransition';
import { alertActions } from 'actions';

export class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    const unlisten = history.listen((location, action) => {
      dispatch(alertActions.clear());
    });

    if (window.performance) {
      if (performance.navigation.type === 1) {
        dispatch(alertActions.clear());
      }
    }
  }

  render() {
    const dashboardRoutes = [];
    const {
      classes, currentUser, ...rest
    } = this.props;
    return (
      <div>
        <Header
          color="lightGray"
          routes={dashboardRoutes}
          brand="The Digital South English Legendary"
          rightLinks={<HeaderLinks />}
          absolute
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

export default withRouter(connect(mapStateToProps)(withStyles(appStyles)(App)));

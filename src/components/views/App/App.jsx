import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Routes from 'routes';
import withStyles from '@material-ui/core/styles/withStyles';
import appStyles from 'assets/javascripts/views/appStyles';
import Header from 'components/Header';
import HeaderLinks from 'components/Header/HeaderLinks';
import Footer from 'components/Footer';
import withTransition from 'components/views/layouts/withTransition';
import PositionedSnackbar from 'components/Alert/PositionedSnackbar';
import alertActions from 'actions/alertActions';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'theme';

export class App extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;

    if (window.performance) {
      if (performance.navigation.type === 1) {
        dispatch(alertActions.clear());
      }
    }
  }

  render() {
    const {
      classes, currentUser, alert,
    } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.mainRaised}>
          <Header
            brand="The Digital South English Legendary"
            rightLinks={<HeaderLinks />}
            absolute
            changeColorOnScroll={false}
          />
          { !(Object.keys(alert.alert).length === 0 && alert.alert.constructor === Object)
            && <PositionedSnackbar alert={alert.alert} /> }
          <Routes currentUser={currentUser} />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { authentication, alert } = state;
  const { currentUser } = authentication;
  return {
    currentUser, alert,
  };
}

App.propTypes = {
  alert: PropTypes.object,
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

App.defaultProps = {
  alert: {},
  currentUser: null,
};

export default withTransition(withRouter(connect(mapStateToProps)(withStyles(appStyles)(App))));

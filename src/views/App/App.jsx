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
import Transition from 'react-transition-group/Transition';
import { alertActions } from 'actions';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inProp: false,
    };
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

  componentDidMount() {
    this.setState({ inProp: true });
  }

  render() {
    const dashboardRoutes = [];
    const { inProp } = this.state;
    const {
      classes, currentUser, ...rest
    } = this.props;
    return (
      <Transition
        in={inProp}
        timeout={300}
        unmountOnExit
      >
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          >
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
        )}
      </Transition>
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

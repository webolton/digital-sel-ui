import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import userActions from 'actions/userActions';

class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(userActions.logout());
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  const { loggingOut } = state.authentication;
  return {
    loggingOut,
  };
}

LogoutPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LogoutPage);

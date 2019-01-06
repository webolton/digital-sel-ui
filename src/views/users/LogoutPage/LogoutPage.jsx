import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(LogoutPage);

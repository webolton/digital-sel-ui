import React from 'react';
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import homePageStyle from 'assets/javascripts/views/homePageStyle';

const HomePage = () => (
  <div style={{ height: '3000px' }} />
);

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(withStyles(homePageStyle)(HomePage));

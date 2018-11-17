import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

import homePageStyle from 'assets/javascripts/views/homePageStyle';


const dashboardRoutes = [];

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div style={{height: "3000px"}}>
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

export default connect(mapStateToProps)(withStyles(homePageStyle)(HomePage));

import React from 'react';
import { connect } from 'react-redux';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import homePageStyle from "assets/javascripts/views/homePage";

class HomePage extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <h1>Welcome to the Digital South English Legendary</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser
  };
}

export default connect(mapStateToProps)(withStyles(homePageStyle)(HomePage));

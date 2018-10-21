import React from 'react';
import { connect } from 'react-redux';
import classNames from "classnames";
import withStyles from "@material-ui/core/styles/withStyles";

import homePageStyle from "assets/javascripts/views/homePage";

import { Header } from "components/Header";
import HeaderLinks from "components/Header/HeaderLinks";

const dashboardRoutes = [];

class HomePage extends React.Component {

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
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

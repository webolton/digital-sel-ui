/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import headerStyle from 'assets/javascripts/components/headerStyle';
import moeImage from 'assets/images/moe-icon.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }

  handleDrawerToggle() {
    this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
  }

  render() {
    const {
      classes,
      color,
      rightLinks,
      leftLinks,
      brand,
      fixed,
      absolute,
    } = this.props;
    const appBarClasses = classNames({
      [classes.appBar]: true,
      [classes[color]]: color,
      [classes.absolute]: absolute,
      [classes.fixed]: fixed,
    });
    const moeIcon = <img src={moeImage} className={classes.brandIcon} alt="Mary of Egypt icon" />;
    const brandComponent = (
      <Button className={classes.title} component={Link} to="/">
        {moeIcon}
        {brand}
      </Button>
    );
    return (
      <AppBar className={appBarClasses}>
        <Toolbar className={classes.container}>
          {leftLinks !== undefined ? brandComponent : null}
          <div className={classes.flex}>
            {leftLinks !== undefined ? (
              <Hidden smDown implementation="css">
                {leftLinks}
              </Hidden>
            ) : (
              brandComponent
            )}
          </div>
          <Hidden smDown implementation="css">
            {rightLinks}
          </Hidden>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor="right"
            open={this.state.mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
            onClose={this.handleDrawerToggle}
          >
            <div className={classes.appResponsive}>
              {leftLinks}
              {rightLinks}
            </div>
          </Drawer>
        </Hidden>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'lightGray',
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  absolute: PropTypes.bool,
  fixed: PropTypes.bool,
};

Header.defaultProps = {
  color: 'primary',
  rightLinks: undefined,
  leftLinks: undefined,
  brand: undefined,
  absolute: true,
  fixed: false,
};

export default withStyles(headerStyle)(Header);

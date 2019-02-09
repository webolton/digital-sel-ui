import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, withStyles } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';

import footerStyle from 'assets/javascripts/components/footerStyle';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get involved
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://william-bolton.com"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                About the Maintainer
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://blog.digitalsel.org"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
                target="_blank"
                rel="noopener noreferrer"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy;
          {' '}
          {1900 + new Date().getYear()}
          {' '}
, William E. Bolton. Made with
          {' '}
          <Favorite className={classes.icon} />
          {' '}
          {' '}
in South Philadelphia.
          {' '}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(footerStyle)(Footer);

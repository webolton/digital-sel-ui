import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import Button from 'components/CustomButtons/Button';
import headerLinksStyle from 'assets/javascripts/components/headerLinksStyle';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  const LogInButton = (() => (
    <ListItem className={classes.listItem}>
      <Tooltip
        id="login-button"
        title="Login to save textual notes"
        placement={window.innerWidth > 959 ? 'top' : 'left'}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button
          href="google.com"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
          Login
        </Button>
      </Tooltip>
    </ListItem>
  ));
  return (
    <List className={classes.list}>
      { true ? <LogInButton /> : null }
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="William Bolton"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              User Profile
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Logout
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(headerLinksStyle)(HeaderLinks);

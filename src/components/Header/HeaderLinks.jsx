import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import isNil from 'lodash/isNil';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CustomDropdown from 'components/CustomDropdown/CustomDropdown';
import Button from 'components/CustomButtons/Button';
import headerLinksStyle from 'assets/javascripts/components/headerLinksStyle';

function HeaderLinks({ ...props }) {
  const { classes, currentUser } = props;
  const LogInButton = (() => (
    <ListItem className={classes.listItem}>
      <Button
        component={Link}
        to="/login"
        color="transparent"
        className={classes.navLink}
      >
        Login
      </Button>
    </ListItem>
  ));
  return (
    <List className={classes.list}>
      { isNil(currentUser) ? <LogInButton /> : null }
      <ListItem className={classes.listItem}>
        { !isNil(currentUser)
          && (
          <CustomDropdown
            noLiPadding
            buttonText={`${currentUser.first_name} ${currentUser.last_name}`}
            buttonProps={{
              className: classes.navLink,
              color: 'transparent',
            }}
            dropdownList={[
              <Link to="/" className={classes.dropdownLink}>
                User Profile
              </Link>,
              <Link to="/logout" className={classes.dropdownLink}>
                Logout
              </Link>,
            ]}
          />
          )
        }
      </ListItem>
    </List>
  );
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(withStyles(headerLinksStyle)(HeaderLinks));

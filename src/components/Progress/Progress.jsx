import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { primaryColor } from 'assets/javascripts/digital-sel-ui';

const styles = {
  root: {
    flexGrow: 1,
  },
  primary: primaryColor,
};

function Progress(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress color="primary" />
    </div>
  );
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);

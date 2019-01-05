import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { darkCerulean } from 'assets/javascripts/digital-sel-ui';

const styles = {
  root: {
    marginTop: '80px',
    textAlign: 'center',
  },
  linearColorPrimary: {
    backgroundColor: '#FFFFFF',
  },
  linearBarColorPrimary: {
    backgroundColor: darkCerulean,
  },
};

function Progress(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <LinearProgress
        classes={{
          colorPrimary: classes.linearColorPrimary,
          barColorPrimary: classes.linearBarColorPrimary,
        }}
      />
      <h2>Loading</h2>
    </div>
  );
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);

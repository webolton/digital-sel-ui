import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { darkCerulean, container } from 'assets/javascripts/digital-sel-ui';

const styles = {
  container: {
    ...container,
    zIndex: '2',
    position: 'relative',
    paddingTop: '20vh',
    color: '#FFFFFF',
  },
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
  const { classes, message } = props;
  return (
    <div
      className={classes.pageHeader}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
      }}
    >
      <div className={classes.container}>
        <div className={classes.root}>
          <LinearProgress
            classes={{
              colorPrimary: classes.linearColorPrimary,
              barColorPrimary: classes.linearBarColorPrimary,
            }}
          />
          <h2>{message}</h2>
        </div>
      </div>
    </div>
  );
}

Progress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Progress);

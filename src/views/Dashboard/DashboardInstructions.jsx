import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { container } from 'assets/javascripts/digital-sel-ui';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    marginTop: 100,
    paddingBottom: 12,
    zIndex: 2,
  },
  container,
  ctaWrapper: {
    margin: 15,
  },
};

function DashboardInstructions(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12} className={classes.ctaWrapper}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
            This will be the dashboard instructions.
            </Typography>
            <Typography component="p">
            This will be the dashboard instructions.
            </Typography>
          </Paper>
        </GridItem>
      </GridContainer>
    </div>
  );
}

DashboardInstructions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardInstructions);

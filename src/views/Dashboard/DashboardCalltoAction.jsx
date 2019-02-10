import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    marginTop: 100,
    paddingBottom: 12,
  },
};

function DashboardCalltoAction(props) {
  const { classes } = props;

  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={5}>
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
  );
}

DashboardCalltoAction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardCalltoAction);

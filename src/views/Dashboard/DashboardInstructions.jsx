import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { container } from 'assets/javascripts/digital-sel-ui';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Paper from '@material-ui/core/Paper';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const styles = {
  root: {
    marginTop: 100,
    paddingBottom: 12,
    zIndex: 2,
  },
  container,
  instructionWrapper: {
    margin: 15,
  },
};

function DashboardInstructions(props) {
  const { classes, showInstructions } = props;

  return (
    <div className={classes.container}>
      <Fade in={!showInstructions}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} lg={12} className={classes.instructionWrapper}>
            <Card>
              <CardHeader color="primary" className={classes.cardHeader}>
                <Typography
                  variant="h5"
                  color="inherit"
                  align="center"
                  >
                  SEL Text Interaction Dashboard
                </Typography>
              </CardHeader>
              <CardBody>
                <Typography variant="h5">
                  Dashboard instructions
                </Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
              </CardBody>
              <CardFooter/>
            </Card>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}

DashboardInstructions.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardInstructions);

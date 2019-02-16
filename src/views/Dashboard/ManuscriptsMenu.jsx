import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { container } from 'assets/javascripts/digital-sel-ui';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
  root: {
    marginTop: 100,
    paddingBottom: 12,
    zIndex: 2,
  },
  container,
  ctaWrapper: {
    margin: 15,
  },
});

class ManuscriptsMenu extends React.Component {
  state = {
    open: false,
  };

  handleClick = (event) => {
    const { currentTarget } = event;
    this.setState(state => ({
      anchorEl: currentTarget,
      open: !state.open,
    }));
  };

  render() {
    const { classes, popperOpen } = this.props;
    const { open } = this.state;
    const id = open ? 'simple-popper' : null;
    const anchorEl = document.getElementById('msAnchor');
    return (
      <div>
        <div aria-describedby={id} id="msAnchor" />
        <Popper id={id} open={popperOpen} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.ctaWrapper}>
                  <Paper className={classes.root} elevation={1}>
                    <Typography variant="h5" component="h3">
                      This will hold the manuscript selection menu
                    </Typography>
                  </Paper>
                </GridItem>
              </GridContainer>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

ManuscriptsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManuscriptsMenu);

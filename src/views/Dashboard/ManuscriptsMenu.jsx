import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { container } from 'assets/javascripts/digital-sel-ui';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
  container,
  msMenuWrapper: {
    margin: 15,
  },
  popper: {
    marginTop: 35,
    maxWidth: 1080,
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
    const { classes, menuOpen } = this.props;
    const { open } = this.state;
    const id = open ? 'simple-popper' : null;
    const anchorEl = document.getElementById('msAnchor');
    return (
      <div className={classes.container}>
        <div aria-describedby={id} id="msAnchor" />
        <Popper
          id={id}
          open={menuOpen}
          anchorEl={anchorEl}
          transition
          disablePortal
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12} className={classes.msMenuWrapper}>
                  <Card>
                    <CardHeader color="green" className={classes.cardHeader}>
                      <Typography
                        variant="h5"
                        color="inherit"
                        align="center"
                      >
                        Manuscripts Menu
                      </Typography>
                    </CardHeader>
                    <CardBody>
                      <Typography variant="h5">
                        Manuscripts Menu
                      </Typography>
                      <Typography variant="body1">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat no
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                    </CardBody>
                    <CardFooter />
                  </Card>
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

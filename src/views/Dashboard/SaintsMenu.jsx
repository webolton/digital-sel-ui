import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
});

class SaintsMenu extends React.Component {
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
    const anchorEl = document.getElementById('popperAnchor2');
    return (
      <div>
        <Button aria-describedby={id} variant="contained" onClick={this.handleClick} id="popperAnchor2">
          Toggle Popper
        </Button>
        <Popper id={id} open={menuOpen} anchorEl={anchorEl} transition>
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                <Typography className={classes.typography}>The content of the Popper.</Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    );
  }
}

SaintsMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SaintsMenu);

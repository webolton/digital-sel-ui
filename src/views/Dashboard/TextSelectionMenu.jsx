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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
  typography: {
    padding: theme.spacing.unit * 2,
  },
  container,
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  column: {
    flexBasis: '33.33%',
  },
  popper: {
    maxWidth: 1080,
  },
});

class TextSelectionMenu extends React.Component {
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
    const anchorEl = document.getElementById('stAnchor');
    return (
      <div>
        <div aria-describedby={id} id="stAnchor" />
        <Popper
          id={id}
          open={menuOpen}
          anchorEl={anchorEl}
          transition
          className={classes.popper}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Card>
                    <CardHeader color="green" className={classes.cardHeader}>
                      <Typography
                        variant="h5"
                        color="inherit"
                        align="center"
                      >
                        Text Selector
                      </Typography>
                    </CardHeader>
                    <CardBody>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <div className={classes.column}>
                            <Typography className={classes.heading}>Manuscripts</Typography>
                          </div>
                          <div className={classes.column}>
                            <Typography
                              className={classes.secondaryHeading}
                            >
                              Narrow your selection by manuscript
                            </Typography>
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                             malesuada lacus ex, sit amet blandit leo lobortis eget.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
                      <ExpansionPanel>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                          <div className={classes.column}>
                            <Typography
                              className={classes.heading}
                            >
                              Saints&rsquo; Legends
                            </Typography>
                          </div>
                          <div className={classes.column}>
                            <Typography
                              className={classes.secondaryHeading}
                            >
                              Narrow your selection by saints&rsquo; legends
                            </Typography>
                          </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                          <Typography>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                             malesuada lacus ex, sit amet blandit leo lobortis eget.
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                             malesuada lacus ex, sit amet blandit leo lobortis eget.
                          </Typography>
                        </ExpansionPanelDetails>
                      </ExpansionPanel>
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

TextSelectionMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextSelectionMenu);

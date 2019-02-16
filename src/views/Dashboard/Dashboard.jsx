import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import manuscriptActions from 'actions/manuscriptActions';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ArrowForward from '@material-ui/icons/ArrowForward';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import SaintsLegendIcon from 'components/customIcons/SaintsLegendIcon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import dashboardStyles from 'assets/javascripts/views/dashboard/dashboardStyles';
import DashboardInstructions from './DashboardInstructions';
import ManuscriptsMenu from './ManuscriptsMenu';
import SaintsMenu from './SaintsMenu';

class Dashboard extends React.Component {
  state = {
    mobileOpen: false,
    msSelected: false,
    stSelected: false,
  };

  componentDidMount() {
    const { fetchManuscripts } = this.props;
    fetchManuscripts();
  }

  toggleSelected = (selectedButton) => {
    this.setState(state => ({ [selectedButton]: !state[selectedButton] }));
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const {
      classes,
    } = this.props;

    const fetchingMSS = this.props.manuscripts.fetching;
    const fetchedMSS = this.props.manuscripts.fetched;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <List>
          <ListItem
            button
            key="manuscriptsButton"
            disabled={fetchingMSS}
            onClick={() => this.toggleSelected('msSelected')}
            selected={this.state.msSelected}
          >
            <ListItemIcon>
              <LibraryBooks />
            </ListItemIcon>
            <ListItemText primary="Manuscripts" />
          </ListItem>
          {fetchingMSS && (
          <CircularProgress
            size={24}
            className={classNames(classes.manuscriptProgress, classes.buttonProgress)}
          />
          )}
          <ListItem
            button
            key="saintsLegendsButton"
            onClick={() => this.toggleSelected('stSelected')}
            selected={this.state.stSelected}
          >
            <ListItemIcon>
              <SaintsLegendIcon />
            </ListItemIcon>
            <ListItemText primary="Saints' Legends" />
          </ListItem>
          {/* TODO: Check for fetching saints legends */}
          {fetchingMSS
            && (
            <CircularProgress
              size={24}
              className={classNames(classes.saintsLegendsProgress, classes.buttonProgress)}
            />
            )}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <ArrowForward />
              </IconButton>
              <Typography variant="h7" color="inherit" noWrap>
                Show Dashboard Menu
              </Typography>
            </Toolbar>
          </AppBar>
        </Hidden>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor="left"
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.mainPanel}>
          <div className={classes.content}>
            <div className={classes.container}>
              <ManuscriptsMenu popperOpen={this.state.msSelected} />
              <SaintsMenu popperOpen={this.state.stSelected} />
              <DashboardInstructions />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  fetchManuscripts: PropTypes.func.isRequired,
  manuscripts: PropTypes.shape({
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    manuscripts: PropTypes.array,
  }).isRequired,
  classes: PropTypes.object.isRequired,
  container: PropTypes.object.isRequired,
};


export default compose(
  connect(
    state => ({
      manuscripts: state.manuscripts,
    }),
    {
      fetchManuscripts: manuscriptActions.fetchManuscripts,
    },
  ),
  withStyles(dashboardStyles),
)(Dashboard);

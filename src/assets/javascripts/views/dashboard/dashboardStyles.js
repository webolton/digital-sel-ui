import {
  primaryColor,
  transition,
  container,
} from 'assets/javascripts/digital-sel-ui';

const drawerWidth = 240;

const dashBoardStyles = theme => ({
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    minHeight: 2500,
    marginTop: 70,
    width: '100%',
    overflowScrolling: 'touch',
  },
  content: {
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)',
    flexGrow: 1,
  },
  container,
  map: {
    marginTop: '70px',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 300,
    },
    zIndex: 2,
  },
  appBar: {
    marginLeft: drawerWidth,
    top: 135,
    backgroundColor: primaryColor,
  },
  menuButton: {
    marginRight: 10,
  },
  toolbar: {
    marginTop: 80,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  buttonProgress: {
    color: primaryColor,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -5,
  },
  manuscriptProgress: {
    marginTop: -35,
  },
  saintsLegendsProgress: {
    marginTop: 10,
  },
});

export default dashBoardStyles;

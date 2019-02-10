import { primaryColor } from 'assets/javascripts/digital-sel-ui';

const drawerWidth = 240;

const dashBoardStyles = {
  root: {
    display: 'flex',
  },
  drawer: {
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
  content: {
    flexGrow: 1,
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
};

export default dashBoardStyles;

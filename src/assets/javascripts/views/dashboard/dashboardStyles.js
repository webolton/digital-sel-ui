import {
  container,
} from 'assets/javascripts/digital-sel-ui';

const dashBoardStyles = theme => ({
  container,
  dashboardContainer: {
    minHeight: 800,
  },
  manuscriptProgress: {
    marginTop: -35,
  },
  saintsLegendsProgress: {
    marginTop: 10,
  },
  cardHeader: {
    width: 'auto',
    textAlign: 'center',
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '-40px',
    marginBottom: '15px',
  },
  typography: {
    padding: theme.spacing.unit * 2,
  },
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
  progress: {
    width: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
});

export default dashBoardStyles;

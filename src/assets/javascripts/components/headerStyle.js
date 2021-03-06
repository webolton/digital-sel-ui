import {
  container,
  defaultFont,
  lightGrayColor,
  transition,
  boxShadow,
  drawerWidth,
} from 'assets/javascripts/digital-sel-ui';

const headerStyle = {
  appBar: {
    display: 'flex',
    border: '0',
    borderRadius: '3px',
    padding: '0px',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow:
      '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    position: 'fixed',
    zIndex: '1100',
  },
  container: {
    ...container,
    minHeight: '50px',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
  },
  flex: {
    flex: 1,
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '24px',
    fontWeight: '500',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  brandIcon: {
    paddingRight: '15px',
  },
  appResponsive: {
    margin: '20px 10px',
  },
  lightGray: {
    border: '0',
    padding: '0',
    marginBottom: '20px',
    color: '#555555',
    backgroundColor: lightGrayColor,
    boxShadow:
      '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
  },
  dark: {
    color: '#FFFFFF',
    backgroundColor: '#212121 !important',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: drawerWidth,
    ...boxShadow,
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    ...transition,
  },
};

export default headerStyle;

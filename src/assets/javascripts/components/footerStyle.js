import { container, primaryColor, middleGray } from 'assets/javascripts/digital-sel-ui';

const footerStyle = {
  block: {
    color: middleGray,
    padding: '0.9375rem',
    fontWeight: '500',
    fontSize: '12px',
    borderRadius: '3px',
    textDecoration: 'none',
    position: 'relative',
    display: 'block',
    '&:hover': {
      color: primaryColor,
    },
    '&:visited': {
      color: primaryColor,
    },
  },
  left: {
    float: 'left!important',
    display: 'block',
  },
  right: {
    padding: '15px 0',
    margin: '0',
    float: 'right!important',
  },
  footer: {
    color: middleGray,
    padding: '0.9375rem 0',
    textAlign: 'center',
    display: 'flex',
    zIndex: '1',
    position: 'relative',
  },
  container,
  list: {
    marginBottom: '0',
    padding: '0',
    marginTop: '0',
  },
  inlineBlock: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
  icon: {
    width: '18px',
    height: '18px',
    position: 'relative',
    top: '3px',
  },
};
export default footerStyle;

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';
import alertActions from 'actions/alertActions';
import { withStyles } from '@material-ui/core/styles';
import {
  successColor,
  dangerColor,
  warningColor,
  infoColor,
} from 'assets/javascripts/digital-sel-ui';

const iconVariants = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const contentStyle = {
  success: {
    backgroundColor: successColor,
  },
  warning: {
    backgroundColor: warningColor,
  },
  error: {
    backgroundColor: dangerColor,
  },
  info: {
    backgroundColor: infoColor,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: '10px',
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
};

const SnackBarContentWrapper = (props) => {
  const {
    classes, className, message, onClose, variant, ...other
  } = props;

  const Icon = iconVariants[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inerit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
};

SnackBarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
};

SnackBarContentWrapper.defaultProps = {
  className: '',
  message: null,
  onClose: null,
};

const SnackbarWrapper = withStyles(contentStyle)(SnackBarContentWrapper);

class PositionedSnackbar extends React.Component {
  state = {
    open: true,
  };

  handleClose = (event, reason) => {
    const { dispatch } = this.props;

    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
    dispatch(alertActions.clear());
  };

  render() {
    const {
      alert: { // eslint-disable-line react/prop-types
        message,
        anchorOrigin,
        variant,
      },
    } = this.props;

    const { handleClose } = this;
    const { open } = this.state;
    return (
      <div>
        <Snackbar
          anchorOrigin={anchorOrigin}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <SnackbarWrapper
            onClose={handleClose}
            variant={variant}
            message={message}
          />
        </Snackbar>
      </div>
    );
  }
}

PositionedSnackbar.propsTypes = {
  alert: PropTypes.shape({
    alertVariant: PropTypes.string,
    message: PropTypes.string,
    anchorOrigin: PropTypes.object,
  }).isRequired,
};

PositionedSnackbar.defaultProps = {
  alertVariants: 'info',
  message: '',
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
};

export default connect()(PositionedSnackbar);

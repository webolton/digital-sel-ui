import alertConstants from 'constants/alertConstants';

function success(alertProps) {
  return { type: alertConstants.ALERT_SUCCESS, payload: alertProps };
}

function error(alertProps) {
  return { type: alertConstants.ALERT_ERROR, payload: alertProps };
}

function clear() {
  return { type: alertConstants.ALERT_CLEAR };
}

const alertActions = {
  success,
  error,
  clear,
};

export default alertActions;

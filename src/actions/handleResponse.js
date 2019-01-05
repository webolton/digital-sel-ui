import { store } from 'store/store';
import userConstants from 'constants/userConstants';

const unauthorizedResponse = (response) => {
  if (response.status === 401) {
    return true
  }
}

const successfulResponse = (response) => {
  if (response.status === 200 || response.status === 201) {
    return true
  }
}

const handleResponse = (successCallback, failureCallback, response, dispatch) => {
  if (response) {
    response.json().then((responseJson) => {
      if (unauthorizedResponse(response)) {
        store.dispatch({ type: userConstants.LOGOUT_USER })
        dispatch(failureCallback(responseJson))
      } else if (successfulResponse(response)) {
        dispatch(successCallback(responseJson))
      } else {
        dispatch(failureCallback(responseJson))
      }
    }).catch((error) => {
      throw error;
    })
  }
}

export default handleResponse;

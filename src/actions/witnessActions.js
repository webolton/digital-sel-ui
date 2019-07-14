import witnessConstants from 'constants/witnessConstants';
import witnessService from 'services/witnessService';
import handleResponse from './handleResponse';

function fetchWitnesses() {
  function request() { return { type: witnessConstants.FETCHING_WITNESSES }; }
  function success(response) {
    return { type: witnessConstants.FETCH_WITNESSES_SUCCESS, payload: response };
  }
  function failure(response) {
    return { type: witnessConstants.FETCH_WITNESSES_FAILURE, payload: response };
  }

  return (dispatch) => {
    dispatch(request());
    return witnessService.getWitnesses().then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

const witnessActions = {
  fetchWitnesses,
};

export default witnessActions;

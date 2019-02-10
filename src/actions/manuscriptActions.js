import history from 'store/history';
import manuscriptConstants from 'constants/manuscriptConstants';
import manuscriptService from 'services/manuscriptService';
import handleResponse from './handleResponse';
import alertActions from './alertActions';

function fetchManuscripts() {
  function request() { return { type: manuscriptConstants.FETCHING_MANUSCRIPTS }; }
  function success(users) { return { type: manuscriptConstants.FETCH_MANUSCRIPTS_SUCCESS, payload: response }; }
  function failure(error) { return { type: manuscriptConstants.FETCH_MANUSCRIPTS_FAILURE, payload: response }; }

  return (dispatch) => {
    dispatch(request());
    return manuscriptService.getManuscripts().then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

function fetchManuscript(id) {
  function request() { return { type: manuscriptConstants.FETCHING_MANUSCRIPT }; }
  function success(response) { return { type: manuscriptConstants.FETCH_MANUSCRIPT_SUCCESS, payload: response }; }
  function failure(response) { return { type: manuscriptConstants.FETCH_MANUSCRIPT_FAILURE, payload: response }; }

  return (dispatch) => {
    dispatch(request());
    return manuscriptService.getManuscript(id).then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

const manuscriptActions = {
  fetchManuscripts,
  fetchManuscript,
};

export default manuscriptActions;

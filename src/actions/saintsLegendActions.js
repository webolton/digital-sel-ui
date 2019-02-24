import saintsLegendConstants from 'constants/saintsLegendConstants';
import saintsLegendService from 'services/saintsLegendService';
import handleResponse from './handleResponse';

function fetchSaintsLegends() {
  function request() { return { type: saintsLegendConstants.FETCHING_SAINTS_LEGENDS }; }
  function success(response) {
    return { type: saintsLegendConstants.FETCH_SAINTS_LEGENDS_SUCCESS, payload: response };
  }
  function failure(response) {
    return { type: saintsLegendConstants.FETCH_SAINTS_LEGENDS_FAILURE, payload: response };
  }

  return (dispatch) => {
    dispatch(request());
    return saintsLegendService.getSaintsLegends().then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

function fetchSaintsLegend(id) {
  function request() { return { type: saintsLegendConstants.FETCHING_SAINTS_LEGEND }; }
  function success(response) {
    return { type: saintsLegendConstants.FETCH_SAINTS_LEGEND_SUCCESS, payload: response };
  }
  function failure(response) {
    return { type: saintsLegendConstants.FETCH_SAINTS_LEGEND_FAILURE, payload: response };
  }

  return (dispatch) => {
    dispatch(request());
    return saintsLegendService.getSaintsLegend(id).then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

const saintsLegendActions = {
  fetchSaintsLegends,
  fetchSaintsLegend,
};

export default saintsLegendActions;

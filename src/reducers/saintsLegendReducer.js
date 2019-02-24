export default function reducer(state = {
  saintsLegends: [],
  saintsLegend: {},
}, action) {
  switch (action.type) {
    case 'FETCHING_SAINTS_LEGENDS': {
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    }
    case 'FETCH_SAINTS_LEGENDS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        saintsLegends: action.payload,
      };
    }
    case 'FETCH_SAINTS_LEGENDS_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        saintsLegends: [],
        errors: action.payload,
      };
    }
    case 'FETCHING_SAINTS_LEGEND': {
      return {
        ...state,
        fetching: true,
        fetched: false,
        updated: false,
      };
    }
    case 'FETCH_SAINTS_LEGEND_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        saintsLegend: action.payload,
      };
    }
    case 'FETCH_SAINTS_LEGEND_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        saintsLegend: null,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
}

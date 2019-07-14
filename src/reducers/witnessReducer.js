export default function reducer(state = {
  witnesses: [],
}, action) {
  switch (action.type) {
    case 'FETCHING_WITNESSES': {
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    }
    case 'FETCH_WITNESSES_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        witnesses: action.payload,
      };
    }
    case 'FETCH_WITNESSES_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        witnesses: [],
        errors: action.payload,
      };
    }
    default:
      return state;
  }
}

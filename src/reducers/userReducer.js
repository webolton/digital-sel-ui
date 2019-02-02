export default function reducer(state = {
  user: {},
}, action) {
  switch (action.type) {
    case 'FETCHING_USER': {
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    }
    case 'GET_USER_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    }
    case 'GET_USER_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        user: null,
        error: action.payload,
      };
    }
    case 'FETCHING_UPDATE_USER': {
      return {
        ...state,
        fetching: true,
        fetched: false,
        updated: false,
      };
    }
    case 'UPDATE_USER_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    }
    case 'UPDATE_USER_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        user: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

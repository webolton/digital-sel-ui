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
        updated: true,
        userId: action.payload.user.id,
        firstName: action.payload.user.first_name,
        lastName: action.payload.user.last_name,
        email: action.payload.user.email,
      };
    }
    case 'UPDATE_USER_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        updated: false,
        user: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}

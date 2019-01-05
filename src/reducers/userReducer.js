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
        firstName: action.payload.user.first_name,
        lastName: action.payload.user.last_name,
        email: action.payload.user.email,
      };
    }
    case 'GET_USER_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        team: null,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

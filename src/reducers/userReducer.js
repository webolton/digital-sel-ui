import userConstants from 'constants/userConstants';

const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GET_USER_FETCHING:
      return {
        loading: true,
        loaded: false,
      };
    case userConstants.GET_USER_SUCCESS:
      return {
        loading: false,
        user: action.user,
      };
    case userConstants.GET_USER_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default user;

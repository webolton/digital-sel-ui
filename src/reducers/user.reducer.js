import userConstants from 'constants/userConstants';

const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETBYUSERID_REQUEST:
      return {
        loading: true,
        loaded: false,
      };
    case userConstants.GETBYUSERID_SUCCESS:
      return {
        loading: false,
        user: action.user,
      };
    case userConstants.GETBYUSERID_FAILURE:
      return {
        error: action.error,
      };
    default:
      return state;
  }
};

export default user;

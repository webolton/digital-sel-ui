import userConstants from '../constants';

const user = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETBYUSERID_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETBYUSERID_SUCCESS:
      return {
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

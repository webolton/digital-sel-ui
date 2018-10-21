import { userConstants } from '../constants';

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const initialState = currentUser ? { loggedIn: true, currentUser } : {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        currentUser: action.currentUser,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        currentUser: action.currentUser,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        loggingOut: true,
      };
    default:
      return state;
  }
};

export default authentication;

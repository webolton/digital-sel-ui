import history from 'store/history';
import userConstants from 'constants/userConstants';
import userService from 'services/userService';
import { alertActions } from '.';

function login(email, password) {
  function request(currentUser) { return { type: userConstants.USER_LOGIN_REQUEST }; }
  function success(currentUser) { return { type: userConstants.USER_LOGIN_SUCCESS, currentUser }; }
  function failure(error) { return { type: userConstants.USER_LOGIN_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        (currentUser) => {
          dispatch(success(currentUser));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };
}

function logout() {
  userService.logout()
    .then(
      history.push('/'),
    );
  return { type: userConstants.LOGOUT };
}

function getAllUsers() {
  function request() { return { type: userConstants.GETALL_REQUEST }; }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users }; }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request());
    userService.getAllUsers()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error)),
      );
  };
}

function getUserById(id) {
  function request() { return { type: userConstants.GET_USER_FETCHING }; }
  function success(user) { return { type: userConstants.GET_USER_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.GET_USER_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request({ id }));

    userService.getUserById(id)
      .then(
        (userData) => {
          const { user } = userData;
          dispatch(success(user));
        },
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };
}

function updateUser(userData) {
  function request(user) { return { type: userConstants.UPDATE_REQUEST, user }; }
  function success(user) { return { type: userConstants.UPDATE_SUCCESS, user }; }
  function failure(error) { return { type: userConstants.UPDATE_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request(userData));

    userService.updateUser(userData)
      .then(
        (user) => {
          dispatch(success(user));
          history.push('/');
        },
        (error) => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        },
      );
  };
}

const userActions = {
  login,
  logout,
  getAllUsers,
  getUserById,
  updateUser,
};

export default userActions;

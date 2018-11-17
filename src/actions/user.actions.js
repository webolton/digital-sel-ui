import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from 'store/store';

export const userActions = {
    login,
    logout,
    getAllUsers,
    getUserById,
    updateUser
};

function login(email, password) {
  return dispatch => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        currentUser => {
          dispatch(success(currentUser));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(currentUser) { return { type: userConstants.LOGIN_REQUEST, currentUser } }
  function success(currentUser) { return { type: userConstants.LOGIN_SUCCESS, currentUser } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout()
    .then(
      history.push('/')
    );
  return { type: userConstants.LOGOUT };
}


function getAllUsers() {
  return dispatch => {
    dispatch(request());
    userService.getAllUsers()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error))
      );
  };

  function request() { return { type: userConstants.GETALL_REQUEST } }
  function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function getUserById(id) {
  return dispatch => {
    dispatch(request({ id }));

    userService.getUserById(id)
      .then(
        (userData) => {
          const user = userData.user;
          dispatch(success(user));
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: userConstants.GETBYUSERID_REQUEST, user } }
  function success(user) { return { type: userConstants.GETBYUSERID_SUCCESS, user } }
  function failure(error) { return { type: userConstants.GETBYUSERID_FAILURE, error } }
}

function updateUser(user) {
  return dispatch => {
    dispatch(request(user));

    userService.updateUser(user)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          dispatch(alertActions.error(error));
        }
      );
  }

  function request(user)  { return { type: userConstants.UPDATE_REQUEST, user } }
  function success(user)  { return { type: userConstants.UPDATE_SUCCESS, user } }
  function failure(error) { return { type: userConstants.UPDATE_FAILURE, error } }
}

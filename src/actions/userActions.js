import history from 'store/history';
import userConstants from 'constants/userConstants';
import userService from 'services/userService';
import handleResponse from './handleResponse';
import alertActions from './alertActions';

function login(email, password) {
  function request() { return { type: userConstants.USER_LOGIN_REQUEST }; }
  function success(currentUser) { return { type: userConstants.USER_LOGIN_SUCCESS, currentUser }; }
  function failure(error) { return { type: userConstants.USER_LOGIN_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password)
      .then(
        (currentUser) => {
          dispatch(success(currentUser));
          const successProps = {
            message: 'Login success',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            variant: 'success',
          };
          history.push('/');
          dispatch(alertActions.success(successProps));
        },
        (error) => {
          dispatch(failure(error));
          const failureProps = {
            message: 'Login failure',
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            variant: 'error',
          };
          dispatch(alertActions.error(failureProps));
        },
      );
  };
}

function logout() {
  userService.logout()
    .then(
      history.push('/'),
    );
  return { type: userConstants.LOGOUT_USER };
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

function fetchUser(id) {
  function request() { return { type: userConstants.FETCHING_USER }; }
  function success(response) { return { type: userConstants.GET_USER_SUCCESS, payload: response }; }
  function failure(response) { return { type: userConstants.GETALL_FAILURE, payload: response }; }

  return (dispatch) => {
    dispatch(request());
    return userService.getUserById(id).then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

function updateUser(userId, userData) {
  function request(user) { return { type: userConstants.FETCHING_UPDATE_USER, payload: user }; }
  function success(user) { return { type: userConstants.UPDATE_USER_SUCCESS, payload: user }; }
  function failure(error) { return { type: userConstants.UPDATE_USER_FAILURE, payload: error }; }

  return (dispatch) => {
    dispatch(request(userData));

    return userService.updateUser(userId, userData).then((response) => {
      handleResponse(success, failure, response, dispatch);
    }).catch((error) => { throw (error); });
  };
}

const userActions = {
  login,
  logout,
  getAllUsers,
  fetchUser,
  updateUser,
};

export default userActions;

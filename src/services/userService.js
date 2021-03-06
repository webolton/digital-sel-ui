import authHeader from 'utilities/authHeader';
import handleResponse from './handleResponse';

const API_URL = process.env.REACT_APP_API_URL;

function login(email, password) {
  const userParams = { user: { email, password } };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userParams),
  };

  return fetch(`${API_URL}/users/sign_in`, requestOptions)
    .then(handleResponse)
    .then(
      (currentUser) => {
        // login successful if there's a jwt token in the response
        if (currentUser.token) {
          // store user details and jwt token in local storage to keep user logged in between
          // page refreshes
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        return currentUser;
      },
    );
}

function logout() {
  localStorage.removeItem('currentUser');
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader(),
  };
  return fetch(`${API_URL}/users/sign_out`, requestOptions).then(handleResponse);
}

function getAllUsers() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${API_URL}/users`, requestOptions).then(handleResponse);
}

function getUserById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  };

  return fetch(`${API_URL}/users/${id}`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
}

const updateUser = (userId, userData) => {
  const requestOptions = {
    method: 'PATCH',
    headers: authHeader(),
    body: JSON.stringify(userData),
  };
  return fetch(`${API_URL}/users/${userId}`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
};

const userService = {
  login,
  logout,
  getAllUsers,
  getUserById,
  updateUser,
};

export default userService;

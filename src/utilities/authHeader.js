export function authHeader() {
  // return authorization header with jwt token
  let currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser && currentUser.token) {
    return { 'Authorization': currentUser.token };
  } else {
    return {};
  }
}

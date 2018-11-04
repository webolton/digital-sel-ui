const authHeader = () => {
  // return authorization header with jwt token
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  if (currentUser && currentUser.token) {
    return { Authorization: currentUser.token };
  }
  return {};
};

export default authHeader;

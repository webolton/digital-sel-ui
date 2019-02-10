const API_URL = process.env.REACT_APP_API_URL;

function getManuscripts() {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${API_URL}/manuscripts`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
}

function getManuscript(id) {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${API_URL}/manuscripts/${id}`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
}

const manuscriptService = {
  getManuscripts,
  getManuscript,
};

export default manuscriptService;

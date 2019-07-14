const API_URL = process.env.REACT_APP_API_URL;

function getWitnesses() {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${API_URL}/witnesses`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
}

const witnessService = {
  getWitnesses,
};

export default witnessService;

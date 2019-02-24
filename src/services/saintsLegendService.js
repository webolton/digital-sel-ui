const API_URL = process.env.REACT_APP_API_URL;

function getSaintsLegends() {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${API_URL}/saints_legends`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
}

function getSaintsLegend(id) {
  const requestOptions = {
    method: 'GET',
  };

  return fetch(`${API_URL}/saints_legends/${id}`, requestOptions).then(response => response).catch((error) => {
    throw error;
  });
}

const saintsLegendService = {
  getSaintsLegends,
  getSaintsLegend,
};

export default saintsLegendService;

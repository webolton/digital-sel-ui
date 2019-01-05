import setAuthToken from './setAuthToken';

const handleResponse = (response) => {
  const authToken = response.headers.get('Authorization');
  return response.text().then(
    (text) => {
      const data = text && JSON.parse(text);
      setAuthToken(authToken, data);
      if (!response.ok) {
        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }
      return data;
    },
  );
}

export default handleResponse;

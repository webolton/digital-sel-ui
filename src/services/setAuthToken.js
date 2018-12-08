import { isNil } from 'lodash';

function setAuthToken(authToken, data) {
  if (!isNil(authToken)) {
    data.token = authToken;
  }
  return data;
}

export default setAuthToken;

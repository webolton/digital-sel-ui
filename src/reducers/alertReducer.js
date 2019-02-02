export default function reducer(state = {
  alert: {},
}, action) {
  switch (action.type) {
    case 'ALERT_SUCCESS': {
      return {
        ...state,
        alert: action.payload,
      };
    }
    case 'ALERT_ERROR': {
      return {
        ...state,
        alert: action.payload,
      };
    }
    case 'ALERT_CLEAR': {
      return {
        ...state,
        alert: {},
      };
    }
    default:
      return state;
  }
}

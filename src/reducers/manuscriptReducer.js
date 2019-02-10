export default function reducer(state = {
  manuscripts: [],
  manuscript: {},
}, action) {
  switch (action.type) {
    case 'FETCHING_MANUSCRIPTS': {
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    }
    case 'FETCH_MANUSCRIPTS_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        manuscripts: action.payload,
      };
    }
    case 'FETCH_MANUSCRIPTS_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        manuscripts: [],
        errors: action.payload,
      };
    }
    case 'FETCHING_MANUSCRIPT': {
      return {
        ...state,
        fetching: true,
        fetched: false,
        updated: false,
      };
    }
    case 'FETCH_MANUSCRIPT_SUCCESS': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        manuscript: action.payload,
      };
    }
    case 'FETCH_MANUSCRIPT_FAILURE': {
      return {
        ...state,
        fetching: false,
        fetched: false,
        manuscript: null,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
}

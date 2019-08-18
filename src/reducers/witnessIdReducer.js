const LOAD_FORM = 'LOAD_FORM'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_FORM:
      return {
        witnessIds: action.witnessIds
      }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = witnessIds => ({ type: LOAD_FORM, witnessIds })

export default reducer

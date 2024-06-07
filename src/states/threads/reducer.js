import { ActionType } from './action'

function threadReducer (thread = [], action = {}) {
  switch (action.type) {
    case ActionType.CREATE_THREADS:
      return action.payload.threads
    case ActionType.FETCH_THREADS:
      return action.payload.threads
    default:
      return thread
  }
}

export default threadReducer

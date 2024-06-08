import { ActionType } from './action'

function threadReducer (threads = [], action = {}) {
  switch (action.type) {
    case ActionType.CREATE_THREADS:
      return [...threads, action.payload.thread]
    case ActionType.FETCH_THREADS:
      return action.payload.threads
    default:
      return threads
  }
}

export default threadReducer

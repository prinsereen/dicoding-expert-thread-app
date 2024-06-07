import { ActionType } from './action'

function threadDetailReducer (thread = [], action = {}) {
  switch (action.type) {
    case ActionType.CREATE_COMMENT:
      return action.payload.comment
    case ActionType.FETCH_DETAIL_THREADS:
      return action.payload.detailThread
    default:
      return thread
  }
}

export default threadDetailReducer

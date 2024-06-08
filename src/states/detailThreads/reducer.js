import { ActionType } from './action'

function threadDetailReducer (state = { comments: [] }, action = {}) {
  switch (action.type) {
    case ActionType.CREATE_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload.comment]
      }
    case ActionType.FETCH_DETAIL_THREADS:
      return action.payload.detailThread
    default:
      return state
  }
}

export default threadDetailReducer

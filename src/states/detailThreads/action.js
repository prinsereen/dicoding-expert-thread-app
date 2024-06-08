import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  FETCH_DETAIL_THREADS: 'FETCH_DETAIL_THREADS',
  CREATE_COMMENT: 'CREATE_COMMENT'
}

function fetchDetailThreadsActionCreator (detailThread) {
  return {
    type: ActionType.FETCH_DETAIL_THREADS,
    payload: {
      detailThread
    }
  }
}

function createCommentActionCreator (comment) {
  return {
    type: ActionType.CREATE_COMMENT,
    payload: {
      comment
    }
  }
}

function asyncFetchDetailThreads (id) {
  return async (dispatch) => {
    dispatch(showLoading)
    try {
      const detailThread = await api.getThreadDetail(id)
      dispatch(fetchDetailThreadsActionCreator(detailThread))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading)
  }
}

function asyncCreateComment ({ id, content }) {
  return async (dispatch) => {
    dispatch(showLoading)
    try {
      const comment = await api.createComment({ id, content })
      dispatch(createCommentActionCreator(comment))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading)
  }
}

export {
  ActionType,
  asyncFetchDetailThreads,
  asyncCreateComment
}

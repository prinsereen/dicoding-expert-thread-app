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
    type: ActionType.FETCH_DETAIL_THREADS,
    payload: {
      comment
    }
  }
}

function asyncFetchDetailThreads (id) {
  return async (dispatch) => {
    try {
      const detailThreads = await api.getThreadDetail(id)
      dispatch(fetchDetailThreadsActionCreator(detailThreads))
    } catch (error) {
      alert(error.message)
    }
  }
}

function asyncCreateComment ({ id, content }) {
  return async (dispatch) => {
    try {
      const newComment = await api.createComment({ id, content })
      dispatch(createCommentActionCreator(newComment))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  asyncFetchDetailThreads,
  asyncCreateComment
}

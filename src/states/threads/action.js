import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

const ActionType = {
  FETCH_THREADS: 'FETCH_THREADS',
  CREATE_THREADS: 'CREATE_THREADS'
}

function fetchThreadsActionCreator (threads) {
  return {
    type: ActionType.FETCH_THREADS,
    payload: {
      threads
    }
  }
}

function createThreadsActionCreator (thread) {
  return {
    type: ActionType.CREATE_THREADS,
    payload: {
      thread
    }
  }
}

function asyncCreateThreads ({ title, body, category }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const newThread = await api.createThread({ title, body, category })
      dispatch(createThreadsActionCreator(newThread))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export {
  ActionType,
  fetchThreadsActionCreator,
  asyncCreateThreads
}

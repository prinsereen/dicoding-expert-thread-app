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

function createThreadsActionCreator (threads) {
  return {
    type: ActionType.CREATE_THREADS,
    payload: {
      threads
    }
  }
}

function asyncGetThreads () {
  return async (dispatch) => {
    const threads = await api.getAllThread()
    dispatch(fetchThreadsActionCreator(threads))
  }
}

function asyncCreateThreads ({ text, body, category }) {
  return async (dispatch) => {
    try {
      const newThread = await api.createThread({ text, body, category })
      dispatch(createThreadsActionCreator(newThread))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  asyncGetThreads,
  asyncCreateThreads
}

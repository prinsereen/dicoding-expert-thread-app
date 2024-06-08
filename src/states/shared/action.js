import api from '../../utils/api'
import { receiveUsersActionCreator } from '../users/action'
import { fetchThreadsActionCreator } from '../threads/action'
import { hideLoading, showLoading } from 'react-redux-loading-bar'

function asyncPopulateUsersAndThread () {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const users = await api.getAllUsers()
      const thread = await api.getAllThread()

      dispatch(receiveUsersActionCreator(users))
      dispatch(fetchThreadsActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
    dispatch(hideLoading())
  }
}

export { asyncPopulateUsersAndThread }

import api from '../../utils/api'
import { receiveUsersActionCreator } from '../users/action'
import { fetchThreadsActionCreator } from '../threads/action'

function asyncPopulateUsersAndThread () {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers()
      const thread = await api.getAllThread()

      dispatch(receiveUsersActionCreator(users))
      dispatch(fetchThreadsActionCreator(thread))
    } catch (error) {
      alert(error.message)
    }
  }
}

export { asyncPopulateUsersAndThread }

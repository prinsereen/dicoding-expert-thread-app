import api from '../../utils/api'

const ActionType = {
  GET_LEADERBOARD: 'GET_LEADERBOARD'
}

function fetchLeaderboardActionCretaor (leaderboard) {
  return {
    type: ActionType.GET_LEADERBOARD,
    payload: {
      leaderboard
    }
  }
}

function asyncFetchLeaderboard () {
  return async (dispatch) => {
    try {
      const leaderboards = await api.getLeaderboard()
      dispatch(fetchLeaderboardActionCretaor(leaderboards))
    } catch (error) {
      alert(error.message)
    }
  }
}

export {
  ActionType,
  asyncFetchLeaderboard
}

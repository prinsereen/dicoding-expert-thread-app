import { configureStore } from '@reduxjs/toolkit'
import authUserReducer from './authUser/reducer'
import threadDetailReducer from './detailThreads/reducer'
import isPreloadReducer from './isPreLoad/reducer'
import leaderboardReducer from './leaderboard/reducer'
import threadReducer from './threads/reducer'
import usersReducer from './users/reducer'
import { loadingBarReducer } from 'react-redux-loading-bar'

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    detailThread: threadDetailReducer,
    leaderboard: leaderboardReducer,
    threads: threadReducer,
    users: usersReducer,
    loadingBar: loadingBarReducer
  }
})

export default store

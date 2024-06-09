import { describe, it, expect } from 'vitest'
import leaderboardReducer from './reducer'
import { ActionType } from './action'

/**
 * Test scenario for leaderboardReducer
 *
 * - leaderboardReducer function
 *  - should return an empty array as initial state
 *  - should return the new leaderboard when given the GET_LEADERBOARD action
 */

describe('leaderboardReducer function', () => {
  it('should return an empty array as initial state', () => {
    // Arrange
    const initialState = []
    const action = { type: 'UNKNOWN_ACTION' }

    // Act
    const nextState = leaderboardReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the new leaderboard when given the GET_LEADERBOARD action', () => {
    // Arrange
    const initialState = []
    const newLeaderboard = [
      { id: 'user-1', name: 'John Doe', score: 100 },
      { id: 'user-2', name: 'Jane Smith', score: 90 }
    ]
    const action = {
      type: ActionType.GET_LEADERBOARD,
      payload: { leaderboard: newLeaderboard }
    }

    // Act
    const nextState = leaderboardReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(newLeaderboard)
  })
})

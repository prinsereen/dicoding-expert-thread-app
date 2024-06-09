import { describe, it, expect } from 'vitest'
import usersReducer from './reducer'
import { ActionType } from './action'

/**
 * Test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return an empty array as initial state
 *  - should update state with users when given the RECEIVE_USERS action
 */

describe('usersReducer function', () => {
  it('should return an empty array as initial state', () => {
    // Arrange
    const initialState = []
    const action = { type: 'UNKNOWN_ACTION' }

    // Act
    const nextState = usersReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should update state with users when given the RECEIVE_USERS action', () => {
    // Arrange
    const initialState = []
    const newUsers = [
      { id: 'user-1', name: 'John Doe' },
      { id: 'user-2', name: 'Jane Smith' }
    ]
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: { users: newUsers }
    }

    // Act
    const nextState = usersReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(newUsers)
  })
})

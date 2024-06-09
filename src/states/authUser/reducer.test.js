import { describe, it, expect } from 'vitest'
import authUserReducer from './reducer'
import { ActionType } from './action'

/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by SET_AUTH_USER action
 *  - should return null when given by UNSET_AUTH_USER action
 *
 */

describe('authUserReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // Arrange
    const initialState = null
    const action = { type: 'UNKNOWN_ACTION' }

    // Act
    const nextState = authUserReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // Arrange
    const initialState = null
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: { id: 'user-1', name: 'John Doe' }
      }
    }

    // Act
    const nextState = authUserReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(action.payload.authUser)
  })

  it('should return null when given by UNSET_AUTH_USER action', () => {
    // Arrange
    const initialState = { id: 'user-1', name: 'John Doe' }
    const action = {
      type: ActionType.UNSET_AUTH_USER
    }

    // Act
    const nextState = authUserReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(null)
  })
})

import { describe, it, expect } from 'vitest'
import isPreloadReducer from './reducer'
import { ActionType } from './action'

/**
 * Test scenario for isPreloadReducer
 *
 * - isPreloadReducer function
 *  - should return true as initial state
 *  - should return the new isPreload value when given the SET_IS_PRELOAD action
 */

describe('isPreloadReducer function', () => {
  it('should return true as initial state', () => {
    // Arrange
    const initialState = true
    const action = { type: 'UNKNOWN_ACTION' }

    // Act
    const nextState = isPreloadReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should return the new isPreload value when given the SET_IS_PRELOAD action', () => {
    // Arrange
    const initialState = true
    const newIsPreload = false
    const action = {
      type: ActionType.SET_IS_PRELOAD,
      payload: { isPreload: newIsPreload }
    }

    // Act
    const nextState = isPreloadReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(newIsPreload)
  })
})

import { describe, it, expect } from 'vitest'
import threadReducer from './reducer'
import { ActionType } from './action'

/**
 * Test scenario for threadReducer
 *
 * - threadReducer function
 *  - should return an empty array as initial state
 *  - should add a new thread when given the CREATE_THREADS action
 *  - should update state with threads when given the FETCH_THREADS action
 */

describe('threadReducer function', () => {
  it('should return an empty array as initial state', () => {
    // Arrange
    const initialState = []
    const action = { type: 'UNKNOWN_ACTION' }

    // Act
    const nextState = threadReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should add a new thread when given the CREATE_THREADS action', () => {
    // Arrange
    const initialState = []
    const newThread = { id: 'thread-1', title: 'New Thread' }
    const action = {
      type: ActionType.CREATE_THREADS,
      payload: { thread: newThread }
    }

    // Act
    const nextState = threadReducer(initialState, action)

    // Assert
    expect(nextState.length).toEqual(1)
    expect(nextState[0]).toEqual(newThread)
  })

  it('should update state with threads when given the FETCH_THREADS action', () => {
    // Arrange
    const initialState = []
    const newThreads = [
      { id: 'thread-1', title: 'Thread 1' },
      { id: 'thread-2', title: 'Thread 2' }
    ]
    const action = {
      type: ActionType.FETCH_THREADS,
      payload: { threads: newThreads }
    }

    // Act
    const nextState = threadReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(newThreads)
  })
})

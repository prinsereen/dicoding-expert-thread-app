import { describe, it, expect } from 'vitest'
import threadDetailReducer from './reducer'
import { ActionType } from './action'

/**
 * Test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given an unknown action
 *  - should add a new comment when given the CREATE_COMMENT action
 *  - should update state with detailThread when given the FETCH_DETAIL_THREADS action
 */

describe('threadDetailReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    // Arrange
    const initialState = { comments: [] }
    const action = { type: 'UNKNOWN_ACTION' }

    // Act
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(initialState)
  })

  it('should add a new comment when given the CREATE_COMMENT action', () => {
    // Arrange
    const initialState = { comments: [] }
    const action = {
      type: ActionType.CREATE_COMMENT,
      payload: {
        comment: { id: 'comment-1', text: 'This is a new comment' }
      }
    }

    // Act
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState.comments.length).toEqual(1)
    expect(nextState.comments[0]).toEqual(action.payload.comment)
  })

  it('should update state with detailThread when given the FETCH_DETAIL_THREADS action', () => {
    // Arrange
    const initialState = { comments: [] }
    const action = {
      type: ActionType.FETCH_DETAIL_THREADS,
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Title',
          comments: [
            { id: 'comment-1', text: 'Comment 1' },
            { id: 'comment-2', text: 'Comment 2' }
          ]
        }
      }
    }

    // Act
    const nextState = threadDetailReducer(initialState, action)

    // Assert
    expect(nextState).toEqual(action.payload.detailThread)
  })
})

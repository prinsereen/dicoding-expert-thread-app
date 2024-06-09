import {
  describe, beforeEach, afterEach, it, vi, expect
} from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import {
  asyncFetchDetailThreads,
  asyncCreateComment
} from './action'

const fakeErrorResponse = new Error('Oops, something went wrong')

/**
   * Scenario Test:
   *
   * - Thread action creators
   *  - should dispatch actions and call alert correctly when asyncFetchDetailThreads fails
   *  - should dispatch actions and call alert correctly when asyncCreateComment fails
   */
describe('Thread action creators', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail
    api._createComment = api.createComment
  })

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail
    api.createComment = api._createComment

    delete api._getThreadDetail
    delete api._createComment
  })

  it('should dispatch actions and call alert correctly when asyncFetchDetailThreads fails', async () => {
    // Stub implementations
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse)

    // Mock dispatch
    const dispatch = vi.fn()

    // Mock alert
    window.alert = vi.fn()

    // Action
    await asyncFetchDetailThreads('thread-1')(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })

  it('should dispatch actions and call alert correctly when asyncCreateComment fails', async () => {
    // Stub implementations
    api.createComment = () => Promise.reject(fakeErrorResponse)

    // Mock dispatch
    const dispatch = vi.fn()

    // Mock alert
    window.alert = vi.fn()

    // Action
    await asyncCreateComment({ id: 'thread-1', content: 'This is a test comment' })(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})

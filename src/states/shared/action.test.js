import {
  describe, beforeEach, afterEach, it, vi, expect
} from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { asyncPopulateUsersAndThread } from './action'
import { receiveUsersActionCreator } from '../users/action'
import { fetchThreadsActionCreator } from '../threads/action'

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'User Test 1',
    photo: 'https://generated-image-url.jpg'
  }
]

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Thread Test 1',
    body: 'This is a test thread',
    category: 'Test Category',
    createdAt: '2022-09-22T10:06:55.588Z'
  }
]

const fakeErrorResponse = new Error('Oops, something went wrong')

/**
   * Scenario Test:
   *
   * - asyncPopulateUsersAndThread thunk
   *  - should dispatch actions correctly when data fetching succeeds
   *  - should dispatch actions and call alert correctly when data fetching fails
   */
describe('asyncPopulateUsersAndThread thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers
    api._getAllThread = api.getAllThread
  })

  afterEach(() => {
    api.getAllUsers = api._getAllUsers
    api.getAllThread = api._getAllThread

    delete api._getAllUsers
    delete api._getAllThread
  })

  it('should dispatch actions correctly when data fetching succeeds', async () => {
    // Stub implementations
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse)
    api.getAllThread = () => Promise.resolve(fakeThreadsResponse)

    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    await asyncPopulateUsersAndThread()(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse))
    expect(dispatch).toHaveBeenCalledWith(fetchThreadsActionCreator(fakeThreadsResponse))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions and call alert correctly when data fetching fails', async () => {
    // Stub implementations
    api.getAllUsers = () => Promise.reject(fakeErrorResponse)
    api.getAllThread = () => Promise.reject(fakeErrorResponse)

    // Mock dispatch
    const dispatch = vi.fn()

    // Mock alert
    window.alert = vi.fn()

    // Action
    await asyncPopulateUsersAndThread()(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })
})

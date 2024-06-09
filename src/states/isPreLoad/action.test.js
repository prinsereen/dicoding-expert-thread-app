/**
 * Scenario Test:
 *
 * - Preload action creators
 *   - should create setIsPreloadActionCreator correctly
 *   - should dispatch actions correctly when asyncPreloadProcess succeeds
 *   - should dispatch actions correctly when asyncPreloadProcess fails
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { setAuthUserActionCreator } from '../authUser/action'
import { setIsPreloadActionCreator, asyncPreloadProcess, ActionType } from './action'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

const fakeAuthUser = {
  id: 'user-1',
  name: 'Test User',
  email: 'test@example.com'
}

const fakeError = new Error('An error occurred')

describe('asyncPreloadProcess', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile
  })

  afterEach(() => {
    api.getOwnProfile = api._getOwnProfile
    delete api._getOwnProfile
  })

  it('should dispatch actions correctly when data fetching succeeds', async () => {
    // Stub implementation
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser)

    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    await asyncPreloadProcess()(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser))
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions correctly when data fetching fails', async () => {
    // Stub implementation
    api.getOwnProfile = () => Promise.reject(fakeError)

    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    await asyncPreloadProcess()(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(null))
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadActionCreator(false))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('setIsPreloadActionCreator', () => {
  it('should create setIsPreloadActionCreator correctly', () => {
    // Arrange
    const isPreload = false

    // Action
    const action = setIsPreloadActionCreator(isPreload)

    // Assertions
    expect(action.type).toBe(ActionType.SET_IS_PRELOAD)
    expect(action.payload.isPreload).toBe(isPreload)
  })
})

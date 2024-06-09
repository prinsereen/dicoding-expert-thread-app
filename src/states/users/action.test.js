/**
 * Scenario Test:
 *
 * - User action creators
 *  - should create receiveUsersActionCreator correctly
 *  - should dispatch actions correctly when asyncRegisterUser succeeds
 *  - should dispatch actions and call alert correctly when asyncRegisterUser fails
 */

import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import { receiveUsersActionCreator, asyncRegisterUser, ActionType } from './action'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

const fakeUser = {
  id: 'user-1',
  name: 'Test User',
  email: 'test@example.com'
}

const fakeError = new Error('An error occurred')

describe('asyncRegisterUser', () => {
  beforeEach(() => {
    api._register = api.register
  })

  afterEach(() => {
    api.register = api._register
    delete api._register
  })

  it('should dispatch actions correctly when data fetching succeeds', async () => {
    // Stub implementation
    api.register = () => Promise.resolve()

    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    await asyncRegisterUser(fakeUser)(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions and call alert correctly when data fetching fails', async () => {
    // Stub implementation
    api.register = () => Promise.reject(fakeError)

    // Mock dispatch
    const dispatch = vi.fn()

    // Mock alert
    window.alert = vi.fn()

    // Action
    await asyncRegisterUser(fakeUser)(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeError.message)
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })
})

describe('receiveUsersActionCreator', () => {
  it('should create receiveUsersActionCreator correctly', () => {
    // Arrange
    const users = [fakeUser]

    // Action
    const action = receiveUsersActionCreator(users)

    // Assertions
    expect(action.type).toBe(ActionType.RECEIVE_USERS)
    expect(action.payload.users).toEqual(users)
  })
})

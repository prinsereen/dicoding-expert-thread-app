import {
  describe, beforeEach, afterEach, it, vi, expect
} from 'vitest'
import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'
import {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser
} from './action'

const fakeAuthUser = {
  id: 'user-1',
  name: 'Test User',
  email: 'test@example.com'
}

const fakeErrorResponse = new Error('Oops, something went wrong')

/**
   * Scenario Test:
   *
   * - Auth action creators
   *  - should create setAuthUserAction correctly
   *  - should create unsetAuthUserAction correctly
   *  - should dispatch actions correctly when asyncSetAuthUser succeeds
   *  - should dispatch actions and call alert correctly when asyncSetAuthUser fails
   *  - should dispatch actions correctly when asyncUnsetAuthUser succeeds
   */
describe('Auth action creators', () => {
  beforeEach(() => {
    api._login = api.login
    api._getOwnProfile = api.getOwnProfile
    api._putAccessToken = api.putAccessToken
  })

  afterEach(() => {
    api.login = api._login
    api.getOwnProfile = api._getOwnProfile
    api.putAccessToken = api._putAccessToken

    delete api._login
    delete api._getOwnProfile
    delete api._putAccessToken
  })

  it('should create setAuthUserAction correctly', () => {
    const action = setAuthUserActionCreator(fakeAuthUser)
    expect(action.type).toBe(ActionType.SET_AUTH_USER)
    expect(action.payload.authUser).toEqual(fakeAuthUser)
  })

  it('should create unsetAuthUserAction correctly', () => {
    const action = unsetAuthUserActionCreator()
    expect(action.type).toBe(ActionType.UNSET_AUTH_USER)
    expect(action.payload.authUser).toBeNull()
  })

  it('should dispatch actions correctly when asyncSetAuthUser succeeds', async () => {
    // Stub implementations
    api.login = () => Promise.resolve('fake-token')
    api.getOwnProfile = () => Promise.resolve(fakeAuthUser)

    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    await asyncSetAuthUser({ email: 'test@example.com', password: 'password' })(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUser))
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch actions and call alert correctly when asyncSetAuthUser fails', async () => {
    // Stub implementations
    api.login = () => Promise.reject(fakeErrorResponse)

    // Mock dispatch
    const dispatch = vi.fn()

    // Mock alert
    window.alert = vi.fn()

    // Action
    await asyncSetAuthUser({ email: 'test@example.com', password: 'password' })(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(showLoading())
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message)
  })

  it('should dispatch actions correctly when asyncUnsetAuthUser succeeds', () => {
    // Mock dispatch
    const dispatch = vi.fn()

    // Action
    asyncUnsetAuthUser()(dispatch)

    // Assertions
    expect(dispatch).toHaveBeenCalledWith(unsetAuthUserActionCreator())
  })
})

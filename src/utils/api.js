const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1'

  async function _fetchWithAuth (url, options = {}) {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`
      }
    })
  }

  function putAccessToken (token) {
    localStorage.setItem('accessToken', token)
  }

  function getAccessToken () {
    return localStorage.getItem('accessToken')
  }

  async function register ({ email, name, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        name,
        password
      })
    })

    const responseJson = await response.json()
    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { user } } = responseJson

    return user
  }

  async function login ({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { token } } = responseJson

    return token
  }

  async function getOwnProfile () {
    const response = await _fetchWithAuth(`${BASE_URL}/users/me`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { user } } = responseJson

    return user
  }

  async function getAllThread () {
    const response = await fetch(`${BASE_URL}/threads`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { threads } } = responseJson

    return threads
  }

  async function getAllUsers () {
    const response = await fetch(`${BASE_URL}/users`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { users } } = responseJson

    return users
  }

  async function getThreadDetail (id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`)
    console.log(id)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { detailThread } } = responseJson
    console.log(detailThread)

    return detailThread
  }

  async function createThread ({ title, body, category }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
        category
      })
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { threads } } = responseJson

    return threads
  }

  async function createComment ({ id, content }) {
    const response = await _fetchWithAuth(`${BASE_URL}/threads/${id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content
      })
    })

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { threads } } = responseJson

    return threads
  }

  async function getLeaderboard () {
    const response = await fetch(`${BASE_URL}/leaderboards`)

    const responseJson = await response.json()

    const { status, message } = responseJson

    if (status !== 'success') {
      throw new Error(message)
    }

    const { data: { leaderboards } } = responseJson

    return leaderboards
  }

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getAllUsers,
    getOwnProfile,
    getAllThread,
    createThread,
    getLeaderboard,
    getThreadDetail,
    createComment

  }
})()

export default api

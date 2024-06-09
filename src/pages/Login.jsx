import React from 'react'
import useInput from '../hooks/useInput'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncSetAuthUser } from '../states/authUser/action'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')

  const onLogin = (event) => {
    dispatch(showLoading())
    event.preventDefault()
    const userData = { email, password }
    dispatch(asyncSetAuthUser(userData))
    navigate('/threads')
    dispatch(hideLoading())
  }

  return (
    <div>
      <div className="container mx-auto flex justify-center items-center mt-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center my-6">Login</h2>
          <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={onLogin}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-2">
              <p>Tidak Punya Akun ? <Link to="/register" className="text-blue-500 hover:underline font-semibold">Register</Link></p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

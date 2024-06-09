import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../states/users/action'

const Register = () => {
  const [name, onNameChange] = useInput('')
  const [email, onEmailChange] = useInput('')
  const [password, onPasswordChange] = useInput('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onRegister = (event) => {
    event.preventDefault()
    const userData = { email, name, password }
    dispatch(asyncRegisterUser(userData))
    navigate('/')
  }

  return (
    <div>
      <div className="container mx-auto flex justify-center items-center">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mt-6">Register</h2>
          <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={onRegister}>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={onNameChange}
                placeholder="Enter your name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={onEmailChange}
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-1">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={onPasswordChange}
                placeholder="Enter your password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mt-2 mb-4">
              <p>Punya akun ? <Link to="/" className="text-blue-500 hover:underline font-semibold">Login</Link></p>
              </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register

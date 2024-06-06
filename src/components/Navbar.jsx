import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">
          <Link to="/">OurForum</Link>
        </h1>
        <div>
          <Link to="/threads" className="text-white mx-2">Threads</Link>
          <Link to="/leaderboards" className="text-white mx-2">Leaderboards</Link>
          <button
            className="bg-red-700 text-white px-4 py-2 rounded ml-2 hover:bg-red-800"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

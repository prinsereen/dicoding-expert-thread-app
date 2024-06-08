import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { asyncFetchLeaderboard } from '../states/leaderboard/action'

const Leaderboards = () => {
  const dispatch = useDispatch()
  const leaderboards = useSelector((state) => state.leaderboard)

  useEffect(() => {
    dispatch(asyncFetchLeaderboard())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 w-3/4">
        <h2 className="text-3xl font-bold my-6 text-center">Leaderboards</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          {leaderboards.map((entry, index) => (
            <div
              key={entry.user.id}
              className="mb-4 p-4 bg-gray-100 hover:bg-gray-200 transition rounded-lg flex items-center"
            >
              <div className="flex-shrink-0">
                <img
                  src={entry.user.avatar}
                  alt={entry.user.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500"
                />
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-800">{entry.user.name}</h3>
                <p className="text-gray-600">Score: <span className="font-bold">{entry.score}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Leaderboards

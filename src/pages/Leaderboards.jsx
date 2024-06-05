import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'

const exampleLeaderboards = [
  {
    user: {
      id: 'user-1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 10
  },
  {
    user: {
      id: 'user-2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      avatar: 'https://generated-image-url.jpg'
    },
    score: 5
  }
]

const Leaderboards = () => {
  return (
      <div>
        <Navbar />
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold my-4">Leaderboards</h2>
          <div className="bg-white shadow-md rounded p-4 mb-4">
            {exampleLeaderboards.map((entry, index) => (
              <div key={entry.user.id} className="mb-4">
                <div className="flex items-center">
                  <img src={entry.user.avatar} alt={entry.user.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">{entry.user.name}</h3>
                    <p className="text-gray-600">Score: {entry.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

Leaderboards.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      }).isRequired,
      score: PropTypes.number.isRequired
    })
  ).isRequired
}

export default Leaderboards

import React from 'react'
import PropTypes from 'prop-types'

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mb-4" />
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p>{user.email}</p>
    </div>
  )
}

UserCard.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
}

export default UserCard

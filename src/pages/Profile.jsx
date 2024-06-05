import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'

const exampleUser = {
  id: 'john_doe',
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://generated-image-url.jpg'
}

const Profile = () => {
  return (
      <div>
        <Navbar />
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold my-4">Profile</h2>
          <div className="bg-white shadow-md rounded p-4 mb-4">
            <img src={exampleUser.avatar} alt={exampleUser.name} className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-xl font-bold">{exampleUser.name}</h2>
            <p>{exampleUser.email}</p>
          </div>
        </div>
      </div>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
}

export default Profile

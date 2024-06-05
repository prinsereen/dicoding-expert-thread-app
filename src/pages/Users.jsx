import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import UserCard from '../components/UserCard'

const exampleUsers = [
  {
    id: 'john_doe',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://firebasestorage.googleapis.com/v0/b/visionary-9f018.appspot.com/o/Bulan12-soal2.png?alt=media&token=d2004538-85f0-4aaa-9a48-d43addcb1a2d'
  },
  {
    id: 'jane_doe',
    name: 'Jane Doe',
    email: 'jane@example.com',
    avatar: 'https://firebasestorage.googleapis.com/v0/b/visionary-9f018.appspot.com/o/Bulan12-soal2.png?alt=media&token=d2004538-85f0-4aaa-9a48-d43addcb1a2d'
  },
  {
    id: 'fulan',
    name: 'Si Fulan',
    email: 'fulan@example.com',
    avatar: 'https://firebasestorage.googleapis.com/v0/b/visionary-9f018.appspot.com/o/Bulan12-soal2.png?alt=media&token=d2004538-85f0-4aaa-9a48-d43addcb1a2d'
  }
]

const Users = () => {
  return (
      <div>
        <Navbar />
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold my-4">Users</h2>
          {exampleUsers.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
  )
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Users

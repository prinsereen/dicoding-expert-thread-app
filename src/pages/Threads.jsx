import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ThreadCard from '../components/ThreadCard'

const exampleThreads = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General',
    createdAt: '2023-06-01T12:00:00Z',
    commentsCount: 5,
    author: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/50'
    }
  },
  {
    id: 'thread-2',
    title: 'Thread Kedua',
    body: 'Ini adalah thread kedua',
    category: 'General',
    createdAt: '2023-06-02T12:00:00Z',
    commentsCount: 3,
    author: {
      name: 'Jane Doe',
      avatar: 'https://via.placeholder.com/50'
    }
  }
]

const Threads = ({ threads = exampleThreads }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold my-4">Threads</h2>
        {threads.map((thread) => (
          <ThreadCard key={thread.id} thread={thread} />
        ))}
      </div>
      <Link to="/create-thread" className="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-4 rounded-full">
        +
      </Link>
    </div>
  )
}

Threads.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string,
      createdAt: PropTypes.string.isRequired,
      commentsCount: PropTypes.number.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string
      }).isRequired
    })
  )
}

export default Threads

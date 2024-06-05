import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import ThreadCard from '../components/ThreadCard'

const exampleThreads = [
  {
    id: 'thread-1',
    title: 'Thread Pertama',
    body: 'Ini adalah thread pertama',
    category: 'General'
  },
  {
    id: 'thread-2',
    title: 'Thread Kedua',
    body: 'Ini adalah thread kedua',
    category: 'General'
  }
]

const Threads = () => {
  return (
      <div>
        <Navbar />
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold my-4">Threads</h2>
          {exampleThreads.map(thread => (
            <ThreadCard key={thread.id} thread={thread} />
          ))}
        </div>
      </div>
  )
}

Threads.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string
    })
  ).isRequired
}

export default Threads

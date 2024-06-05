import React from 'react'
import PropTypes from 'prop-types'

const ThreadCard = ({ thread }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold">{thread.title}</h2>
      <p>{thread.body}</p>
      <div className="text-sm text-gray-600">Category: {thread.category}</div>
    </div>
  )
}

ThreadCard.propTypes = {
  thread: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string
  }).isRequired
}

export default ThreadCard

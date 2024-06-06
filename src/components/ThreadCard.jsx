import React from 'react'
import PropTypes from 'prop-types'

const ThreadCard = ({ thread }) => {
  const formattedDate = new Date(thread.createdAt).toLocaleDateString()

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
      <div className="relative p-4">
        {thread.category && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold uppercase px-2 py-1 rounded">
            {thread.category}
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800">{thread.title}</h2>
        {thread.body && (
          <p className="text-gray-700 mt-2">
            {thread.body.length > 100 ? `${thread.body.substring(0, 100)}...` : thread.body}
          </p>
        )}
        <div className="mt-4 text-sm text-gray-600 flex justify-between items-center">
          <div className="flex items-center">
            {thread.author.avatar && (
              <img
                src={thread.author.avatar}
                alt={thread.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <span>{thread.author.name}</span>
          </div>
          <div>
            <span>{formattedDate}</span>
            <span className="ml-2">| {thread.commentsCount} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ThreadCard.propTypes = {
  thread: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    category: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    commentsCount: PropTypes.number.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string
    }).isRequired
  }).isRequired
}

export default ThreadCard

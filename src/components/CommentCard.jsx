import React from 'react'
import PropTypes from 'prop-types'

const CommentCard = ({ comment }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <p>{comment.content}</p>
      <div className="text-sm text-gray-600 flex items-center mt-2">
        {comment.owner.avatar && (
          <img
            src={comment.owner.avatar}
            alt={comment.owner.name}
            className="w-8 h-8 rounded-full mr-2"
          />
        )}
        <span>By: {comment.owner.name}</span>
        <span className="ml-4">{comment.createdAt}</span>
      </div>
    </div>
  )
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string
    }).isRequired
  }).isRequired
}

export default CommentCard

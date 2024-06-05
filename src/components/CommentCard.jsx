import React from 'react'
import PropTypes from 'prop-types'

const CommentCard = ({ comment }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <p>{comment.content}</p>
      <div className="text-sm text-gray-600">By: {comment.owner.name}</div>
    </div>
  )
}

CommentCard.propTypes = {
  comment: PropTypes.shape({
    content: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default CommentCard

import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import CommentCard from '../components/CommentCard'

const exampleThread = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      owner: {
        id: 'user-1',
        name: 'John Doe'
      }
    },
    {
      id: 'comment-2',
      content: 'Ini adalah komentar pertama',
      owner: {
        id: 'user-1',
        name: 'John Doe'
      }
    }
  ]
}

const ThreadDetail = () => {
  return (
      <div>
        <Navbar />
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold my-4">{exampleThread.title}</h2>
          <div className="bg-white shadow-md rounded p-4 mb-4">
            <p>{exampleThread.body}</p>
            <div className="text-sm text-gray-600">Category: {exampleThread.category}</div>
          </div>
          <h3 className="text-xl font-bold my-4">Comments</h3>
          {exampleThread.comments.map(comment => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
  )
}

ThreadDetail.propTypes = {
  thread: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        owner: PropTypes.shape({
          name: PropTypes.string.isRequired
        }).isRequired
      })
    ).isRequired
  }).isRequired
}

export default ThreadDetail

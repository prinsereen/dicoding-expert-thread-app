import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import CommentCard from '../components/CommentCard'

const exampleThread = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  category: 'General',
  createdAt: '2023-06-01T12:00:00Z',
  author: {
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/50'
  },
  comments: [
    {
      id: 'comment-1',
      content: 'Ini adalah komentar pertama',
      createdAt: '2023-06-01T12:30:00Z',
      owner: {
        id: 'user-1',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/50'
      }
    },
    {
      id: 'comment-2',
      content: 'Ini adalah komentar kedua',
      createdAt: '2023-06-01T12:45:00Z',
      owner: {
        id: 'user-2',
        name: 'Jane Doe',
        avatar: 'https://via.placeholder.com/50'
      }
    }
  ]
}

const ThreadDetail = () => {
  const [comments, setComments] = useState(exampleThread.comments)
  const [newComment, setNewComment] = useState('')

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault()
    const newCommentObj = {
      id: `comment-${comments.length + 1}`,
      content: newComment,
      createdAt: new Date().toISOString(),
      owner: {
        id: 'user-3',
        name: 'New User',
        avatar: 'https://via.placeholder.com/50'
      }
    }
    setComments([...comments, newCommentObj])
    setNewComment('')
  }

  const formattedDate = new Date(exampleThread.createdAt).toLocaleDateString()

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold my-4">{exampleThread.title}</h2>
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <p>{exampleThread.body}</p>
          <div className="text-sm text-gray-600 flex items-center mt-2">
            {exampleThread.author.avatar && (
              <img
                src={exampleThread.author.avatar}
                alt={exampleThread.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            <span>By: {exampleThread.author.name}</span>
            <span className="ml-4">{formattedDate}</span>
          </div>
          <div className="text-sm text-gray-600 mt-2">Category: {exampleThread.category}</div>
        </div>
        <form onSubmit={handleCommentSubmit} className="bg-white shadow-md rounded p-4 mb-4">
          <h4 className="text-lg font-bold mb-2">Add a Comment</h4>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            className="w-full p-2 mb-2 border rounded"
            placeholder="Write your comment..."
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <h3 className="text-xl font-bold my-4">Comments</h3>
        {comments.map(comment => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

ThreadDetail.propTypes = {
  thread: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string
    }).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        owner: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatar: PropTypes.string
        }).isRequired
      })
    ).isRequired
  })
}

export default ThreadDetail

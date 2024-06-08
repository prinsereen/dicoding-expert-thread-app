import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import CommentCard from '../components/CommentCard'
import { asyncFetchDetailThreads, asyncCreateComment } from '../states/detailThreads/action'
import { useDispatch, useSelector } from 'react-redux'
import useInput from '../hooks/useInput'
import { postedAt } from '../utils'

const ThreadDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const thread = useSelector(state => state.detailThread)
  const [comment, onCommentChange, setComment] = useInput('')
  console.log(thread)

  useEffect(() => {
    dispatch(asyncFetchDetailThreads(id))
  }, [dispatch, id])

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    if (!comment.trim()) return
    try {
      await dispatch(asyncCreateComment({ id, content: comment }))
      setComment('')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 w-3/4">
        <h2 className="text-2xl font-bold my-4">{thread.title}</h2>
        <div className="bg-white shadow-md rounded p-4 mb-4">
          <p>{thread.body}</p>
          <div className="text-sm text-gray-600 flex items-center mt-2">
            {thread.owner && thread.owner.avatar && (
              <img
                src={thread.owner.avatar}
                alt={thread.owner.name}
                className="w-8 h-8 rounded-full mr-2"
              />
            )}
            {thread.owner && <span>By: {thread.owner.name}</span>}
            <span className="ml-4">{postedAt(thread.createdAt)}</span>
          </div>
          <div className="text-sm text-gray-600 mt-2">Category: {thread.category}</div>
        </div>
        <form onSubmit={handleCommentSubmit} className="bg-white shadow-md rounded p-4 mb-4">
          <h4 className="text-lg font-bold mb-2">Add a Comment</h4>
          <textarea
            value={comment}
            onChange={onCommentChange}
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
        {thread.comments && thread.comments.length > 0
          ? (
              thread.comments.map(comment => (
                comment && comment.id && <CommentCard key={comment.id} comment={comment} />
              ))
            )
          : (
          <p>No comments yet.</p>
            )}
      </div>
    </div>
  )
}

export default ThreadDetail

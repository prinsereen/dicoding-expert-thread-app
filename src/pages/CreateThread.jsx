import React from 'react'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { asyncCreateThreads } from '../states/threads/action'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const CreateThread = () => {
  const [title, onTitleChange] = useInput('')
  const [body, onBodyChange] = useInput('')
  const [category, onCategoryChange] = useInput('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onAddThread = (event) => {
    event.preventDefault()
    dispatch(asyncCreateThreads({ title, body, category }))
    navigate('/threads')
  }

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto w-3/4">
        <h2 className="text-2xl font-bold my-4">Create Thread</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onAddThread}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={onTitleChange}
              placeholder="Enter thread title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
              Body
            </label>
            <textarea
              id="body"
              value={body}
              onChange={onBodyChange}
              placeholder="Enter thread body"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Category
            </label>
            <input
              id="category"
              type="text"
              value={category}
              onChange={onCategoryChange}
              placeholder="Enter thread category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create Thread
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateThread

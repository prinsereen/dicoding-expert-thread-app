import React from 'react'
import Navbar from '../components/Navbar'

const CreateThread = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold my-4">Create Thread</h2>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              type="text"
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
              placeholder="Enter thread category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Thread
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateThread

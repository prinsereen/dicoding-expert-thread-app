import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ThreadCard from '../components/ThreadCard'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPopulateUsersAndThread } from '../states/shared/action'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

const Threads = () => {
  const dispatch = useDispatch()

  const {
    threads = [],
    users = [],
    authUser
  } = useSelector((states) => states)

  useEffect(() => {
    dispatch(showLoading())
    dispatch(asyncPopulateUsersAndThread())
    dispatch(hideLoading())
  }, [dispatch])

  const validThreads = threads.filter(thread => thread && thread.ownerId)

  const threadList = validThreads.map((thread) => {
    const author = users.find((user) => user.id === thread.ownerId) || {}
    return {
      ...thread,
      author,
      authUser: authUser ? authUser.id : null
    }
  })

  console.log(threadList)

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 w-3/4">
        <h2 className="text-2xl font-bold my-4">Threads</h2>
        {(
          threadList.map((thread) => (
            <Link key={thread.id} to={`/threads/${thread.id}`}>
              <ThreadCard thread={thread} />
            </Link>
          ))
        )}
      </div>
      <Link to="/create-thread" className="fixed bottom-8 right-8 bg-blue-500 text-white px-6 py-4 rounded-full">
        +
      </Link>
    </div>
  )
}

export default Threads

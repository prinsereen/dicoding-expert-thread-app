import React, { useEffect } from 'react'
import Register from '../src/pages/Register'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../src/pages/Login'
import Threads from '../src/pages/Threads'
import ThreadDetail from '../src/pages/ThreadDetail'
import CreateThread from '../src/pages/CreateThread'
import Leaderboards from '../src/pages/Leaderboards'
import { useSelector, useDispatch } from 'react-redux'
import { asyncPreloadProcess } from './states/isPreLoad/action'
import Loading from './components/Loading'

function App () {
  const {
    authUser = null,
    isPreload = false
  } = useSelector((states) => states)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPreloadProcess())
  }, [dispatch])

  if (isPreload) {
    return null
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </>
    )
  }

  return (
    <>
      <Loading />
      <Routes>
          <Route path="/" element={<Navigate to="/threads" />} />
          <Route path="/threads" element={<Threads/>} />
          <Route path="/threads/:id" element={<ThreadDetail/>} />
          <Route path="/create-thread" element={<CreateThread/>} />
          <Route path="/leaderboards" element={<Leaderboards/>} />
      </Routes>
    </>
  )
}

export default App

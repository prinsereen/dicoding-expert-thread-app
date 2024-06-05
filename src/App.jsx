import React from 'react'
import Register from '../src/pages/Register'
import { Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Users from '../src/pages/Users'
import Profile from '../src/pages/Profile'
import Threads from '../src/pages/Threads'
import ThreadDetail from '../src/pages/ThreadDetail'
import CreateThread from '../src/pages/CreateThread'
import Leaderboards from '../src/pages/Leaderboards'

function App () {
  return (
    <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/threads/:id" element={<ThreadDetail/>} />
        <Route path="/threads" element={<Threads/>} />
        <Route path="/create-thread" element={<CreateThread/>} />
        <Route path="/leaderboards" element={<Leaderboards/>} />
    </Routes>
  )
}

export default App

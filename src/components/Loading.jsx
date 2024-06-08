import React from 'react'
import LoadingBar from 'react-redux-loading-bar'

function Loading () {
  return (
    <div className="fixed top-0 left-0 w-full">
      <LoadingBar className="h-1 bg-red-500" />
    </div>
  )
}

export default Loading

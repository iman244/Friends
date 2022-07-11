import React from 'react'
import Messages from '../../../Materials/Messages'

function MessagesList() {
  return (
    <div className="relative w-full p-6 overflow-y-auto h-[40rem]">
    <ul className="space-y-2">
      <Messages />
    </ul>
  </div>
  )
}

export default MessagesList
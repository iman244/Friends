import React from 'react'
import Contacts from '../../../Materials/Contacts'

function ContactsList() {
  return (
    <ul className="overflow-auto h-[32rem]">
    <h2 className="my-2 mb-2 ml-2 text-lg text-gray-600">Chats</h2>
    <Contacts />
  </ul>
  )
}

export default ContactsList
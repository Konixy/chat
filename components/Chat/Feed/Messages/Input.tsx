import { Session } from 'next-auth'
import React from 'react'

export default function MessageInput({session, conversationId}: {session: Session, conversationId: string}) {
  return (
    <div className='px-4 py-6 w-full'>Input</div>
  )
}
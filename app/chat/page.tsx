'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import ChatView from '../components/ChatView'
import Background from '../components/Background'

function ChatContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''

  return (
    <main className="min-h-screen relative">
      <Background />
      <div className="relative z-10">
        <ChatView initialQuery={query} />
      </div>
    </main>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen relative">
        <Background />
        <div className="relative z-10 flex items-center justify-center">
          <div className="text-gray-600">Loading...</div>
        </div>
      </main>
    }>
      <ChatContent />
    </Suspense>
  )
}

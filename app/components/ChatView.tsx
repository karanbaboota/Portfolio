'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import MessageBubble from './MessageBubble'
import { getChatResponse, mapQueryToActionId } from '../lib/chatResponses'
import { ChatResponse } from '../lib/chatResponses'

interface ChatViewProps {
  initialQuery: string
}

export default function ChatView({ initialQuery }: ChatViewProps) {
  const [messages, setMessages] = useState<Array<{ text: string | ChatResponse; isUser: boolean }>>([])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [currentOptions, setCurrentOptions] = useState<Array<{ label: string; actionId: string }> | null>(null)
  const hasInitialized = useRef(false)

  useEffect(() => {
    // Guard against StrictMode double-invocation
    if (hasInitialized.current) return
    hasInitialized.current = true

    // On load, show welcome message or process initial query
    if (initialQuery) {
      // Map query to action ID for backward compatibility
      const actionId = mapQueryToActionId(initialQuery)
      handleAction(actionId)
    } else {
      // Show welcome message
      handleAction('welcome')
    }
  }, [initialQuery])

  useEffect(() => {
    // Scroll to bottom when messages change
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping, currentOptions])

  const handleAction = (actionId: string) => {
    // Get the node label for user message
    const response = getChatResponse(actionId)
    
    // Find the label for this actionId from previous options or use a default
    let userMessage = 'Start conversation'
    if (currentOptions) {
      const option = currentOptions.find(opt => opt.actionId === actionId)
      if (option) {
        userMessage = option.label
      }
    } else if (actionId !== 'welcome') {
      // Try to infer label from actionId
      userMessage = actionId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    }

    // Add user message
    setMessages(prev => [...prev, { text: userMessage, isUser: true }])
    setIsTyping(true)
    setCurrentOptions(null) // Clear previous options

    // Simulate typing delay
    setTimeout(() => {
      const newResponse = getChatResponse(actionId)
      setMessages(prev => [...prev, { text: newResponse, isUser: false }])
      setCurrentOptions(newResponse.options || null)
      setIsTyping(false)
    }, 800)
  }

  return (
    <motion.div
      className="flex flex-col h-screen max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Back Button */}
      <motion.div
        className="px-4 pt-4 pb-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back to home</span>
        </Link>
      </motion.div>

      {/* Profile Photo - smaller, at top */}
      <motion.div
        className="flex justify-center pt-2 pb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg ring-2 ring-white">
          <Image
            src="/profile.jpg"
            alt="Karan Baboota"
            width={128}
            height={128}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <MessageBubble
              key={index}
              message={msg.text}
              isUser={msg.isUser}
              index={index}
            />
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start mb-4 px-4">
              <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Option Buttons - fixed at bottom */}
      {currentOptions && currentOptions.length > 0 && !isTyping && (
        <motion.div
          className="border-t border-gray-200 bg-white px-4 py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {currentOptions.map((option, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleAction(option.actionId)}
                className="px-4 py-2.5 text-sm md:text-base rounded-full bg-accent text-white hover:bg-accent/90 transition-colors shadow-md font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

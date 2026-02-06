'use client'

import { motion } from 'framer-motion'
import { ChatResponse } from '../lib/chatResponses'
import AboutCard from './AboutCard'
import ProjectCard from './ProjectCard'
import ProjectDetailCard from './ProjectDetailCard'
import SkillsGrid from './SkillsGrid'
import LocationCard from './LocationCard'
import ContactCard from './ContactCard'

interface MessageBubbleProps {
  message: string | ChatResponse
  isUser: boolean
  index: number
}

export default function MessageBubble({ message, isUser, index }: MessageBubbleProps) {
  // User messages are always plain text
  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        className="flex justify-end mb-4 px-4"
      >
        <div className="max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 bg-accent text-white rounded-br-sm">
          <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{message as string}</p>
        </div>
      </motion.div>
    )
  }

  // AI messages can be structured responses
  const response = typeof message === 'string' 
    ? { type: 'text' as const, content: message }
    : message as ChatResponse

  // Render different components based on response type
  switch (response.type) {
    case 'about':
      return <AboutCard content={response.content} index={index} />
    
    case 'projects':
      return <ProjectCard content={response.content} index={index} />
    
    case 'project-detail':
      return <ProjectDetailCard content={response.content} index={index} />
    
    case 'skills':
      return <SkillsGrid content={response.content} index={index} />
    
    case 'location':
      return <LocationCard content={response.content} index={index} />
    
    case 'contact':
      return <ContactCard content={response.content} index={index} />
    
    case 'text':
    default:
      // Handle both string content and object with text property
      const textContent = typeof response.content === 'string' 
        ? response.content 
        : (response.content?.text || JSON.stringify(response.content))
      
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="flex justify-start mb-4 px-4"
        >
          <div className="max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm">
            <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{textContent}</p>
          </div>
        </motion.div>
      )
  }
}

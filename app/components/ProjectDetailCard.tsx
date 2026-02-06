'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface ProjectDetailCardProps {
  content: {
    title: string
    description: string
    tags: string[]
    link: string | null
    linkText: string | null
    details?: string[]
  }
  index: number
}

export default function ProjectDetailCard({ content, index }: ProjectDetailCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex justify-start mb-4 px-4"
    >
      <div className="max-w-[80%] md:max-w-[70%] bg-white border border-gray-200 rounded-2xl rounded-bl-sm shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">{content.title}</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{content.description}</p>
          
          {content.details && content.details.length > 0 && (
            <ul className="list-disc list-inside space-y-2 mb-4 text-sm text-gray-600">
              {content.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            {content.tags.map((tag, tagIdx) => (
              <span
                key={tagIdx}
                className="px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {content.link && (
            <Link
              href={content.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
            >
              {content.linkText}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  )
}

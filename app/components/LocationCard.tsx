'use client'

import { motion } from 'framer-motion'

interface LocationCardProps {
  content: {
    city: string
    country: string
    company: string
    remote: boolean
    message: string
  }
  index: number
}

export default function LocationCard({ content, index }: LocationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex justify-start mb-4 px-4"
    >
      <div className="max-w-[80%] md:max-w-[70%] bg-white border border-gray-200 rounded-2xl rounded-bl-sm shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {content.city}, {content.country}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{content.company}</p>
              {content.remote && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-200">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Open to Remote
                </span>
              )}
            </div>
          </div>
          
          <p className="text-sm text-gray-600 leading-relaxed">{content.message}</p>
        </div>
      </div>
    </motion.div>
  )
}

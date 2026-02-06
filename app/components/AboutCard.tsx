'use client'

import { motion } from 'framer-motion'

interface AboutCardProps {
  content: {
    name: string
    title: string
    description: string
    details: string[]
  }
  index: number
}

export default function AboutCard({ content, index }: AboutCardProps) {
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">👋</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{content.name}</h3>
              <p className="text-sm text-accent font-medium">{content.title}</p>
            </div>
          </div>
          
          <p className="text-gray-700 mb-4 leading-relaxed">{content.description}</p>
          
          <div className="space-y-2">
            {content.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-accent mt-1.5">•</span>
                <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

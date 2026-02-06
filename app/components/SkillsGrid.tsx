'use client'

import { motion } from 'framer-motion'

interface SkillsGridProps {
  content: {
    categories: Array<{
      title: string
      skills: string[]
    }>
  }
  index: number
}

export default function SkillsGrid({ content, index }: SkillsGridProps) {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Skills & Technologies</h3>
          </div>
          
          <div className="space-y-4">
            {content.categories.map((category, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (index * 0.05) + (idx * 0.02) + (skillIdx * 0.01) }}
                      className="px-3 py-1.5 text-sm font-medium bg-gray-50 text-gray-700 border border-gray-200 rounded-lg hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  {
    name: 'Me',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    ),
    query: 'About',
  },
  {
    name: 'Projects',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    ),
    query: 'Projects',
  },
  {
    name: 'Skills',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
    query: 'Skills',
  },
  {
    name: 'Contact',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    query: 'Contact',
  },
  {
    name: 'Location',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    ),
    query: 'Location',
  },
]

export default function NavCards() {
  const router = useRouter()
  const [isExiting, setIsExiting] = useState(false)
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)

  const handleClick = (query: string, index: number) => {
    if (isExiting) return
    setIsExiting(true)
    setClickedIndex(index)

    // Dispatch a custom event so the parent (Hero) can also animate out
    window.dispatchEvent(new CustomEvent('page-exit'))

    // Navigate after the exit animation completes
    const encodedQuery = encodeURIComponent(query)
    setTimeout(() => {
      router.push(`/chat?query=${encodedQuery}`)
    }, 500)
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-4">
      <div className="grid grid-cols-5 gap-2 md:gap-3">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={
              isExiting
                ? {
                    opacity: 0,
                    y: clickedIndex === index ? -20 : 20,
                    scale: clickedIndex === index ? 1.1 : 0.9,
                  }
                : { opacity: 1, y: 0, scale: 1 }
            }
            transition={{
              delay: isExiting ? index * 0.03 : index * 0.1,
              duration: isExiting ? 0.35 : 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={isExiting ? {} : { scale: 1.05 }}
            whileTap={isExiting ? {} : { scale: 0.95 }}
          >
            <button
              onClick={() => handleClick(item.query, index)}
              disabled={isExiting}
              className="flex flex-col items-center justify-center p-3 md:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer group w-full disabled:cursor-default"
            >
              <div className="text-accent mb-1 group-hover:scale-110 transition-transform [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                {item.icon}
              </div>
              <span className="text-gray-800 font-medium text-xs md:text-sm text-center">
                {item.name}
              </span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

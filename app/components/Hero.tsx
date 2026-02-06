'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

export default function Hero() {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const handleExit = () => setIsExiting(true)
    window.addEventListener('page-exit', handleExit)
    return () => window.removeEventListener('page-exit', handleExit)
  }, [])

  return (
    <motion.div
      className="flex flex-col items-center justify-center pt-8 pb-4 px-4"
      initial={{ opacity: 1 }}
      animate={
        isExiting
          ? { opacity: 0, y: -40, scale: 0.95 }
          : { opacity: 1, y: 0, scale: 1 }
      }
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.h2
        className="text-xl md:text-2xl font-semibold text-gray-800 mb-1"
        initial={{ opacity: 1, y: 0 }}
        animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: isExiting ? 0 : 0.1 }}
      >
        Hey, I&apos;m Karan
      </motion.h2>
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
        initial={{ opacity: 1, y: 0 }}
        animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: isExiting ? 0.03 : 0.2 }}
      >
        AI Engineer @ Oracle
      </motion.h1>
      <motion.p
        className="text-base md:text-lg text-gray-600 mb-4 max-w-2xl text-center px-4"
        initial={{ opacity: 1, y: 0 }}
        animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: isExiting ? 0.06 : 0.25 }}
      >
        Building AI-powered applications with LLMs, RAG systems, and agentic architectures
      </motion.p>
      
      {/* Profile Photo */}
      <motion.div
        className="relative w-48 h-60 md:w-56 md:h-72 mb-4 rounded-2xl overflow-hidden shadow-xl group cursor-pointer"
        initial={{ opacity: 1, scale: 1 }}
        animate={
          isExiting
            ? { opacity: 0, scale: 0.85, y: -30 }
            : { opacity: 1, scale: 1, y: 0 }
        }
        transition={{ duration: 0.5, delay: isExiting ? 0.05 : 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/profile.jpg"
          alt="Karan Baboota"
          width={224}
          height={288}
          className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
          priority
        />
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {/* Enhanced shadow on hover */}
        <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={isExiting ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: isExiting ? 0.08 : 0.4 }}
      >
        <SocialLinks />
      </motion.div>
    </motion.div>
  )
}

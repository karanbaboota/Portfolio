'use client'

import { useEffect, useRef, useState } from 'react'

export default function Background() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })
  const [smoothMousePos, setSmoothMousePos] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        })
        setIsHovering(true)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
    }

    // Smooth interpolation for natural movement
    const animate = () => {
      setSmoothMousePos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.05, // Slow easing (0.05 = very smooth)
        y: prev.y + (mousePos.y - prev.y) * 0.05,
      }))
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePos])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-white" />
      
      {/* Gradient mesh that follows mouse - smooth and subtle */}
      <div
        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-out ${
          isHovering ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          background: `
            radial-gradient(circle at ${smoothMousePos.x}% ${smoothMousePos.y}%, rgba(14, 165, 233, 0.15) 0%, transparent 50%),
            radial-gradient(circle at ${smoothMousePos.x * 0.8 + 20}% ${smoothMousePos.y * 0.7 + 15}%, rgba(34, 211, 238, 0.12) 0%, transparent 50%),
            radial-gradient(circle at ${smoothMousePos.x * 1.2 - 10}% ${smoothMousePos.y * 1.1 - 5}%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
            radial-gradient(circle at ${smoothMousePos.x * 0.9 + 5}% ${smoothMousePos.y * 0.8 + 20}%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            radial-gradient(circle at ${smoothMousePos.x * 1.1 - 15}% ${smoothMousePos.y * 0.9 - 10}%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)
          `,
          filter: 'blur(100px)',
          mixBlendMode: 'multiply',
          transition: 'background 0.3s ease-out',
        }}
      />
      
      <div className="absolute bottom-0 left-0 right-0 text-[200px] font-bold text-gray-100 select-none pointer-events-none text-center whitespace-nowrap overflow-hidden">
        karanbaboota
      </div>
    </div>
  )
}

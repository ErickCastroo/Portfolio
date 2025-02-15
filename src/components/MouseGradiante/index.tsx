import React, { useState, ReactNode, useEffect } from 'react'
import { useTheme } from '@/context/ThemeContext'

type GradientFollowMouseProps = {
  children?: ReactNode
}

const GradientFollowMouse: React.FC<GradientFollowMouseProps> = ({ children }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 })
  const { isDarkMode } = useTheme()

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setGradientPosition({ x: clientX, y: clientY })
  }


  useEffect(() => {
    const handleResize = () => {
      setGradientPosition(prev => ({
        ...prev,
        y: window.innerHeight / 2, 
      }))
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative w-full min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-indigo-50'}`}
    >
      <div
        className='absolute inset-0'
        style={{
          background: isDarkMode
            ? `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`
            : `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(147, 161, 255, 0.6), rgba(56, 65, 255, 0.7) 100%, transparent 100%)`,
            minHeight: '100%',
          minWidth: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div className='relative z-10'>
        {children}
      </div>
    </div>
  )
}

export { GradientFollowMouse }

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

  // Establecer altura del gradiente como la altura del viewport
  useEffect(() => {
    const handleResize = () => {
      setGradientPosition(prev => ({
        ...prev,
        y: window.innerHeight / 2, // El gradiente seguirá al mouse desde el centro
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
      className={`relative w-full min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-slate-50'}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`
            : `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(255, 204, 128, 0.5), transparent 70%)`,
          minHeight: '100%', // Asegura que cubra todo el alto de la pantalla
          minWidth: '100%', // Asegura que cubra todo el ancho de la pantalla
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export { GradientFollowMouse }

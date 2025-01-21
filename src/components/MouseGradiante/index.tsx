import React, { useState, useEffect, ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface GradientFollowMouseProps {
  children?: ReactNode;
}

const GradientFollowMouse: React.FC<GradientFollowMouseProps> = ({ children }) => {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const { isDarkMode } = useTheme(); // Usamos el contexto del tema

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setGradientPosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    // Este efecto puede ser útil si necesitas alguna inicialización adicional
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative w-full h-screen overflow-hidden ${
        isDarkMode ? 'bg-slate-900' : 'bg-white'
      }`}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isDarkMode
            ? `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
            : `radial-gradient(circle at ${gradientPosition.x}px ${gradientPosition.y}px, rgba(255, 204, 128, 0.5), transparent 70%)`,
        }}
      ></div>
      <div className="absolute inset-0 z-10 flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export { GradientFollowMouse };

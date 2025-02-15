import React from 'react'

import { useTheme } from '@/context/ThemeContext'

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='
      fixed top-5 right-5 
        px-3 py-1 text-sm text-white dark:text-slate-200 
        z-10 rounded-lg border border-transparent 
        hover:bg-indigo-500 hover:text-white 
        dark:hover:bg-slate-800 transition-all duration-300
    '
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}

export { ThemeSwitcher }

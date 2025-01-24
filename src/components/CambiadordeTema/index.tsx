import React from 'react'

import { useTheme } from '@/context/ThemeContext'

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className='absolute right-5 text-indigo-300 dark:text-slate-200 z-1000'
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export { ThemeSwitcher };

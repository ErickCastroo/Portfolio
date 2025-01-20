import React from 'react'

import { useTheme } from '@/context/ThemeContext'

const ThemeSwitcher: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export { ThemeSwitcher };

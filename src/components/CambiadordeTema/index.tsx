import { useState, useEffect } from 'react'

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div>
      <button 
        onClick={toggleDarkMode} 
        className='px-4 py-2 bg-gray-800 text-white rounded'
      >
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  )
}

export { ThemeSwitcher }

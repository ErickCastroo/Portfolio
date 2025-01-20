import { useTranslation } from 'react-i18next'

import { ThemeSwitcher } from '@/components/CambiadordeTema'

function App() {

  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng) // Cambiar idioma
  }

  return (
    <div className='w-full h-screen bg-white dark:bg-gray-900 text-black dark:text-white'>
      <h1 className='text-lg mb-6'>{t('welcome')}</h1>
      <p className='text-lg mb-6'>{t('description')}</p>
      <div className='space-x-4'>
        <button
          onClick={() => changeLanguage('en')}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('es')}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none'
        >
          Español
        </button>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export { App }
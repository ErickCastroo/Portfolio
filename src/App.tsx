import React from 'react'
import { useTranslation } from 'react-i18next'

import i18n from '@/utils/config/I18n'
import { ThemeProvider } from '@/context/ThemeContext'

import { ThemeSwitcher } from '@/components/CambiadordeTema'
import { GradientFollowMouse } from '@/components/MouseGradiante'
import { Header } from '@/components/Header'

const App: React.FC = () => {
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <ThemeProvider>
      <GradientFollowMouse>
        <div className='flex justify-end items-center mx-32'>
          <button onClick={() => changeLanguage('es')} className='text-lg mr-2 text-orange-300 dark:text-slate-300'>ES</button>
          <button onClick={() => changeLanguage('en')} className='text-lg text-orange-300 dark:text-slate-300'>EN</button>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className='flex justify-start items-center mx-10 w-full md:w-3/5 p-4'>
            <Header />
          </div>
          <div className='flex justify-center   w-full md:w-2/5'>
            <img
              src='/images/erick-castro.jpg'
              alt='Erick Castro'
              className='w-96 h-96 rounded-full border-4 border-orange-200 dark:border-slate-100 shadow-lg'
            />
          </div>
        </div>

        <div className='flex justify-start items-center mx-10 mb-5'>
          <h1 className='text-4xl dark:text-slate-300 text-orange-300'>{t('projects')}</h1>
        </div>

        <ThemeSwitcher />
      </GradientFollowMouse>
    </ThemeProvider>
  )
}

export { App }
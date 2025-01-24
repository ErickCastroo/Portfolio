import React from 'react'
import { useTranslation } from 'react-i18next'

import i18n from '@/utils/config/I18n'
import { ThemeProvider } from '@/context/ThemeContext'

import { Skills } from '@/components/Skills'
import { Header } from '@/components/Header'
import { Educacion } from './components/Educacion'
import { Experiencia } from '@/components/Experiencia'
import { GitHubRepos } from '@/components/GithubSeccion'
import { ThemeSwitcher } from '@/components/CambiadordeTema'
import { GradientFollowMouse } from '@/components/MouseGradiante'

const App: React.FC = () => {
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <ThemeProvider>
      <GradientFollowMouse>
        <div className='relative w-full min-h-screen flex flex-col overflow-auto py-0'>
          <div className='flex justify-end items-center px-4 sm:px-8 lg:px-32'>
            <button onClick={() => changeLanguage('en')} className='text-indigo-300 dark:text-slate-300'>
              EN
            </button>
            <span className='mx-2'>|</span>
            <button onClick={() => changeLanguage('es')} className='text-indigo-300 dark:text-slate-300'>
              ES
            </button>
          </div>

          <div className='flex flex-col md:flex-row justify-center items-center mx-4 sm:mx-8 lg:mx-32'>
            <div className='flex justify-start items-center w-full md:w-3/5 p-4'>
              <Header />
            </div>
            <div className='flex justify-center w-full md:w-2/5'>
              <img
                src='/images/erick-castro.jpg'
                alt='Erick Castro'
                className='w-96 h-96 rounded-full border-4 border-indigo-200 dark:border-slate-100 shadow-lg'
              />
            </div>
          </div>

          <div className='sm:mx-8 lg:mx-32 mt-20'>
            <h1 className='mx-2 text-4xl dark:text-slate-300 text-indigo-50 mb-4' id='proyectos'>{t('projects')}</h1>
            <GitHubRepos />
          </div>

          <div className='sm:mx-8 lg:mx-32 mt-20'>
            <h1 className='mx-2 text-4xl dark:text-slate-300 text-indigo-50 mb-5' id='skills'>{t('skills')}</h1>
            <p className='dark:text-slate-200'>
              <Skills />
            </p>
          </div>
          <div className='sm:mx-8 lg:mx-32 mt-20'>
            <h1 className='mx-2 text-4xl dark:text-slate-300 text-indigo-50 mb-5' id='experiencia'>{t('experince')}</h1>
            <p className='dark:text-slate-200'>
              <Experiencia />
            </p>
          </div>
          <div className='sm:mx-8 lg:mx-32 mt-20'>
            <h1 className='mx-2 text-4xl dark:text-slate-300 text-indigo-50 mb-5' id='educacion'>{t('education')}</h1>
            <p className='dark:text-slate-200'>
              <Educacion />
            </p>
          </div>
          <ThemeSwitcher />
        </div>
      </GradientFollowMouse>
    </ThemeProvider>

  )
}

export { App }

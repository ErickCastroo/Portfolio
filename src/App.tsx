import React from 'react';
import { useTranslation } from 'react-i18next'

import { ThemeProvider } from '@/context/ThemeContext';

import { ThemeSwitcher } from '@/components/CambiadordeTema';
import { GradientFollowMouse } from '@/components/MouseGradiante';
import i18n from './utils/config/I18n';

const App: React.FC = () => {
  const { t } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng) // Cambiar idioma
  }

  return (
    <ThemeProvider>
      <GradientFollowMouse>
        <div className='flex justify-center items-center min-h-screen relative z-20'>
          <h1 className='text-4xl font-bold text-center text-white'>{t('welcome')}</h1>
          <div className="space-x-4">
            <button
              onClick={() => changeLanguage('en')}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage('es')}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
            >
              Español
            </button>
            </div>
          </div>
          <div className='absolute right-5 top-5'>
            <ThemeSwitcher />
          </div>
      </GradientFollowMouse>
    </ThemeProvider>
  );
};

export { App };

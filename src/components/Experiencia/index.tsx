import { useTranslation } from 'react-i18next'


function Experiencia() {
  const { t } = useTranslation()
  return (
    <div className='px-4 sm:px-8 lg:px-16'>

      <div className='mb-12'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <h2 className='text-xl sm:text-2xl font-bold text-center sm:text-left'>
            {t('titleexp2')}
          </h2>
          <p className='dark:text-slate-300 font-bold text-sm sm:text-base mt-2 sm:mt-0 text-center sm:text-right'>
            {t('fechaexp2')}
          </p>
        </div>
        <div>
          <p className='text-base dark:text-slate-300 mb-4 text-center sm:text-left'>
          Desarrollador FrontEnd
          </p>
          <p className='text-sm sm:text-base text-justify mb-4'>
            {t('descexp2')}
          </p>
          <ul className='pl-4 text-sm sm:text-base'>
            <li className='mb-1'>
              {t('puntoexp2.1')}
            </li>
            <li className='mb-1'>
              {t('puntoexp2.2')}
            </li>
            <li className='mb-1'>
              {t('puntoexp2.3')}
            </li>
            <li className='mb-1'>
              {t('puntoexp2.4')}
            </li>
          </ul>
        </div>
      </div>

      <hr className='border-t border-slate-300 dark:border-slate-600 mb-12' />
      <div className='mb-12'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <h2 className='text-xl sm:text-2xl font-bold text-center sm:text-left'>
            {t('titleexp1')}
          </h2>
          <p className='dark:text-slate-300 font-bold text-sm sm:text-base mt-2 sm:mt-0 text-center sm:text-right'>
            {t('fechaexp1')}
          </p>
        </div>
        <div>
          <p className='text-base dark:text-slate-300 mb-4 text-center sm:text-left'>
          Desarrollador FrontEnd
          </p>
          <p className='text-sm sm:text-base text-justify mb-4'>
            {t('descexp1')}
          </p>
          <ul className='pl-4 text-sm sm:text-base'>
            <li className='mb-1'>
              {t('puntoexp1.1')}
            </li>
            <li className='mb-1'>
              {t('puntoexp1.2')}
            </li>
            <li className='mb-1'>
              {t('puntoexp1.3')}
            </li>
            <li className='mb-1'>
              {t('puntoexp1.4')}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export { Experiencia }

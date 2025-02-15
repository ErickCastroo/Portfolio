import { useTranslation } from 'react-i18next'

function Educacion() {
  const { t } = useTranslation()

  return (
    <>
      <div className='px-2'>
        <div className='mb-12'>
          <div className='flex flex-col sm:flex-row sm:justify-between items-start'>
            <h2 className='text-xl sm:text-2xl font-bold text-start sm:text-left text-white dark:text-slate-200'>
              {t('college')}
            </h2>
            <p className='font-bold text-sm sm:text-base mt-2 sm:mt-0 text-start sm:text-right text-white dark:text-slate-300'>
            {t('date')}
            </p>
          </div>
          <div>
            <p className='text-base mb-4 start sm:text-left text-white dark:text-slate-300'>
            {t('carrer')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export { Educacion }
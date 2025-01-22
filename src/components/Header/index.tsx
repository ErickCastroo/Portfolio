import { useTranslation } from 'react-i18next'

import { SocialLinks } from '@/components/Links'

function Header() {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-start justify-center py-20 text-center'>
      <h1 className='text-4xl font-bold text-gray-900  dark:text-slate-200 sm:text-5xl'>
        <a href='/'>Erick Miguel Castro Camacho</a>
      </h1>

      <h2 className='mt-1 text-lg font-medium tracking-tight text-gray-600 dark:text-slate-200 sm:text-xl'>
        Front End Developer
      </h2>

      <p className='mt-2 text-justify text-neutral-600 dark:text-[#94A3B8]'>
        {t('description')}
      </p>
      <SocialLinks />

      <nav className='mt-2 hidden lg:block' aria-label='PaginaJumps'>
        <ul className='w-max'>
          <li>
            <a className='group flex items-center py-3 active' href='#proyectos'>
              <span
                className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 dark:group-hover:bg-slate-200 group-hover:bg-slate-50 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 group-focus-visible:bg-slate-900 motion-reduce:transition-none'></span>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:group-hover:text-slate-200 dark:group-hover:bg-slate-900 group-hover:bg-slate-50 dark:group-focus-visible:text-slate-200 group-focus-visible:bg-slate-900'>{t('projects')}</span>
            </a>
          </li>
          <li>
            <a className='group flex items-center py-3 active' href='#experiencia'>
              <span
                className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 dark:group-hover:bg-slate-200 group-hover:bg-slate-50 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 group-focus-visible:bg-slate-900 motion-reduce:transition-none'></span>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:group-hover:text-slate-200 dark:group-hover:bg-slate-900 group-hover:bg-slate-50 dark:group-focus-visible:text-slate-200 group-focus-visible:bg-slate-900'>{t('Experience')}</span>
            </a>
          </li>
          <li>
            <a className='group flex items-center py-3 active' href='#educacion'>
              <span
                className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 dark:group-hover:bg-slate-200 group-hover:bg-slate-50 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 group-focus-visible:bg-slate-900 motion-reduce:transition-none'></span>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:group-hover:text-slate-200 dark:group-hover:bg-slate-900 group-hover:bg-slate-50 dark:group-focus-visible:text-slate-200 group-focus-visible:bg-slate-900'>{t('education')}</span>
            </a>
          </li>
          <li>
            <a className='group flex items-center py-3 active' href='#skills'>
              <span
                className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 dark:group-hover:bg-slate-200 group-hover:bg-slate-50 group-focus-visible:w-16 dark:group-focus-visible:bg-slate-200 group-focus-visible:bg-slate-900 motion-reduce:transition-none'></span>
              <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 dark:group-hover:text-slate-200 dark:group-hover:bg-slate-900 group-hover:bg-slate-50 dark:group-focus-visible:text-slate-200 group-focus-visible:bg-slate-900'>{t('skills')}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export { Header }
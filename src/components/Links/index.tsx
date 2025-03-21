import React from 'react'

interface SocialLinkProps {
  href: string
  label: string
  ariaLabel: string
  icon: React.ComponentType<unknown>
}

const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  label,
  ariaLabel,
  icon,
}) => (
  <li className='mr-5 shrink-0 text-xs'>
    <a
      className='block hover:text-slate-200'
      href={href}
      target='_blank'
      rel='noreferrer noopener'
      aria-label={ariaLabel}
      title={label}
    >
      <span className='sr-only'>{label}</span>
      {React.createElement(icon)}
    </a>
  </li>
)

type SocialLinksProps = object

const SocialLinks: React.FC<SocialLinksProps> = () => {
  const links = [
    {
      href: 'https://github.com/ErickCastroo',
      label: 'GitHub',
      ariaLabel: 'GitHub (opens in a new tab)',
      icon: () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 16 16'
          fill='currentColor'
          className='h-6 w-6'
          aria-hidden='true'
        >
          <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z' />
        </svg>
      ),
    },
    {
      href: 'https://linkedin.com/in/erick-miguel-castro-camacho-a6b6312a1',
      label: 'LinkedIn',
      ariaLabel: 'LinkedIn (opens in a new tab)',
      icon: () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-6 w-6'
          aria-hidden='true'
        >
          <path d='M20.5 2h-17A1.5 1.5 0 0
          0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17A1.5 1.5 0 0 0 22 20.5v-17A1.5 1.5 0 0 0 20.5 2zM8.75 19h-3.5v-11h3.5v11zm-1.75-12.5a1.75 1.75 0 1 1 1.75-1.75 1.75 1.75 0 0 1-1.75 1.75zm12.5 12.5h-3.5v-5.5c0-1.31-.69-2.5-1.75-2.5s-1.75 1.19-1.75 2.5v5.5h-3.5v-11h3.5v1.5c.58-.92 1.67-1.5 2.75-1.5 2.19 0 4 1.81 4 4v6.5z' />
        </svg>
      ),
    },
    {
      href: './images/CVErickMiguelCastroCamacho.pdf',
      label: 'Curriculum',
      ariaLabel: 'Descargar Curriculum (abre en una nueva pestaña)',
      icon: () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-6 w-6'
          aria-hidden='true'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V6l-6-4zm-2 13H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V7h4v2z' />
        </svg>
      ),
      attributes: {
        download: 'Erick-CV.pdf',
      },
    },
    {
      href: 'mailto:castrocamachoerickmiguel21@gmail.com',
      label: 'castrocamachoerickmiguel21@gmail.com',
      ariaLabel: 'Correo Electrónico (abre el cliente de correo)',
      icon: () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-6 w-6' 
          aria-hidden='true'
        >
          <path d='M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z' />
        </svg>
      ),
    }
  ]

  return (
    <ul className='flex justify-center m-3 text-gray-700 dark:text-slate-200'>
      {links.map((link) => (
        <SocialLink key={link.href} {...link} />
      ))}
    </ul>
  )

}

export { SocialLinks }
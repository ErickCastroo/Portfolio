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
      href: 'https://profile.indeed.com/?hl=es_MX&co=MX&from=gnav-homepage',
      label: 'Indeed',
      ariaLabel: 'Indeed (opens in a new tab)',
      icon: () => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-6 w-6'
          aria-hidden='true'
        >
          <path d='M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm-1.5 18H9v-6h1.5v6zm0-7.5H9V9h1.5v1.5zm4.5 7.5h-3V9h3v9zm3-7.5h-1.5V9H18v1.5z' />
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
      href: 'https://wa.me/526313446741',
      label: 'WhatsApp',
      ariaLabel: 'WhatsApp (opens in a new tab)',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      href: 'mailto:castrocamachoerickmiguel21@gmail.com',
      label: 'castrocamachoerickmiguel21@gmail.com',
      ariaLabel: 'Correo Electrónico (abre el cliente de correo)',
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6" 
          aria-hidden="true"
        >
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
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
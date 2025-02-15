import React from 'react'
import { useTranslation } from 'react-i18next'

type CardProps = {
  url: string
  title: string
  company: string
  time: string
  description: string
  tags: string[]
}

const Card: React.FC<CardProps> = ({ url, title, company, time, description, tags }) => (
  <div className='cursor-pointer p-6 rounded-lg hover:shadow-lg shadow-xl hover:shadow-white/50 dark:hover:shadow-cyan-500/50 transition-shadow'>
    <a
    target='_blank'
    rel='noopener noreferrer'
      href={url}
      className='w-full h-full block'>
      <h3 className='text-lg font-bold text-white dark:text-cyan-400'>{title}</h3>
      <p className='text-sm text-white dark:text-cyan-300'>{company}</p>
      <p className='text-xs text-white dark:text-cyan-500 mb-3'>{time}</p>
      <p className='text-sm text-white dark:text-gray-300'>{description}</p>
      <div className='flex flex-wrap gap-2 mt-3'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className='bg-indigo-600 text-indigo-100 dark:bg-cyan-600 dark:text-cyan-100 text-xs px-2 py-1 rounded-full'
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  </div>
)

type SectionProps = {
  title: string
  items: CardProps[]
}

const Section: React.FC<SectionProps> = ({ items }) => (
  <div className='flex flex-col'>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
      {items.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  </div>
)

const Experiencia: React.FC = () => {
  const { t } = useTranslation()

  const experience = [
    {
      'url': 'https://www.oomapasnogales.gob.mx/',
      title: t('titleexp1'),
      company: 'Oomapas-Nogales',
      time: t('fechaexp1'),
      description: t('descexp1'),
      tags: ['React', 'TypeScript', 'Tailwind', 'REST', 'Figma', 'Node', 'Express', 'MongoDB', 'microservices'],
    },
    {
      'url': 'https://github.com/zchelalo/notitas_ui',
      title: t('titleexp2'),
      company: t('Projectofclass'),
      time: t('fechaexp2'),
      description: t('descexp2'),
      tags: ['React', 'JavaScript', 'Tailwind', 'REST', 'Figma'],
    },
  ]

  return (
    <div className='w-full text-white p-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <Section title={t('Experience')} items={experience} />
        </div>
    </div>
  )
}

export { Experiencia }

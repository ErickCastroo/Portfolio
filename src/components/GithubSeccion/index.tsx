import React from 'react'
import Slider from 'react-slick'

import { useTranslation } from 'react-i18next'

import { repos } from '@/data/data.repos'

import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaCss3 } from 'react-icons/fa'
import { SiC, SiEjs, SiExpo, SiExpress, SiMongodb, SiMysql, SiPhp, SiPostgresql, SiRedis, SiStripe, SiTailwindcss, SiTypescript, SiUnity, SiVite } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const GitHubRepos: React.FC = () => {

  const { t } = useTranslation()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  }

  // Mapeo de lenguajes a íconos
  const languageIcons: { [key: string]: JSX.Element } = {
    JavaScript: <FaJs />,
    React: <FaReact />,
    ReactNative: <TbBrandReactNative />,
    CSS: <FaCss3 />,
    Expo: <SiExpo />,
    Tailwindcss: <SiTailwindcss />,
    Node: <FaNodeJs />,
    Python: <FaPython />,
    Java: <FaJava />,
    Vite: <SiVite />,
    TypeScript: <SiTypescript />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    Redis: <SiRedis />,
    Unity: <SiUnity />,
    C: <SiC />,
    PHP: <SiPhp />,
    EJS: <SiEjs />,
    MySQL: <SiMysql />,
    PostgreSQL: <SiPostgresql />,
    Stripe: <SiStripe />,
  }

  return (
    <div className='w-full m-auto'>
      <div className='mt-10'>
        <Slider {...settings}>
          {repos.map((repo) => (
            <div key={repo.name} className='dark:bg-slate-600 bg-gray-200  h-[450px] dark:text-slate-200 rounded-xl flex flex-col'>
              <div className='h-56 dark:bg-slate-500 bg-gray-100 flex justify-center items-center object-cover rounded-t-xl'>
                <img src={repo.image} className='h-52' /> 
              </div>
              <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-2xl font-semibold text-neutral-700 dark:text-slate-200'>{repo.name}</h2>
                <p className='text-center truncate max-w-full text-neutral-700 dark:text-slate-200'>{repo.description ? repo.description : t('DesProject')}</p>

                <div className='flex gap-2 text-indigo-300 dark:text-slate-200'>
                  {repo.languages && repo.languages.map((language: string) => (
                    <span key={language.trim()} className='text-xl'>
                      {languageIcons[language.trim()] || language}
                    </span>
                  ))}
                </div>
              </div>
              <div className='flex items-end justify-center mt-4'>
                <a href={repo.url} target='_blank' rel='noreferrer' className='text-indigo-400 bg-neutral-50 hover:bg-indigo-200 dark:hover:bg-slate-500 dark:text-slate-300 dark:bg-slate-900 p-2 rounded-lg'>{t('ViewonGitHub')}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export { GitHubRepos }

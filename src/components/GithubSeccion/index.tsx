import React from "react";
import Slider from "react-slick";

import { useTranslation } from "react-i18next";

import { repos } from '@/data/data.repos';

import { FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaCss3 } from 'react-icons/fa'
import { SiC, SiExpo, SiExpress, SiMongodb, SiPhp, SiRedis, SiTailwindcss, SiTypescript, SiUnity, SiVite } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const GitHubRepos: React.FC = () => {

  const { t } = useTranslation();

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
  };

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

  };

  return (
    <div className='w-full m-auto'>
      <div className='mt-20'>
        <Slider {...settings}>
          {repos.map((repo) => (
            <div key={repo.name} className='bg-slate-600 h-[450px] text-slate-200 rounded-xl'>
              <div className='h-56 bg-slate-500 flex justify-center items-center object-cover rounded-t-xl'>
                <img src=""  alt="" className='w-full h-full object-cover rounded-t-xl' />
              </div>

              <div className='flex flex-col items-center justify-center gap-4'>
                <h2 className='text-2xl font-semibold'>{repo.name}</h2>
                <p className='text-center'>{repo.description ? repo.description : t('DesProject')}</p>

                <div className="flex gap-2">
                  {repo.languages && repo.languages.map((language: string) => (
                    <span key={language.trim()} className="text-xl">
                      {languageIcons[language.trim()] || language}
                    </span>
                  ))}
                </div>

                <a href={repo.url} target='_blank' rel='noreferrer' className='text-orange-300 dark:text-slate-300 bg-slate-900 p-2 rounded-lg'>{t('ViewonGitHub')}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>  
  );
};

export { GitHubRepos };

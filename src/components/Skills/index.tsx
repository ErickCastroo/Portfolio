import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaLinux } from "react-icons/fa";
import { SiVite, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiPostgresql, SiMysql, SiMongodb, SiAndroidstudio} from "react-icons/si";
import { BsFillGearFill } from "react-icons/bs";
import { RiBook2Line } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { motion } from "framer-motion"; // Importamos motion

const skillsData = [
  {
    title: "Front-End",
    icons: [
      { icon: <FaReact />, name: "React+Vite" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiBootstrap />, name: "Bootstrap" },
      { icon: <BsFillGearFill />, name: "REST" },
    ],
  },
  {
    title: "Back-End",
    icons: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiJavascript />, name: "JavaScript" },
    ],
  },
  {
    title: "Bases de Datos",
    icons: [
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
    ],
  },
  {
    title: "Herramientas",
    icons: [
      { icon: <RiBook2Line />, name: "Obsidian" },
      { icon: <FiFigma />, name: "Figma" },
      { icon: <SiAndroidstudio />, name: "Android Studio" },
      { icon: <FaLinux />, name: "Linux" },
      { icon: <BsFillGearFill />, name: "Soporte Técnico" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="">
      <div className="flex flex-wrap">
        {skillsData.map((category) => (
          <div
            className="flex flex-col w-full sm:w-1/2 md:w-1/3 xl:w-1/4 mt-4 px-2"
            key={category.title}
          >
            <div
              className="bg-gray-200 dark:bg-slate-600 flex-1 rounded-lg p-4 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-slate-200">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {category.icons.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-gray-700 dark:text-gray-300 hover:text-indigo-300 dark:hover:text-slate-950"
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.9 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-4xl">{skill.icon}</div>
                    <p className="text-sm mt-2">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Skills };

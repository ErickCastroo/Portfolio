type Repo = {
  image?: string;
  name: string;
  description: string;
  languages: string[];
  url: string;
}

const repos: Repo[] = [
  {
    "image": "./images/proyectos/Gastitos.png",
    "name": "Gastitos",
    "description": "Proyecto personal donde aprendí a usar Reducer, useMemo, Context API y mis propios hooks, hecho con React+typeScript+Vite",
    "languages": ["TypeScript", "React", "Vite"],
    "url": "https://github.com/ErickCastroo/Gastitos"
  },
  {
    "image": "./images/proyectos/Notitas.png",
    "name": "Notitas",
    "description": "Interfaz gráfica de la aplicación de Notitas, hecha con React, ShadCN, TailwindCSS. Soporte español e ingles.",
    "languages": ["TypeScript", "React", "Vite"],
    "url": "https://github.com/zchelalo/notitas_ui"
  },
  {
    "image": "./images/proyectos/Saloncito.png",
    "name": "saloncito_ui",
    "description": "proyecto para Universidad Tecnologica de Nogales Sonora donde hacemos una plataforma de trabajo inspirada en classroom de google",
    "languages": ["TypeScript", "React", "Vite"],
    "url": "https://github.com/ErickCastroo/saloncito_ui"
  },
  {
    "name": "ContadorDeCalorias",
    "description": "En este proyecto apriendi a usar mejor typescript junto con UseReducer",
    "languages": ["TypeScript", "React", "Vite"],
    "url": "https://github.com/ErickCastroo/ContadorDeCalorias"
  },
  {
    "name": "Jatic_ui",
    "description": "proyecto para Universidad Tecnologica de Nogales Sonora",
    "languages": ["TypeScript", "React", "Vite"],
    "url": "https://github.com/ErickCastroo/Jatic_ui"
  },
  {
    "name": "Calculadora-de-propinas",
    "description": "",
    "languages": ["TypeScript", "React", "Vite"],
    "url": "https://github.com/ErickCastroo/Calculadora-de-propinas"
  },
  {
    "name": "RPG-Game",
    "description": "",
    "languages": ["Unity", "C"],
    "url": "https://github.com/ErickCastroo/RPG-Game"
  },
  {
    "name": "GuitarraLA-TS",
    "description": "Este proyecto se demuestran las bases de uso de React y TypeScript implementando el lenguaje Tipado.",
    "languages": ["CSS", "React", "TypeScript"],
    "url": "https://github.com/ErickCastroo/GuitarraLA-TS"
  },
  {
    "name": "GuitarraLA",
    "description": "Este proyecto se demuestran las bases de uso de React implementando Hooks y custom hooks",
    "languages": ["JavaScript", "React", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/GuitarraLA"
  },
  {
    "name": "NotitasNativo",
    "description": "",
    "languages": ["JavaScript", "React", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/NotitasNativo"
  },
  {
    "name": "NotitasSmartwatch",
    "description": "Notitas Smartwatch es una adaptacion de Notitas pero lo estamos haciendo para todos los dispositivos inteligentes este repositorio es para el Smartwatch.",
    "languages": ["JavaScript", "ReactNative", "Expo", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/NotitasSmartwatch"
  },
  {
    "name": "Curso-React-Native",
    "description": "",
    "languages": ["JavaScript", "ReactNative", "Expo", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/Curso-React-Native"
  },
  {
    "name": "NotitasNative",
    "description": "Aplicación móvil desarrollada con React Native para tomar notas en dispositivos celulares, relojes y televisores.",
    "languages": ["JavaScript", "ReactNative", "Expo", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/NotitasNative"
  },
  {
    "name": "Demos",
    "description": "",
    "languages": ["JavaScript"],
    "url": "https://github.com/ErickCastroo/Demos"
  },
  {
    "name": "NodeJS-RestAPI-MongoDB",
    "description": "Rest API con mongoDB donde hacemos un crud de tareas, donde en un futuro le haremos un Front con ReactJS",
    "languages": ["JavaScript", "Node", "Express", "MongoDB"],
    "url": "https://github.com/ErickCastroo/NodeJS-RestAPI-MongoDB"
  },
  {
    "name": "Node-Redis",
    "description": "",
    "languages": ["JavaScript", "Node", "Express", "Redis"],
    "url": "https://github.com/ErickCastroo/Node-Redis"
  },
  {
    "name": "Nodejs-MySQL-Railway",
    "description": "Despliegue de un sencillo back-end con Nodejs & MySQL en Railway",
    "languages": ["JavaScript", "Node", "Express", "MySQL"],
    "url": "https://github.com/ErickCastroo/Nodejs-MySQL-Railway"
  },
  {
    "name": "RESTAPI-PostgreSQL",
    "description": "",
    "languages": ["JavaScript", "Node", "Express", "PostgreSQL"],
    "url": "https://github.com/ErickCastroo/RESTAPI-PostgreSQL"
  },
  {
    "name": "nodeJS-stripe",
    "description": "API de prueba utilizando NodeJS y Stripe",
    "languages": ["JavaScript", "Node", "Express", "Stripe"],
    "url": "https://github.com/ErickCastroo/nodeJS-stripe"
  },
  {
    "name": "RestAPI-de-peliculas",
    "description": "",
    "languages": ["JavaScript", "Node", "Express",],
    "url": "https://github.com/ErickCastroo/RestAPI-de-peliculas"
  },
  {
    "name": "Proyecto-Node-EJS",
    "description": "",
    "languages": ["EJS", "Node", "Express"],
    "url": "https://github.com/ErickCastroo/Proyecto-Node-EJS"
  },
  {
    "name": "restAPI-crud",
    "description": "",
    "languages": ["JavaScript", "Node", "Express"],
    "url": "https://github.com/ErickCastroo/restAPI-crud"
  },
  {
    "name": "Node-Website",
    "description": "",
    "languages": ["JavaScript", "Node", "Express"],
    "url": "https://github.com/ErickCastroo/Node-Website"
  },
  {
    "name": "Node-Primera-APP",
    "description": "",
    "languages": ["JavaScript", "Node", "Express"],
    "url": "https://github.com/ErickCastroo/Node-Primera-APP"
  },
  {
    "name": "Zona-Adminstrativa",
    "description": "",
    "languages": ["JavaScript", "Node", "React", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/Zona-Adminstrativa"
  },
  {
    "name": "CRUD-MongoDB-Node-ReactJS",
    "description": "Una interfaz gráfica profesional para un sistema CRUD con MongoDB, desarrollada con ReactJS, TailwindcssCSS, ShadCN, entre otras, permite una gestión eficiente de datos con operaciones de creación, lectura, actualización y eliminación.",
    "languages": ["JavaScript", "React", "Tailwindcss", "Node", "MongoDB"],
    "url": "https://github.com/ErickCastroo/CRUD-MongoDB-Node-ReactJS"
  },
  {
    "name": "React-RickAndMorty-Api",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-RickAndMorty-Api"
  },
  {
    "name": "React-useContext",
    "description": "mejorando Logica de UseContext",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-useContext"
  },
  {
    "name": "React-Tweet",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-Tweet"
  },
  {
    "name": "React-Leaflet",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-Leaflet"
  },
  {
    "name": "React-galery",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-galery"
  },
  {
    "name": "React-hook-form",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-hook-form"
  },
  {
    "name": "React-table-tanstack",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-table-tanstack"
  },
  {
    "name": "React-select",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-select"
  },
  {
    "name": "React-Player",
    "description": "Aqui aprendi hacer un visualizador de contenido",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-Player"
  },
  {
    "name": "React-Dropzone",
    "description": "Aprendi como poder hacer un dropzone",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-Dropzone"
  },
  {
    "name": "React-Copy-to-Clipboard-App",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-Copy-to-Clipboard-App"
  },
  {
    "name": "React-Cards",
    "description": "En este proyecto aprendi hacer unas cartas en react",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-Cards"
  },
  {
    "name": "Administrar-tus-gastos-e-ingresos",
    "description": "App para poder administrar tus gastos e ingresos",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/Administrar-tus-gastos-e-ingresos"
  },
  {
    "name": "React-coinGecko",
    "description": "App donde puedes ver los precios de las criptomonedas según la cap. de mercado",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-coinGecko"
  },
  {
    "name": "React-PDF",
    "description": "Creacion de pdf con react",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/React-PDF"
  },
  {
    "name": "Drag-and-Drop-React-App",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/Drag-and-Drop-React-App"
  },
  {
    "name": "react-router-rutas-protegidas",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/react-router-rutas-protegidas"
  },
  {
    "name": "tareas-app",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/tareas-app"
  },
  {
    "name": "tutorial-custom-hook",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/tutorial-custom-hook"
  },
  {
    "name": "chat-prueba",
    "description": "Test del diseño y funcionalidad básica de un chatbot.",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/chat-prueba"
  },
  {
    "name": "Mi-primera-APP-con-react",
    "description": "",
    "languages": ["JavaScript", "React", "Vite", "Tailwindcss"],
    "url": "https://github.com/ErickCastroo/Mi-primera-APP-con-react"
  },
  {
    "name": "OsilUtn",
    "description": "proyecto para UTN",
    "languages": ["PHP"],
    "url": "https://github.com/ErickCastroo/OsilUtn"
  },
]

export { repos }

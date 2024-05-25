import React from 'react';
import img1 from '../assets/pages/PokeDex.png';
import img2 from '../assets/pages/Peliculas.png';
import img3 from '../assets/pages/ListaTareas.png';
import img4 from '../assets/pages/e-comerce.png';
import img5 from '../assets/pages/calc.png';
import img6 from '../assets/pages/aurispage.png';

export default function Proyectos() {

  const pages = [
    {
      id: 1,
      link: 'https://pokebnjdex.netlify.app/',
      title: 'PokeDex',
      img: img1,
      description: 'Página con información sobre los Pokemones de la Primera Generación. Hecha con HTML, CSS y JavaScript',
    },
    {
      id: 2,
      link: 'https://cinepeliss.netlify.app/',
      title: 'InfoCine',
      img: img2,
      description: 'Página con información de los últimos lanzamientos en el mundo del cine. Hecha con React, Tailwind CSS y APIs',  
    },
    {
      id: 3,
      link: 'https://listatarea1.netlify.app/',
      title: 'Lista de Tareas',
      img: img3,
      description: 'Página de tu lista de tareas. Agrega tareas cuantas quieras o márcalas como terminadas. Hecha con React y Tailwind CSS',     
    },
    {
      id: 4,
      link: 'https://e-comerce-bnj.netlify.app/',
      title: 'E-comerce Sencillo',
      img: img4,
      description: 'Página de una tienda de ropa sencilla. Hecha con HTML, CSS y JavaScript',
    },
    {
      id: 5,
      link: 'https://calculatorbnjj.netlify.app/',
      title: 'Calculadora',
      img: img5,
      description: 'Página de una calculadora sencilla. Hecha con HTML, CSS y JavaScript',
    },
    {
      id: 6,
      link: 'https://calculatorbnjj.netlify.app/',
      title: 'Marca de Auriculares',
      img: img6,
      description: 'Página sobre una marca de auriculares. Hecha con HTML y CSS',
    }
  ];

  return (
    <section id='Proyectos' className='flex flex-col w-[85%] items-center justify-evenly min-h-screen text-white font-cuerpo dark:text-black'>
      <div className=' p-4 w-full'>
        <small className='text-2xl font-thin text-gray-500 mb-3'>Proyectos</small>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {pages.map((page) => (
          <div key={page.id} className='flex flex-col items-center justify-start w-full hover:scale-105 transition ease-in-out hover:shadow-md rounded bg-[#10476a] dark:text-white'>
            <a href={page.link} target='_blank' rel='noopener noreferrer'>
              <img src={page.img} alt='preview' className='w-full h-auto rounded-t' />
              <div className='p-3'>
                <h1 className='font-bold'>{page.title}</h1>
                <p className='font-thin text-xs'>{page.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

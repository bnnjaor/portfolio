import React from 'react'
import peliculas from '../img/peliculas.png'

export default function Proyectos() {
  return (
    <section id='Proyectos' className='flex w-[85%] items-center justify-center h-screen text-white font-cuerpo dark:text-black '>
        <div className='border-2 border-white px-5 py-3  flex flex-col items-center justify-center ' >
          <img className=' w-72 z-10' src={peliculas} alt="" />
          <h3 className='text-2xl'>Peliculas API</h3>
          <p>Pagina con informacion de peliculas con API</p>
          
        </div>
    </section>
  )
}

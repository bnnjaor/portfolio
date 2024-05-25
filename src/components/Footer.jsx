import React from 'react'
import cv from '../assets/BenjaminOrmeño.pdf'

export default function Footer() {
  return (
    <footer className='flex flex-col w-full md:w-[85%] items-center justify-center text-white font-cuerpo dark:text-black py-5'>
      <div className='flex flex-col items-center justify-center mb-10'>
        <h2 className='text-center mb-4'>Gracias por llegar hasta aquí</h2>
        <button className='px-6 py-2 bg-[#179de0]/60 hover:bg-[#179de0]/100 hover:backdrop-blur-md  rounded  transition-all duration-300'><a href={cv} target='_blank'>CV AQUÍ</a></button>
      </div>

      <div className='flex flex-col items-center justify-center mb-4'>
        <h2>Copyright</h2>
      </div>
      
      <nav className='w-full'>
        <ul className="flex flex-wrap justify-center gap-2 md:gap-4 [&>li>a]:inline-block [&>li>a]:px-2 md:[&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold">
          <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#Inicio">Inicio</a></li>
          <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#SobreMi">Sobre Mi</a></li>
          <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#Proyectos">Proyectos</a></li>
          <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#Contacto">Contacto</a></li>
        </ul>
      </nav>
    </footer>
  )
}
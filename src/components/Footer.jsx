import React from 'react'

export default function Footer() {
  return (
    <footer className='flex w-[85%]  justify-evenly text-white font-cuerpo dark:text-black'>
      <div className='flex mb-0 px-0 py-0'>
        <h2>Copiryght</h2>

      </div>
      <nav className='flex '>
            <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold   ">
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Inicio">Inicio</a> </li>
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#SobreMi">Sobre Mi</a> </li>
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Proyectos">Proyectos</a> </li>
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Contacto">Contacto</a> </li>
            </ul>
        </nav>
    </footer>
  )
}

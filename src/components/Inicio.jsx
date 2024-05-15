import React, { useState } from 'react'
import { FaArrowCircleDown } from "react-icons/fa";

export default function Inicio() {

  

  return (
    <section id='Inicio' className='flex w-[85%] items-center justify-center h-screen text-white dark:text-black font-cuerpo'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-6xl text-center font-bold'>Bienvenido a</h1>
            <h1 className='text-8xl text-center font-bold text-[#179de0] '>Mi Portafolio</h1>
            
            <a href="#SobreMi" className='pt-10 dark:color-black hover:text-slate-300 transition-all'><FaArrowCircleDown size={70} /></a>
        </div>
    </section>
  )
}

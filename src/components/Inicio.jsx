import React from 'react';
import { FaArrowCircleDown } from "react-icons/fa";

export default function Inicio() {
  return (
    <section id='Inicio' className='flex flex-col items-center justify-center h-screen text-white dark:text-black font-cuerpo'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Bienvenido a</h1>
        <h1 className='text-6xl md:text-8xl lg:text-9xl font-bold text-[#179de0]'>Mi Portafolio</h1>
      </div>
      <a href="#SobreMi" className='mt-10 text-3xl md:text-5xl lg:text-6xl dark:text-black hover:text-slate-300 transition-all'><FaArrowCircleDown /></a>
    </section>
  );
}

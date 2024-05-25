import React from 'react';
import yocoso from '../img/yocoso.png';

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SobreMi() {
  return (
    <section id='SobreMi' className='flex flex-col md:flex-row w-[85%] mx-auto items-center justify-center h-screen text-white dark:text-black font-cuerpo mb-32'>
      <div className='w-full md:w-1/2 text-center md:text-left p-4'>
        <small className='text-2xl font-thin text-gray-600'>Sobre Mi</small>
        <h1 className='text-4xl md:text-6xl font-bold mt-3'>Frontend <span className='text-[#179de0]'>Developer</span></h1>
        <p className='w-full mt-5 tracking-widest'>¡Hola! Soy un estudiante apasionado de Ingeniería y Licenciatura en Sistemas de Información. Soy nuevo en el mundo del desarrollo web. Actualmente, tengo habilidades en HTML, CSS, JavaScript y React.</p>
        <p className='mt-1 w-full tracking-widest'>Estoy comprometido con mi desarrollo profesional y estoy dispuesto a enfrentar nuevos desafíos para alcanzar mis metas, seguir aprendiendo y creciendo aún más.</p>
        <div className='flex  justify-center md:justify-start gap-3 mt-3 [&>button]:cursor-default [&>button]:transition [&>button]:duration-300 [&>button]:ease-in-out'>
          <button className='hover:text-orange-500 hover:scale-110'>
            <FaHtml5 size={50} />
          </button>
          <button className='hover:text-blue-600 hover:scale-110'>
            <FaCss3Alt size={50} />
          </button>
          <button className='hover:text-yellow-300 hover:scale-110'>
            <IoLogoJavascript size={50} />
          </button>
          <button className='hover:text-blue-500 hover:scale-110'>
            <FaReact size={50} />
          </button>
          <button className='hover:text-blue-400 hover:scale-110'>
            <RiTailwindCssFill size={50} />
          </button>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center md:justify-center p-4'>
        <img src={yocoso} alt="Perfil" className='w-[450px] md:w-[800px] rounded-full transf' />
      </div>
    </section>
  );
}
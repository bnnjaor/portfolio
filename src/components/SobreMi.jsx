import React from 'react'
import yocoso from '../img/yocoso.png'

import { FaHtml5, FaCss3Alt, FaReact   } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";

export default function SobreMi() {
  return (
    <section id='SobreMi' className='flex w-[85%] items-center justify-center h-screen text-white dark:text-black font-cuerpo'>
        <div className='flex items-center justify-center'>
            <div className='w-5/12'> 
                <small className='text-2xl font-thin text-gray-400'>Sobre Mi</small>
                <h1 className='text-6xl font-bold mt-3'>Frontend <span className='text-[#179de0]'>Developer</span></h1>
                <p className='w-full mt-5 tracking-widest text-left'>Hola! Soy Benjamín Ormeño, un estudiante apasionado de ING. y LIC. en Sistemas de Información. Aunque soy relativamente nuevo en el mundo del desarrollo web, estoy entusiasmado por aprender y crecer en esta área. Actualmente, tengo habilidades en HTML, CSS y JavaScript, y estoy emocionado por profundizar mi conocimiento en tecnologías como React y Tailwind CSS.</p>
                <p className='mt-1 w-full tracking-widest text-left'>
                  Mi objetivo es convertirme en un desarrollador fullstack. Estoy comprometido con mi desarrollo profesional y estoy dispuesto a enfrentar nuevos desafíos para alcanzar mis metas.</p>
                  <div className='flex gap-3 mt-3 [&>button]:cursor-default [&>button]:transition-all'>
                    <button className='hover:text-orange-500 '>
                      <FaHtml5 size={50}/>
                    </button>
                    <button className='hover:text-blue-600 '> 
                    <FaCss3Alt size={50}/>
                    </button>
                    <button className='hover:text-yellow-300 '>
                      <IoLogoJavascript size={50}/>
                    </button>
                    <button className='hover:text-blue-500  '>
                    <FaReact size={50}/>
                    </button>
                    <button className='hover:text-blue-400'>
                    <RiTailwindCssFill size={50}/>
                    </button>
                  </div>
            </div>
            <div>
                <img src={yocoso} alt="" className='yojeje w-[400px] ' />
            </div>
        </div>
    </section>
  )
}

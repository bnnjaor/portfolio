import { RiCodeSSlashLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSunny, IoMoon  } from "react-icons/io5";
import perfil from '../img/perfil.jpeg'
import { useEffect, useState } from "react";

export default function Header() {

    const [theme, setTheme]= useState('light');
    useEffect(()=>{
        if(theme === 'dark') {
            document.querySelector('html').classList.add('dark')

        } else {
            document.querySelector('html').classList.remove('dark')
        }
    },[theme])
    const handleChangeTheme =()=>{
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    }

    const [icon,setIcon]= useState(true);
    const handleChangeIcon =()=>{
        setIcon(!icon)
        handleChangeTheme()
    }

  return (
    <header className="flex fixed py-4 px-10 top-0 w-full justify-between text-white dark:text-black items-center font-title text-xs ">
        <div className="flex flex-grow basis-0 items-center">
            <img src={perfil} alt="" className="w-[70px] rounded-full border-white dark:border-black border solid"/>
            <h2 className="font-semibold px-3 py-2">ORMEÑO BENJAMIN</h2>
            <RiCodeSSlashLine size={30}/>

        </div>

        
        <nav>
            <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold   ">
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Inicio">Inicio</a> </li>
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#SobreMi">Sobre Mi</a> </li>
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Proyectos">Proyectos</a> </li>
                <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Contacto">Contacto</a> </li>
            </ul>
        </nav>
        

        <nav className="flex flex-grow basis-0 justify-end [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li]:transition-all">
            <ul className="flex gap-[10px] text-lg [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:cursor-pointer [&>li]:transition-all">
                <li className="hover:text-red-500 "><a href="https://github.com/bnnjaor" target="_blank"><FaGithub /></a></li>
                <li className="hover:text-blue-400"><a href="https://www.linkedin.com/in/benjamin-orme%C3%B1o-167031306/" target="_blank"><FaLinkedin /></a></li>
                <li>
                    <a onClick={handleChangeIcon}>{icon ? <i className="hover:text-slate-300 "><IoSunny /></i>:<i className="hover:text-slate-300"><IoMoon /></i>}
                         
                        
                    </a>
                </li>
            </ul>
        </nav>

            
    </header>
  )
}

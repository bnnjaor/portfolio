import { RiCodeSSlashLine } from "react-icons/ri";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoSunny, IoMoon, IoMenu, IoClose } from "react-icons/io5";
import perfil from '../img/hello.png';
import { useEffect, useState, useRef } from "react";

export default function Header() {
    const [theme, setTheme] = useState('light');
    const [isBlurred, setIsBlurred] = useState(false);
    const [icon, setIcon] = useState(true);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const mobileNavRef = useRef(null); // Ref para el menú móvil

    useEffect(() => {
        const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            setTheme(userPrefersDark ? 'dark' : 'light');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.querySelector('html').classList.add('dark');
        } else {
            document.querySelector('html').classList.remove('dark');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
        setIcon(!icon);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    // Cerrar el menú móvil al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
                setIsNavOpen(false);
            }
        };

        if (isNavOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isNavOpen]);

    return (
        <header className={`flex fixed py-2 px-8 top-0 w-full justify-between text-white dark:text-black items-center font-title text-xs transition ease-in-out ${isBlurred ? 'backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
            <div className="flex flex-grow basis-0 items-center px-5 sm:px-0">
                <img src={perfil} alt="Perfil" className="w-[90px] rounded-full border-white dark:border-black border solid"/>
                <h2 className="font-semibold px-3 py-2">ORMEÑO BENJAMIN</h2>
            </div>

            <nav className="hidden lg:flex">
                <ul className="flex [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold">
                    <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#Inicio">Inicio</a></li>
                    <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#SobreMi">Sobre Mi</a></li>
                    <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#Proyectos">Proyectos</a></li>
                    <li><a className="hover:bg-slate-700 dark:hover:bg-slate-500 rounded transition-all ease-in-out duration-300" href="#Contacto">Contacto</a></li>
                </ul>
            </nav>

            <nav className="flex lg:hidden">
                <button onClick={toggleNav} className="text-xl">
                    {isNavOpen ? <IoClose className="hidden"/> : <IoMenu />}
                </button>
            </nav>

            <nav className="hidden lg:flex flex-grow basis-0 justify-end [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li]:transition-all">
                <ul className="flex gap-[10px] text-lg [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:cursor-pointer [&>li]:transition-all">
                    <li className="hover:text-red-500"><a href="https://github.com/bnnjaor" target="_blank"><FaGithub /></a></li>
                    <li className="hover:text-blue-400"><a href="https://www.linkedin.com/in/benjamin-orme%C3%B1o-167031306/" target="_blank"><FaLinkedin /></a></li>
                    <li>
                        <a onClick={handleChangeTheme}>
                            {icon ? <IoSunny className="hover:text-slate-300" /> : <IoMoon className="hover:text-slate-300" />}
                        </a>
                    </li>
                </ul>
            </nav>

            {isNavOpen && (
                <nav ref={mobileNavRef} className="lg:hidden absolute top-0 left-0 w-full bg-gray-800 bg-opacity-60 dark:bg-opacity-60 backdrop-blur-md dark:backdrop-blur-md dark:bg-gray-300 text-white dark:text-black shadow-lg py-1 ">
                    <button onClick={toggleNav} className="text-xl absolute right-9 top-10">
                        {isNavOpen ? <IoClose /> : <IoMenu />}
                    </button>
                    <ul className="flex flex-col items-center [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-semibold mt-10">
                        <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Inicio" onClick={toggleNav}>Inicio</a></li>
                        <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#SobreMi" onClick={toggleNav}>Sobre Mi</a></li>
                        <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Proyectos" onClick={toggleNav}>Proyectos</a></li>
                        <li><a className="hover:bg-slate-700 rounded transition-all ease-in-out duration-300" href="#Contacto" onClick={toggleNav}>Contacto</a></li>
                        <div className="flex gap-5 mt-3 mb-3">
                            <li>
                                <a onClick={handleChangeTheme} className="hover:text-slate-300">
                                    {icon ? <IoSunny size={20}/> : <IoMoon size={20}/>}
                                </a>
                            </li>
                            <li className="hover:text-red-500"><a href="https://github.com/bnnjaor" target="_blank"><FaGithub size={20} /></a></li>
                            <li className="hover:text-blue-400"><a href="https://www.linkedin.com/in/benjamin-orme%C3%B1o-167031306/" target="_blank"><FaLinkedin size={20} /></a></li>

                        </div>
                    </ul>
                </nav>
            )}
        </header>
    );
}

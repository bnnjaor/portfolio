import React, { useState } from 'react';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const response = await fetch('https://formspree.io/f/mwkgjrqb', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
      });
  
      if (response.ok) {
          alert('Formulario enviado');
          setForm({ name: '', email: '', message: '' });
      } else {
          alert('Hubo un problema al enviar el formulario');
      }
  };
  

    return (
        <section id="Contacto" className="flex w-[85%] flex-col items-start justify-center p-6 md:p-1 text-white dark:text-black my-32">
            <small className='text-2xl font-thin text-gray-400'>Contacto</small>
            <div className='w-full flex items-center justify-center mt-28'>

              <form onSubmit={handleSubmit} className="w-full max-w-lg text-white dark:text-black " >
                  <div className="mb-4">
                      <label className="block text-sm font-bold  mb-2" htmlFor="name">
                          Nombre
                      </label>
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2  dark:text-black border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 text-white bg-transparent"
                          required
                      />
                  </div>
                  <div className="mb-4">
                      <label className="block text-sm font-bold mb-2 " htmlFor="email">
                          Email
                      </label>
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full text-white dark:text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
                          required
                      />
                  </div>
                  <div className="mb-6">
                      <label className="block text-sm font-bold mb-2  " htmlFor="message">
                          Mensaje
                      </label>
                      <textarea
                          id="message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          className="w-full text-white dark:text-black px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:border-blue-300 bg-transparent"
                          rows="4"
                          required
                      />
                  </div>
                  <div className="flex justify-center">
                      <button type="submit" className="px-6 py-2 bg-[#179de0]/60 hover:bg-[#179de0]/100 hover:backdrop-blur-md  rounded  transition-all duration-300">
                          Enviar
                      </button>
                  </div>
              </form>
              
            </div>
            <div className='flex flex-col w-full items-center justify-center mt-12'>
              <h1 className='font-thin '>Otras Opciones...</h1>
              <ul className='flex gap-5 mt-10'>
                <li className="hover:text-blue-400 hover:scale-110 "><a href="https://www.linkedin.com/in/benjamin-orme%C3%B1o-167031306/" target="_blank"><FaLinkedin size={50}/></a></li>
                <li className="hover:text-green-500 hover:scale-110 "><a href="https://wa.me/543804989055" target="_blank"><FaWhatsapp size={50}/></a></li>


              </ul>


            </div>
        </section>
    );
}

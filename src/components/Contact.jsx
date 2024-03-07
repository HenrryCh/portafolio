import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdGetApp } from "react-icons/md";
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <div name ='contacto' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'> 
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                <p className='py-6'>Si deseas saber más sobre mí, enviame un mensaje</p>
            </div>

            <div className='flex flex-col md:flex-row'> 
                {/* Contenido estático a la izquierda */}
                <div className='md:w-1/2 px-4'>
                    <div className="flex items-center mb-4"> {/* Contenedor de fila con descripción e icono */}
                        <MdEmail className="mr-2" /> {/* Icono de email */}
                        <p>Email: henrry.chariguaman@gmail.com</p> 
                    </div>
                    <div className="flex items-center mb-4"> 
                        <MdPhone className="mr-2" /> 
                        <p >Celular: +593 985465339</p> 
                    </div>
                    <div className="flex items-center mb-4"> 
                        <MdLocationOn className="mr-2" /> 
                        <p>Ubicación: Quito - Ecuador</p> 
                    </div>
                    {/* Enlaces a redes sociales y descarga del CV */}
                    <div className="flex items-center">
                        <a href='https://github.com/HenrryCh' className="flex items-center mr-4 text-white hover:text-blue-500" target='_blank' rel="noreferrer">
                            <div className="hover:scale-110">
                                <FaGithub className="mr-2 text-3xl" />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/henrry-chariguaman-asitumbay-54ba56278' className="flex items-center mr-4 text-white hover:text-blue-500" target='_blank' rel="noreferrer">
                            <div className="hover:scale-110">
                                <FaLinkedin className="mr-2 text-3xl" />
                            </div>
                        </a>
                        <a href='/CV-0250020575.pdf' download className="flex items-center text-white hover:text-blue-500" target='_blank' rel="noreferrer">
                            <div className="hover:scale-110">
                            <MdGetApp className="mr-2 text-3xl" />
                            </div>
                        </a>
                    </div>
                </div>
                <br />
                    
                
            
                
          {/*<div className='flex justify-center items-center'>*/}
                <form action="https://getform.io/f/zbxmkmya" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Ingrese su nombre' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="text" name='email' placeholder='Ingrese su email' className=' my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <textarea name='message' placeholder='Ingrese el mensaje' rows="8" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
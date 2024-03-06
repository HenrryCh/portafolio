import React from 'react';
import Perfil from '../assets/perfil.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='inicio' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'> 
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Soy Desarrollador de Software
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                Bienvenido a mi rincón digital. Aquí encontrarás una muestra de mi dedicación al desarrollo de software, con enfoque en la innovación y la calidad en cada línea de código. 
                </p>

                <div>
                    <Link to='portafolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portafolio 
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className=''/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={Perfil} alt="my profile" className='rounded-2xl mx-auto max-w-xs w-full md:max-w-sm lg:max-w-md' />

            </div>
        </div>
    </div>
  );
};

export default Home
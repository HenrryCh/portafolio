import React from 'react'

const About = () => {
  return (
    <div name="sobre mi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Sobre Mi</p>
            </div>
            <p className='text-xl mt-20'>Soy un ingeniero de software apasionado por la tecnología, especialmente la seguridad informática. Poseo habilidades en el desarrollo de aplicaciones web y en proporcionar soporte técnico. Me enorgullece afrontar desafíos tecnológicos y aprender de cada experiencia, dedicándome a la calidad en cada producto que desarrollo. </p>
        
            <br />
            <p className='text-xl'>Mi enfoque se centra en ofrecer soluciones innovadoras y eficientes, respaldadas por un proceso continuo de aprendizaje y mejora. Estoy siempre dispuesto a investigar y dominar nuevas tecnologías para superar obstáculos y lograr resultados excepcionales.</p>
        </div>
    
    </div>
  )
}

export default About
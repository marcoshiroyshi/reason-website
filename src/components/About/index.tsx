import React from 'react'

function About() {
  return (
    <section className='h-screen grid grid-rows-2 justify-center  mt-28 lg:grid-cols-2'>
        <div className=' md:mt-3'>
            <img
                className='w-8/12 m-auto lg:w-6/12'
                src="./pessoa-triste-celular.jpg"
                alt="" />
        </div>
        <div className='px-14 text-center lg:w-8/12'>
            <h1 className='uppercase font-medium'>Voce já viu um protagonista o dia todo no celular?</h1>
            <p>"Levante os olhos, porque a vida acontece fora da tela. Cada momento perdido no celular é um capítulo não vivido da sua história. Seja o protagonista que escreve, sente e vive o agora."</p>
        </div>
    </section>
  )
}

export default About
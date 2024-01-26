import { useState, useEffect } from 'react'
import GameLogo from '../public/ez.png'
import LogoMC from '../public/LogoMC.svg'
import Tracker from '../public/tracker.mp4'
import './index.css'
import Typewriter from 'typewriter-effect/dist/core';

function App() {

  const dialogue = {
    John : "Salam Rhoya",
    tom : "Coucou bébou",
  }

  return (
    <main className='h-screen main-bg relative'>
      <div className='w-[1300px] h-full  mx-auto '>
        <div className='flex justify-center'>
          <img src={GameLogo} alt="Game Logo" className=' h-[100px] my-8'/>
        </div>
        <div className='bg-black h-[500px] w-full relative'>
          <div className='pl-5 py-6 TextWritter text-green-600 '>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
            <p>John : Salut j'éspère que tu va biens !</p>
            <p>Marc Zukerberg : Oui très bien merci ! </p>
          </div>
          <div className='absolute top-12 -right-60'>
            <video className="w-[500px]" loop autoPlay>
              <source src={Tracker} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className='pl-5 py-6 absolute  bottom-[-200px] text-green-600 -left-[150px] bg-black w-[1100px]'>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
            <p>lorem-ipsum-elsass.pdf</p>
          </div>
        </div>
      </div>
      <img src={LogoMC} alt="Logo développeurs" className='absolute bottom-10 right-10 h-10' />
    </main>
  )
}

export default App;

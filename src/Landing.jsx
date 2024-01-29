import Typewriter from 'typewriter-effect/dist/core';
import { useState, useEffect } from 'react'
import GameLogo from './assets/GameLogo.png'
import LogoMC from './assets/LogoMC.svg'
import Tracker from './assets/videos/tracker.mp4'
import './styles/index.css'
import PdfLinks from './PdfLinks';
import AudioPlayer from './AudioPlayer';

function Landing(){
    return(
        <main className='h-screen'>
        <div className='w-[1300px] h-full mx-auto '>
          <div className='flex justify-center'>
            <img src={GameLogo} alt="Game Logo" className=' h-[75px] my-8'/>
          </div>
          <div className='bg-[#000000] w-full relative bg-shadow'>
            <AudioPlayer />
            <div className='pl-5 py-6 TextWritter text-[#27ed15] '>
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
            <div className='absolute top-[5rem] -right-60 z-20'>
              <video className="w-[500px]" autoPlay muted loop>
                <source src={Tracker} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
  
            </div>
            <PdfLinks />
          </div>
        </div>
        <img src={LogoMC} alt="Logo développeurs" className='absolute bottom-10 right-10 h-10' />
        <div className='bg-white absolute h-screen w-screen top-0 right-0 hidden' id="password-container">
          <p>lol</p>
        </div>
      </main>
    )
}

export default Landing;
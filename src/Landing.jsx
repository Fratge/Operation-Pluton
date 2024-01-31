import Typewriter from 'typewriter-effect/dist/core';
import { useState, useEffect } from 'react'
import GameLogo from './assets/GameLogo.png'
import LogoMC from './assets/LogoMC.svg'
import './styles/index.css'
import PdfLinks from './PdfLinks';

import TaskBar from './TaskBar';
import Dialogue from './Dialogue';

function Landing(){
    const [pdfLinksVisible, setPdfLinksVisible] = useState(false);
    const [dialogueVisible, setDialogueVisible] = useState(false);

    const togglePdfLinks = () => {
      setPdfLinksVisible(!pdfLinksVisible);
    };


    const toggleDialogue = () => {
      setDialogueVisible(!dialogueVisible);
    };

    return(
        <main className='h-screen relative overflow-y-hidden' >
        <div className='w-[1300px] h-full mx-auto '>
          <div className='flex justify-center'>
            <img src={GameLogo} alt="Game Logo" className=' h-[75px] my-8'/>
          </div>
        </div>
        <img src={LogoMC} alt="Logo développeurs" className='absolute bottom-16 right-10 h-10' />
        <div className='bg-white absolute h-screen w-screen top-0 right-0 hidden' id="password-container">
          <p>lol</p>
        </div>
        <TaskBar togglePdfLinks={togglePdfLinks} toggleDialogue={toggleDialogue} />
        {pdfLinksVisible && <PdfLinks />}
        {dialogueVisible && <Dialogue />}
      </main>
    )
}

export default Landing;
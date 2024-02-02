import Typewriter from 'typewriter-effect/dist/core';
import { useState, useEffect } from 'react'
import GameLogo from './assets/GameLogo.png'
import LogoMC from './assets/LogoMC.svg'
import './styles/index.css'
import PdfLinks from './PdfLinks';

import TaskBar from './TaskBar';
import Dialogue from './Dialogue';
import PdfTutoriel from './PdfTutoriel';
import CartePostale from './CartePostale';
import Pdf3 from './Pdf3';

function Landing(){
    const [pdfLinksVisible, setPdfLinksVisible] = useState(false);
    const [dialogueVisible, setDialogueVisible] = useState(false);
    const [pdfTutorielVisible, setPdfTutorielVisible] = useState(false);
    const [postCardVisible, setPostCardVisible] = useState(false);
    const [pdf3Visible, setPdf3Visible] = useState(false);

    const togglePdfLinks = () => {
      setPdfLinksVisible(!pdfLinksVisible);
    };


    const toggleDialogue = () => {
      setDialogueVisible(!dialogueVisible);
    };

    const togglePdfTutoriel = () => {
      setPdfTutorielVisible(!pdfTutorielVisible);
    };

    const togglePdf3 = () => {
      setPdf3Visible(!pdf3Visible);
    };

    const togglePostCard = () => {
      setPostCardVisible(!postCardVisible);
    }
  
    return(
        <main className='h-screen relative select-none	' >
        <div className='w-[1300px] h-full mx-auto '>
          <div className='flex justify-center'>
            <img src={GameLogo} alt="Game Logo" className=' h-[75px] my-8'/>
          </div>
        </div>
        <img src={LogoMC} alt="Logo développeurs" className='absolute bottom-16 right-10 h-10' />
        <div className='bg-white absolute h-screen w-screen top-0 right-0 hidden' id="password-container">
          <p>lol</p>
        </div>
        <TaskBar togglePdfLinks={togglePdfLinks} toggleDialogue={toggleDialogue} togglePdfTutoriel={togglePdfTutoriel}/>
        {pdfLinksVisible && <PdfLinks togglePdfLinks={togglePdfLinks} togglePdfTutoriel={togglePdfTutoriel}  togglePostCard={togglePostCard} togglePdf3={togglePdf3} />}
        {dialogueVisible && <Dialogue toggleDialogue={toggleDialogue} />}
        {postCardVisible && <CartePostale togglePostCard={togglePostCard} />}
        {pdfTutorielVisible && <PdfTutoriel togglePdfTutoriel={togglePdfTutoriel}/>}
        {pdf3Visible && <Pdf3 togglePdf3={togglePdf3}/>}
      </main>
    )
}

export default Landing;
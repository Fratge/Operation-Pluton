import React, { useState } from 'react';
import Folder from './assets/folder.png';
import DialogueLogo from './assets/dialogue-logo.png';
import TutorielLogo from './assets/tutorial.png';

function TaskBar({ togglePdfLinks, toggleDialogue, togglePdfTutoriel }) {
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleMouseDown = () => {
        setButtonPressed(true);
    };

    const handleMouseUp = () => {
        setButtonPressed(false);
    };

    return (
        <div className='w-screen sticky bottom-0 bg-[#000000] h-10'>
            <div className='flex justify-center items-center h-full gap-11 flex-row'>

                <button 
                    className={`text-white h-full flex items-center px-6 gap-5 testt ${buttonPressed ? 'bg-gray-600' : 'bg-slate-400'}`} 
                    onClick={togglePdfLinks}
                >
                    <img src={Folder} className='h-5' /> Explorateur de fichiers
                </button>
                <button 
                        className={`text-white h-full flex items-center px-6 gap-5 testt ${buttonPressed ? 'bg-gray-600' : 'bg-slate-400'}`} 
                        onClick={toggleDialogue}
                    >
                        <img src={DialogueLogo} className='h-7' /> tutoriel.pdf
                </button>               
                <button 
                        className={`text-white h-full flex items-center px-6 gap-5 testt ${buttonPressed ? 'bg-gray-600' : 'bg-slate-400'}`} 
                        onClick={togglePdfTutoriel}
                    >
                        <img src={TutorielLogo} className='h-7' /> tutoriel.pdf
                </button>
                
            </div>
        </div>
    );
}

export default TaskBar;

import { useState, useEffect } from 'react'
import AudioPlayer from './AudioPlayer';
import Tracker from './assets/videos/tracker.mp4'
import CloseWindow from './assets/close_window.svg';
import MinimizeWindow from './assets/minimize_window.svg';
import RestoreWindow from './assets/restore_window.svg';

function Dialogue({toggleDialogue}){
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 150, y: -840});
    const [initialPosition, setInitialPosition] = useState({ x: 150, y: 150 });
    useEffect(() => {
        const savedPosition = localStorage.getItem('dialoguePosition');
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dialoguePosition', JSON.stringify(position));
    }, [position]);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setInitialPosition({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
    };

    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - initialPosition.x,
                y: e.clientY - initialPosition.y
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    return(
        <div className='bg-[#000000] w-[1100px] relative bg-shadow  border-2 border-solid border-[#525151]'
        style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
        <AudioPlayer />
        <div className='pl-5 py-6 TextWritter text-[#27ed15] select-none'>
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
        {/* <div className='absolute top-[5rem] -right-60 z-20'>
          <video className="w-[500px]" autoPlay muted loop>
            <source src={Tracker} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div> */}

        <div className='web-bar flex items-center justify-end gap-4  border-2 border-solid border-[#525151]' onClick={toggleDialogue}>
          <img src={MinimizeWindow} alt="" className='h-5' />
          <img src={RestoreWindow} alt="" className='h-5' />
          <img src={CloseWindow} alt="" className='h-3' />
        </div>
      </div>
    )
}

export default Dialogue;
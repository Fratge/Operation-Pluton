import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PDF1 from './assets/pdf/pdf1.pdf';
import CloseWindow from './assets/close_window.svg';
import MinimizeWindow from './assets/minimize_window.svg';
import RestoreWindow from './assets/restore_window.svg';

function PdfTutoriel({togglePdfTutoriel}) {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 150, y: 0});
    const [initialPosition, setInitialPosition] = useState({ x: 150, y: 150 });

    useEffect(() => {
        const savedPosition = localStorage.getItem('pdfTutorielPosition');
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pdfTutorielPosition', JSON.stringify(position));
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

    
    return (
        <div className=' p-5 absolute bg-black border-2 border-solid border-[#525151]'
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ left: position.x, top: position.y }}
        >
            <div className='h-[383px]  w-[565px]'>
                <embed src={PDF1} type="application/pdf" style={{ width: '100%', height: '100%' }}  />
            </div>
            <div className='web-bar flex items-center justify-end gap-4  border-2 border-solid border-[#525151]' onClick={togglePdfTutoriel}>
                <img src={MinimizeWindow} alt="" className='h-5' />
                <img src={RestoreWindow} alt="" className='h-5' />
                <img src={CloseWindow} alt="" className='h-3' />
            </div>
        </div>
    );
}

export default PdfTutoriel;

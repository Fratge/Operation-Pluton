import { useState, useEffect } from 'react'
import CartePostaleImg from './assets/Carte-Postale.png'
import CloseWindow from './assets/close_window.svg';
import MinimizeWindow from './assets/minimize_window.svg';
import RestoreWindow from './assets/restore_window.svg';

function CartePostale({togglePostCard}){
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 150, y: 0});
    const [initialPosition, setInitialPosition] = useState({ x: 150, y: 150 });

    useEffect(() => {
        const savedPosition = localStorage.getItem('cartePostalePosition');
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartePostalePosition', JSON.stringify(position));
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
        <div className="teste absolute w-fit border-2 border-solid border-[#525151] p-5 bg-black" 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ left: position.x, top: position.y }}>
            <img src={CartePostaleImg} alt="" />
            <div className='web-bar flex items-center justify-end gap-4  border-2 border-solid border-[#525151]' onClick={togglePostCard}>
                <img src={MinimizeWindow} alt="" className='h-5' />
                <img src={RestoreWindow} alt="" className='h-5' />
                <img src={CloseWindow} alt="" className='h-3' />
            </div>
        </div>
    )
}

export default CartePostale;
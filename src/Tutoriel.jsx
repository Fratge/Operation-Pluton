import React from 'react'
import { Link } from 'react-router-dom';
import PDF1 from './assets/pdf/pdf1.pdf';

function Tutoriel() {
    return (
        <div className='w-[1300px] h-full mx-auto pt-16'>
            <Link to="/" className='text-white text-4xl font-bold'>Retour</Link>

            <div style={{ width: '100%', height: '800px' }} className='pt-16'>
                <embed src={PDF1} type="application/pdf" style={{ width: '100%', height: '100%' }}  />
            </div>
        </div>
    );
}

export default Tutoriel;

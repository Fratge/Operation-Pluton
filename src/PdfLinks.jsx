import React from 'react'
import PDF1 from './assets/pdf/pdf1.pdf';

function PdfLinks() {
    return (
        <div className='pl-5 py-6 absolute bottom-[-150px]  -left-[150px] bg-black w-[1100px] text-[#27ed15]'>
            <div>
                <a href={PDF1} target='_blank'>lorem-ipsum-elsass.pdf</a>
            </div>
            <div>
                <a href={PDF1} target='_blank'>lorem-ipsum-elsass.pdf</a>
            </div>
            <div>
                <a href={PDF1} target='_blank'>lorem-ipsum-elsass.pdf</a>
            </div>
            <div>
                <a href={PDF1} target='_blank'>lorem-ipsum-elsass.pdf</a>
            </div>
            <div>
                <a href={PDF1} target='_blank'>lorem-ipsum-elsass.pdf</a>
            </div>
        </div>
    );
}

export default PdfLinks;

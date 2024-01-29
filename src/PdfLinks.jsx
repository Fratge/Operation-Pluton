import React, { useState } from 'react';
import Folder from './assets/folder.png';
import CadenasFerme from './assets/cadenas-fermer.png';
import { Link } from 'react-router-dom';

function PdfLinks() {
    const [isPasswordContainerVisible, setPasswordContainerVisible] = useState(false);

    const togglePasswordContainer = () => {
      console.log(isPasswordContainerVisible);  
      setPasswordContainerVisible(!isPasswordContainerVisible);
      
    };

    return (
        <div className='pl-5 py-6 absolute bottom-[-150px] h-[150px] -left-[150px] bg-black font-bold w-[1100px] text-[#27ed15]'>
            <div>
                <Link to="/tutoriel" className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />tutoriel-jeu.pdf</Link>
                <a onClick={togglePasswordContainer} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-mdp.pdf<img src={CadenasFerme} alt="" className='h-5' /></a>
            </div>
            {isPasswordContainerVisible && (
                <div className='bg-white absolute top-[48px] right-[704px]'>
                    <input type="password" name="" id="" />
                </div>
            )}
        </div>
    );
}

export default PdfLinks;

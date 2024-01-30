import React, { useState, useEffect  } from 'react';
import Folder from './assets/folder.png';
import CadenasFerme from './assets/cadenas-fermer.png';
import CartePostale from './assets/Carte-Postale.png';
import { Link } from 'react-router-dom';

function PdfLinks() {
    const [isPasswordContainerVisible, setPasswordContainerVisible] = useState(false);
    const [isPasswordContainerVisible2, setPasswordContainerVisible2] = useState(false);
    const [isPostcardVisible, setPostcardVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [shakeAnimation, setShakeAnimation] = useState(false);
    const [shakeAnimation2, setShakeAnimation2] = useState(false);
    const [isPasswordCorrect, setPasswordCorrect] = useState(false); // Nouvel état pour vérifier si le mot de passe est correct
    const [isPasswordCorrect2, setPasswordCorrect2] = useState(false); // Nouvel état pour vérifier si le mot de passe est correct

    const OpenPasswordContainer = () => {
        setPasswordContainerVisible(true);
        if(isPasswordCorrect){
            setPostcardVisible(true);
        }
    };

    const OpenPasswordContainer2 = () => {
        setPasswordContainerVisible2(true);
    };

    const handlePasswordSubmit = () => {
        if (password === 'password') {
            setPostcardVisible(true);
            setPasswordCorrect(true)
        } else {
            setShakeAnimation(true);
            setTimeout(() => {
                setShakeAnimation(false);
                setPassword('');
            }, 500); 
        }
    };

    const handlePasswordSubmit2 = () => {
        if (password2 === 'password2') {
            setPasswordCorrect2(true)
        } else {
            setShakeAnimation2(true);
            setTimeout(() => {
                setShakeAnimation2(false);
                setPassword2('');
            }, 500); 
        }
    };

    const hidePostcard = () => {
        setPostcardVisible(false);
    };

    return (
        <div className='pl-5 py-6 absolute bottom-[-150px] h-[150px] -left-[150px] bg-black font-bold w-[1100px] text-[#27ed15]'>
            <div>
                <Link to="/tutoriel" className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />tutoriel-jeu.pdf</Link>
                <div className='flex gap-5'>
                    <Link onClick={OpenPasswordContainer} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-mdp.pdf<img src={CadenasFerme} alt="" className='h-5' /></Link>
                    {isPasswordContainerVisible && !isPasswordCorrect && (
                        <div className='bg-black '>
                            <input
                                type="password"
                                className={`bg-[#262626] text-[#27ed15] ${shakeAnimation ? 'shake-animation' : ''}`}
                                name=""
                                id=""
                                placeholder='Mot de passe'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="Valider"
                                className="bg-[#262626] text-[#27ed15]"
                                onClick={handlePasswordSubmit}
                            />
                        </div>
                    )}
                </div>

                <div className='flex gap-5'>
                    <Link onClick={OpenPasswordContainer2} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-mdp.pdf<img src={CadenasFerme} alt="" className='h-5' /></Link>
                    {isPasswordContainerVisible2 && !isPasswordCorrect2 && (
                        <div className='bg-black '>
                            <input
                                type="password"
                                className={`bg-[#262626] text-[#27ed15] ${shakeAnimation2 ? 'shake-animation' : ''}`}
                                name=""
                                id=""
                                placeholder='Mot de passe'
                                value={password2}
                                onChange={(e) => setPassword2(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="Valider"
                                className="bg-[#262626] text-[#27ed15]"
                                onClick={handlePasswordSubmit2}
                            />
                        </div>
                    )}
                </div>
            </div>

            {isPostcardVisible && (
                <div className="teste relative">
                    <img src={CartePostale} alt="" />
                    <button onClick={hidePostcard} className='absolute top-0 right-0'> &times;</button>
                </div>
            )}
        </div>
    );
}

export default PdfLinks;

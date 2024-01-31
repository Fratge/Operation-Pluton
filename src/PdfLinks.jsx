import React, { useState, useEffect  } from 'react';
import Folder from './assets/folder.png';
import CadenasFerme from './assets/cadenas-fermer.png';
import CartePostale from './assets/Carte-Postale.png';
import { Link } from 'react-router-dom';
import CloseWindow from './assets/close_window.svg';
import MinimizeWindow from './assets/minimize_window.svg';
import RestoreWindow from './assets/restore_window.svg';

function PdfLinks() {
    const [isPasswordContainerVisible, setPasswordContainerVisible] = useState(false);
    const [isPasswordContainerVisible2, setPasswordContainerVisible2] = useState(false);
    const [isPasswordContainerVisible3, setPasswordContainerVisible3] = useState(false);
    const [isPasswordContainerVisible4, setPasswordContainerVisible4] = useState(false);
    const [isPostcardVisible, setPostcardVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [password3, setPassword3] = useState('');
    const [password4, setPassword4] = useState('');
    const [shakeAnimation, setShakeAnimation] = useState(false);
    const [shakeAnimation2, setShakeAnimation2] = useState(false);
    const [shakeAnimation3, setShakeAnimation3] = useState(false);
    const [shakeAnimation4, setShakeAnimation4] = useState(false);
    const [isPasswordCorrect, setPasswordCorrect] = useState(() => localStorage.getItem('isPasswordCorrect') === '1');
    const [isPasswordCorrect2, setPasswordCorrect2] = useState(() => localStorage.getItem('isPasswordCorrect2') === '1');
    const [isPasswordCorrect3, setPasswordCorrect3] = useState(() => localStorage.getItem('isPasswordCorrect3') === '1');
    const [isPasswordCorrect4, setPasswordCorrect4] = useState(() => localStorage.getItem('isPasswordCorrect4') === '1');

    useEffect(() => {
        localStorage.setItem('isPasswordCorrect', isPasswordCorrect ? '1' : '0');
        localStorage.setItem('isPasswordCorrect2', isPasswordCorrect2 ? '1' : '0');
        localStorage.setItem('isPasswordCorrect3', isPasswordCorrect3 ? '1' : '0');
        localStorage.setItem('isPasswordCorrect4', isPasswordCorrect4 ? '1' : '0');
    }, [isPasswordCorrect, isPasswordCorrect2]);

    const OpenPasswordContainer = () => {
        setPasswordContainerVisible(true);
        if(isPasswordCorrect){
            setPostcardVisible(true);
        }
    };

    const OpenPasswordContainer2 = () => {
        setPasswordContainerVisible2(true);
    };

    const OpenPasswordContainer3 = () => {
        setPasswordContainerVisible3(true);
    };

    const OpenPasswordContainer4 = () => {
        setPasswordContainerVisible4(true);
    };

    const handlePasswordSubmit = () => {
        localStorage.setItem('isPasswordCorrect', '1');
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
            localStorage.setItem('isPasswordCorrect2', '1');
        } else {
            setShakeAnimation2(true);
            setTimeout(() => {
                setShakeAnimation2(false);
                setPassword2('');
            }, 500); 
        }
    };

    const handlePasswordSubmit3 = () => {
        if (password3 === 'password3') {
            setPasswordCorrect3(true)
            localStorage.setItem('isPasswordCorrect3', '1');
        } else {
            setShakeAnimation3(true);
            setTimeout(() => {
                setShakeAnimation3(false);
                setPassword3('');
            }, 500); 
        }
    };

    const handlePasswordSubmit4 = () => {
        if (password4 === 'password4') {
            setPasswordCorrect4(true)
            localStorage.setItem('isPasswordCorrect4', '1');
        } else {
            setShakeAnimation4(true);
            setTimeout(() => {
                setShakeAnimation4(false);
                setPassword4('');
            }, 500); 
        }
    };
    const hidePostcard = () => {
        setPostcardVisible(false);
    };

    const localStoragePassword1 = localStorage.getItem("isPasswordCorrect");
    const localStoragePassword2 = localStorage.getItem("isPasswordCorrect2");
    const localStoragePassword3 = localStorage.getItem("isPasswordCorrect3");
    const localStoragePassword4 = localStorage.getItem("isPasswordCorrect4");
    
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 150, y: 150 });
    const [initialPosition, setInitialPosition] = useState({ x: 150, y: 150 });
    useEffect(() => {
        const savedPosition = localStorage.getItem('pdfLinksPosition');
        if (savedPosition) {
            setPosition(JSON.parse(savedPosition));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('pdfLinksPosition', JSON.stringify(position));
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
        <div className='pl-5 py-6 absolute h-[150px]  bg-black font-bold w-[1100px] text-[#27ed15] border-2 border-solid border-[#525151]' style={{ left: position.x, top: position.y }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}>
            <div className='w-[450px]'>
                <Link to="/tutoriel" className='flex items-center gap-2'><img src={Folder} alt="" className='h-5' />tutoriel-jeu.pdf</Link>
                <div className='flex gap-5'>
                    <Link onClick={OpenPasswordContainer} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-mdp.pdf{!isPasswordCorrect && (<img src={CadenasFerme} alt="" className='h-5' />)}</Link>
                    {isPasswordContainerVisible && (localStoragePassword1 !== '1') && (
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
                {(localStoragePassword1 == '1') && (
                <div className='flex gap-5'>
                    <Link onClick={OpenPasswordContainer2} to={isPasswordCorrect2 ? "/questionnaire" : "/"} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-etape2mdp.pdf{!isPasswordCorrect2 && (<img src={CadenasFerme} alt="" className='h-5' />)}</Link>
                    {isPasswordContainerVisible2 && (localStoragePassword2 !== '1') && (
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
                )}
                {(localStoragePassword2 == '1') && (
                <div className='flex gap-5'>
                    <Link onClick={OpenPasswordContainer3} to={isPasswordCorrect3 ? "/questionnaire" : "/"} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-etape4freeerre.pdf{!isPasswordCorrect3 && (<img src={CadenasFerme} alt="" className='h-5' />)}</Link>
                    {isPasswordContainerVisible3 && (localStoragePassword3 !== '1') && (
                        <div className='bg-black '>
                            <input
                                type="password"
                                className={`bg-[#262626] text-[#27ed15] ${shakeAnimation3 ? 'shake-animation' : ''}`}
                                name=""
                                id=""
                                placeholder='Mot de passe'
                                value={password3}
                                onChange={(e) => setPassword3(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="Valider"
                                className="bg-[#262626] text-[#27ed15]"
                                onClick={handlePasswordSubmit3}
                            />
                        </div>
                    )}
                </div>
                )}

                {(localStoragePassword3 == '1') && (
                <div className='flex gap-5'>
                    <Link onClick={OpenPasswordContainer4} to={isPasswordCorrect4 ? "/questionnaire" : "/"} className='flex items-center gap-2 fit-content'><img src={Folder} alt="" className='h-5' />pdf-etape5freeezezerre.pdf{!isPasswordCorrect4 && (<img src={CadenasFerme} alt="" className='h-5' />)}</Link>
                    {isPasswordContainerVisible4 && (localStoragePassword4 !== '1') && (
                        <div className='bg-black '>
                            <input
                                type="password"
                                className={`bg-[#262626] text-[#27ed15] ${shakeAnimation4 ? 'shake-animation' : ''}`}
                                name=""
                                id=""
                                placeholder='Mot de passe'
                                value={password4}
                                onChange={(e) => setPassword4(e.target.value)}
                            />
                            <input
                                type="submit"
                                value="Valider"
                                className="bg-[#262626] text-[#27ed15]"
                                onClick={handlePasswordSubmit4}
                            />
                        </div>
                    )}
                </div>
                )}
            </div>

            {isPostcardVisible && (
                <div className="teste relative">
                    <img src={CartePostale} alt="" />
                    <button onClick={hidePostcard} className='absolute top-[6px] right-[16px]'> &times;</button>
                </div>
            )}
            <div className='web-bar flex items-center justify-end gap-4 border-2 border-solid border-[#525151]' >
              <img src={MinimizeWindow} alt="" className='h-5' />
              <img src={RestoreWindow} alt="" className='h-5' />
              <img src={CloseWindow} alt="" className='h-3' />
            </div>
        </div>
    );
}

export default PdfLinks;

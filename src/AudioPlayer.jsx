import React, { useState, useRef, useEffect } from 'react';
import PlayButton from './assets/playButton.svg';
import StopButton from './assets/stopButton.svg';
import Headset from './assets/headset.svg';
import VolumeButton from './assets/volume.svg';

function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isVolumeVisible, setIsVolumeVisible] = useState(false); // Ajout de l'état pour la visibilité du volume
    const audioElementRef = useRef(null);
    const audioUrl = '../src/assets/audios/audio1.mp3';

    useEffect(() => {
        const audioElement = audioElementRef.current;

        const handleTimeUpdate = () => {
            setCurrentTime(audioElement.currentTime);
            setDuration(audioElement.duration);
        };

        audioElement.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    const togglePlay = () => {
        const audioElement = audioElementRef.current;

        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }

        setIsPlaying(!isPlaying);
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioElementRef.current.volume = newVolume;
    };

    const toggleVolume = () => {
        setIsVolumeVisible(!isVolumeVisible);
    };

    return (
        <div className='w-full h-[170px] mx-auto flex flex-col items-center justify-center bg-black'>
            <img src={Headset} alt="" className='h-16 w-16' />
            <div>
                <audio ref={audioElementRef} src={audioUrl}></audio>
                <div className='flex gap-4 items-center'>
                    <button onClick={togglePlay}>
                        {isPlaying ? <img src={StopButton} alt="" className='h-10' /> : <img src={PlayButton} alt="" className='h-10' />}
                    </button>
                    <div className="relative w-64">
                        <div
                            className="absolute top-0 left-0 h-1 bg-[#27ed15] z-10 rounded-full "
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                        <div
                            id="progression-bar"
                            className="absolute top-0 left-0 h-1 bg-gray-300 w-full pointer-events-none rounded-full"
                        ></div>
                    </div>
                    <div>
                        <img src={VolumeButton} alt="" onClick={toggleVolume} className='h-10 w-10' />
                        {isVolumeVisible && ( 
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                style={{
                                    borderRadius: '10px',
                                    background: '#27ed15',
                                    appearance: "slider-vertical"
                                }}
                                className='absolute top-[90px] right-[423px] w-[30px] z-30 h-[60px]  '
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;

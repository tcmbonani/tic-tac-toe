import { useEffect, useRef } from "react";

const useSound = (url, options) => {
    const audioRef = useRef(new Audio(url));

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = options.volume;
        return () => {
            audio.pause();  // Pause the audio when component unmounts
        };
    }, [url, options.volume]);

    const playSound = () => {
        const audio = audioRef.current;
        audio.currentTime = 0;  // Rewind to the beginning
        audio.play().catch(error => {
            console.error('Failed to play sound:', error);
        });
        setTimeout(() => {
            audio.currentTime = 1;
        }, options.timeout)
    };

    return playSound;
    
};

export default useSound;


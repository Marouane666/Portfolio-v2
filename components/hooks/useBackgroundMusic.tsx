// hooks/useBackgroundMusic.js
import { useState, useEffect, useRef } from 'react';

interface UseBackgroundMusicReturn {
    isPlaying: boolean;
    togglePlayback: () => void;
    setVolume: (volume: number) => void;
}

const useBackgroundMusic = (
    audioSrc: string,
    initialVolume: number = 0.4
): UseBackgroundMusicReturn => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    // Initialize audio
    useEffect(() => {
        // Create audio instance only once
        if (!audioRef.current) {
            audioRef.current = new Audio(audioSrc);
            audioRef.current.loop = true;
            audioRef.current.volume = initialVolume;
            
            // Cleanup on unmount
            return () => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current = null;
                }
            };
        }
    }, [audioSrc, initialVolume]);

    // Handle play/pause when state changes
    useEffect(() => {
        if (!audioRef.current) return;
        
        if (isPlaying) {
            // Handle browser autoplay restrictions
            const playPromise = audioRef.current.play();
            
            if (playPromise !== undefined) {
                playPromise.catch((error: unknown) => {
                    console.error('Playback failed:', error);
                    setIsPlaying(false);
                });
            }
        } else {
            audioRef.current.pause();
        }
        
        // Save state to localStorage
        localStorage.setItem('musicPlaying', isPlaying.toString());
    }, [isPlaying]);

    // Toggle playback
    const togglePlayback = (): void => {
        setIsPlaying(prev => !prev);
    };

    return {
        isPlaying,
        togglePlayback,
        // Optional volume control
        setVolume: (volume: number): void => {
            if (audioRef.current) {
                audioRef.current.volume = volume;
            }
        }
    };
};

export default useBackgroundMusic;
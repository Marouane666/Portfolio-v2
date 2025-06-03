// context/MusicContext.js
"use client";
import { createContext, useContext, useState, useEffect, useRef } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio
  useEffect(() => {
    audioRef.current = new Audio('/music/Nekcha.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    // Resume playback if previously playing
    const savedState = localStorage.getItem('musicPlaying');
    if (savedState === 'true') {
      setIsPlaying(true);
      audioRef.current.play().catch(e => console.log("Autoplay blocked:", e));
    }

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  // Handle play/pause state changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(e => console.log("Playback failed:", e));
    } else {
      audioRef.current.pause();
    }
    
    localStorage.setItem('musicPlaying', isPlaying.toString());
  }, [isPlaying]);

  const togglePlayback = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlayback }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
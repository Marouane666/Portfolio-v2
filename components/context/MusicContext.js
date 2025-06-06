"use client";
import { createContext, useContext, useState, useEffect, useRef } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  // Helper: Fade audio volume
  const fadeAudio = (targetVolume, duration = 1000, callback) => {
    if (!audioRef.current) return;

    const stepTime = 50;
    const steps = duration / stepTime;
    const volumeDiff = targetVolume - audioRef.current.volume;
    const stepSize = volumeDiff / steps;

    clearInterval(fadeIntervalRef.current);
    fadeIntervalRef.current = setInterval(() => {
      const currentVolume = audioRef.current.volume;
      const newVolume = currentVolume + stepSize;

      if (
        (stepSize > 0 && newVolume >= targetVolume) ||
        (stepSize < 0 && newVolume <= targetVolume)
      ) {
        audioRef.current.volume = targetVolume;
        clearInterval(fadeIntervalRef.current);
        if (callback) callback();
      } else {
        audioRef.current.volume = newVolume;
      }
    }, stepTime);
  };

  useEffect(() => {
    audioRef.current = new Audio('/music/Dreaming.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.0; // start from 0 for fade-in

    const savedState = localStorage.getItem('musicPlaying');
    if (savedState === 'true') {
      setIsPlaying(true);
      audioRef.current.play().then(() => {
        fadeAudio(0.5); // Fade in to target volume
      }).catch(e => console.log("Autoplay blocked:", e));
    }

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().then(() => {
        fadeAudio(0.5); // fade in
      }).catch(e => console.log("Playback failed:", e));
    } else {
      fadeAudio(0.0, 1000, () => {
        audioRef.current.pause(); // pause after fade-out
      });
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

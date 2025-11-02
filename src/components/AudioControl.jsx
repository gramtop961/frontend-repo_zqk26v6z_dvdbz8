import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';

export default function AudioControl() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    if (playing) {
      const playPromise = audio.play();
      if (playPromise) {
        playPromise.catch(() => {
          setPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [playing, volume]);

  return (
    <>
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2023/01/09/audio_be77a7b1f1.mp3?filename=inspiring-cinematic-orchestra-132028.mp3"
        loop
        preload="auto"
      />
      <div className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full bg-slate-900/70 backdrop-blur-md border border-slate-700/60 px-3 py-2 shadow-lg">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 transition"
          aria-label={playing ? 'Pause background music' : 'Play background music'}
        >
          {playing ? <Music size={18} /> : <VolumeX size={18} />}
        </button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-24 accent-amber-400 cursor-pointer"
          aria-label="Music volume"
        />
      </div>
    </>
  );
}

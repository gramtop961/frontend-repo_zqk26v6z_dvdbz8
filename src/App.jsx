import React from 'react';
import ScrollStory from './components/ScrollStory';
import AudioControl from './components/AudioControl';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-100 font-sans selection:bg-amber-500/30 selection:text-amber-100">
      <ScrollStory />
      <AudioControl />
    </div>
  );
}

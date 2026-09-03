import React, { useEffect, useState } from 'react';
import { Shield, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => onFinished && onFinished(), 800);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onFinished]);

  if (fadeOut && progress >= 100) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#081C15] text-[#D8F3DC] transition-opacity duration-700 opacity-0 pointer-events-none">
        {/* Fading out */}
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#081C15] text-[#D8F3DC] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Animated Brand Emblem */}
        <div className="relative mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-[#1B4332] to-[#40916C] border border-[#B9FBC0]/30 shadow-2xl shadow-[#40916C]/30 animate-pulse">
          <Shield className="w-10 h-10 text-[#B9FBC0]" />
          <Sparkles className="w-5 h-5 text-[#FFB703] absolute -top-1 -right-1 animate-bounce" />
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight text-white mb-1">
          AgriShield <span className="text-[#B9FBC0]">AI</span>
        </h1>
        <p className="text-xs text-[#74C69D] font-medium mb-6">
          Initializing 3D Ecosystem & Shader Engine...
        </p>

        {/* Progress Bar Container */}
        <div className="w-full h-2.5 bg-[#1B4332] rounded-full overflow-hidden p-0.5 border border-[#40916C]/40 mb-3 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#40916C] via-[#74C69D] to-[#B9FBC0] rounded-full transition-all duration-200 ease-out shadow-[0_0_12px_rgba(185,251,192,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between w-full text-xs text-[#74C69D]/80 font-mono">
          <span>Loading 3D Shaders</span>
          <span className="font-bold text-[#B9FBC0]">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

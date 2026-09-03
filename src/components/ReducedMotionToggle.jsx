import React from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function ReducedMotionToggle({ reducedMotion, onToggle }) {
  return (
    <button
      onClick={onToggle}
      title={reducedMotion ? 'Enable full 3D scroll animations' : 'Reduce 3D motion for accessibility'}
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 border ${
        reducedMotion
          ? 'bg-[#FFB703]/20 border-[#FFB703] text-[#FFB703] shadow-[0_0_12px_rgba(255,183,3,0.3)]'
          : 'bg-[#1B4332]/60 border-[#40916C]/40 text-[#D8F3DC] hover:border-[#B9FBC0]/60 hover:text-white'
      }`}
    >
      {reducedMotion ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
      <span className="hidden sm:inline">
        {reducedMotion ? 'Motion: Reduced' : '3D Motion: Active'}
      </span>
    </button>
  );
}

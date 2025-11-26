import React, { useCallback } from 'react';

// Extend the Window interface to include the external function expected from the script
declare global {
  interface Window {
    _vs?: () => void;
  }
}

export default function App() {
  
  const handleStart = useCallback(() => {
    // Check if the external function exists before calling it
    if (typeof window._vs === 'function') {
      window._vs();
    } else {
      console.warn("The content locker script ('_vs') has not loaded yet or is blocked.");
      alert("Please wait for the page to fully load or check your ad blocker.");
    }
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center overflow-hidden">
      {/* 
        A clean, centered button with modern styling.
        No titles or distractions as requested.
      */}
      <button
        onClick={handleStart}
        className="
          group
          relative
          px-12
          py-6
          bg-indigo-600
          hover:bg-indigo-500
          text-white
          font-bold
          text-2xl
          tracking-widest
          uppercase
          rounded-full
          shadow-[0_0_20px_rgba(79,70,229,0.5)]
          hover:shadow-[0_0_40px_rgba(79,70,229,0.7)]
          transition-all
          duration-300
          ease-out
          transform
          hover:scale-105
          active:scale-95
          focus:outline-none
          focus:ring-4
          focus:ring-indigo-500/30
        "
        aria-label="Start Content Locker"
      >
        <span className="relative z-10">Start</span>
        
        {/* Subtle ping animation effect for visual interest */}
        <span className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 group-hover:animate-ping"></span>
      </button>
    </div>
  );
}
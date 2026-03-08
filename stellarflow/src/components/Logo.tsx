import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="6" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle - organic shape */}
      <path d="M 58 12 C 82 12 92 32 92 52 C 92 74 78 88 58 88 C 38 88 24 72 24 52 C 24 32 38 12 58 12 Z" />
      
      {/* Star - hand drawn style */}
      <path d="M 58 32 L 64 46 L 80 47 L 68 58 L 72 74 L 58 65 L 44 74 L 48 58 L 36 47 L 52 46 Z" />
      
      {/* Trailing Lines (Comet tail) */}
      <path d="M 10 70 L 28 62" />
      <path d="M 5 52 L 26 52" />
      <path d="M 10 34 L 28 42" />
    </svg>
  );
};

import React from 'react';

interface CircuitLinesProps {
  className?: string;
}

const CircuitLines: React.FC<CircuitLinesProps> = ({ className = '' }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 z-0 pointer-events-none ${className}`}
      style={{ opacity: 0.05 }}
    >
      <path
        d="M0 100H1000M0 300H1000M0 500H1000M200 0V500M400 0V500M600 0V500M800 0V500"
        stroke="#2B85C6"
        strokeWidth="2"
        className="circuit-line"
      />
      <circle cx="200" cy="100" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="400" cy="100" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="600" cy="100" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="800" cy="100" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="200" cy="300" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="400" cy="300" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="600" cy="300" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="800" cy="300" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="200" cy="500" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="400" cy="500" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="600" cy="500" r="6" fill="#3293E9" className="glow-dot" />
      <circle cx="800" cy="500" r="6" fill="#3293E9" className="glow-dot" />
    </svg>
  );
};

export default CircuitLines;
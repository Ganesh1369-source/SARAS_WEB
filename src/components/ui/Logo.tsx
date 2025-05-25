import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-dark';
  
  return (
    <div className="flex items-center">
      <div className="relative w-10 h-10 mr-3">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" fill="#E0E5EC" stroke="#2B85C6" strokeWidth="1"/>
          <path d="M20 12C20 12 17 13 15 15C13 17 12.5 19 12.5 21C12.5 23 13.5 25 15 27C16.5 29 20 30 20 30" stroke="#2B85C6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M20 12C20 12 23 13 25 15C27 17 27.5 19 27.5 21C27.5 23 26.5 25 25 27C23.5 29 20 30 20 30" stroke="#101820" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="29" cy="17" r="1" fill="#3293E9" className="glow-dot"/>
          <circle cx="11" cy="17" r="1" fill="#3293E9" className="glow-dot"/>
          <circle cx="20" cy="12" r="1" fill="#3293E9" className="glow-dot"/>
          <circle cx="20" cy="30" r="1" fill="#3293E9" className="glow-dot"/>
        </svg>
      </div>
      <div>
        <p className={`font-heading font-bold text-xl leading-none ${textColor}`}>
          SARAS
        </p>
        <p className={`font-heading font-bold text-xl leading-none ${textColor}`}>
          INFOSTRATS
        </p>
        <p className={`text-xs font-medium ${variant === 'light' ? 'text-primary-300' : 'text-primary-500'}`}>
          INNOVATE. AUTOMATE. SCALE.
        </p>
      </div>
    </div>
  );
};

export default Logo;
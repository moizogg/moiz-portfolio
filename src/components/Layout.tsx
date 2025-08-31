import React from 'react';
import TechBackground from './TechBackground';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundDensity?: 'light' | 'medium' | 'heavy';
  showBackground?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '', 
  backgroundDensity = 'light',
  showBackground = true 
}) => {
  return (
    <div className={`relative ${className}`}>
      {showBackground && (
        <TechBackground 
          density={backgroundDensity} 
          className="opacity-50" 
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout;
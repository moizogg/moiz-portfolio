import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Binary, Activity, Shield, Hexagon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-green-accent/30 shadow-lg shadow-green-accent/20' 
        : 'bg-transparent'
    }`}>
      {/* Robotic Header Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Corner Tech Elements */}
        <div className="absolute top-0 left-4">
          <Hexagon className="text-green-accent/40 animate-pulse" size={16} />
        </div>
        <div className="absolute top-0 right-4">
          <Binary className="text-green-primary/40 animate-ping" size={14} />
        </div>
        
        {/* Side Scanner Lines */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-px bg-gradient-to-r from-green-accent/60 to-transparent animate-pulse" />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-px bg-gradient-to-l from-green-accent/60 to-transparent animate-pulse animation-delay-1000" />
        
        {/* Data Stream Indicators */}
        <div className="absolute top-2 left-20">
          <Activity className="text-green-accent/30 animate-ping" size={12} />
        </div>
        <div className="absolute top-2 right-20">
          <Shield className="text-green-primary/30 animate-pulse animation-delay-2000" size={12} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section with Robotic Design */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-primary to-green-accent rounded-lg animate-pulse opacity-20 scale-110" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-green-accent/50 rounded-lg p-2">
                <Cpu className="text-green-accent group-hover:rotate-180 transition-transform duration-500" size={24} />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white font-orbitron tracking-wider">
                MOIZ<span className="text-green-accent">.DATA</span>
              </h1>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-px bg-green-accent animate-pulse" />
                <span className="text-xs text-green-accent/80 font-rajdhani">SYSTEM_ONLINE</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative font-rajdhani font-medium text-gray-300 hover:text-green-accent transition-all duration-300"
              >
                <span className="relative z-10">{item.name.toUpperCase()}</span>
                <div className="absolute inset-0 bg-green-accent/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                
                {/* Robotic Corner Markers */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-l border-t border-green-accent/0 group-hover:border-green-accent/60 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 border-r border-t border-green-accent/0 group-hover:border-green-accent/60 transition-colors duration-300" />
              </a>
            ))}
            
            {/* Status Indicator */}
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-primary/20 border border-green-accent/30 rounded-full">
              <div className="w-2 h-2 bg-green-accent rounded-full animate-ping" />
              <span className="text-xs text-green-accent font-rajdhani font-medium">ACTIVE</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 bg-gradient-to-br from-gray-900 to-black border border-green-accent/50 rounded-lg"
          >
            {isOpen ? (
              <X className="text-green-accent" size={24} />
            ) : (
              <Menu className="text-green-accent" size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/98 backdrop-blur-xl border-b border-green-accent/30">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-gray-300 hover:text-green-accent transition-colors font-rajdhani font-medium"
                >
                  {item.name.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
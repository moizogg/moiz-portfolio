
import React from 'react';
import { Heart, Cpu, Binary, Code, Database, Terminal } from 'lucide-react';

const Footer = () => {
  const techIcons = [
    { icon: <Code size={12} />, delay: '0s' },
    { icon: <Database size={10} />, delay: '1s' },
    { icon: <Terminal size={11} />, delay: '2s' },
    { icon: <Cpu size={12} />, delay: '3s' },
    { icon: <Binary size={10} />, delay: '4s' }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-dark-bg to-slate-900 border-t border-green-accent/30 overflow-hidden">
      {/* Holographic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Elements */}
        {techIcons.map((item, index) => (
          <div
            key={index}
            className="absolute text-green-accent/20 animate-float-gentle"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + (index % 2) * 20}%`,
              animationDelay: item.delay,
              animationDuration: '8s'
            }}
          >
            {item.icon}
          </div>
        ))}
        
        {/* Neural Grid Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-accent/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-primary/20 to-transparent animate-pulse animation-delay-1000" />
        
        {/* Quantum Scan Lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-accent/30 to-transparent animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-primary to-green-accent rounded-lg animate-pulse opacity-30" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-green-accent/50 rounded-lg p-2">
                  <Cpu className="text-green-accent animate-pulse" size={20} />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-orbitron">
                  MOIZ<span className="text-green-accent">.DATA</span>
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-px bg-green-accent animate-pulse" />
                  <span className="text-xs text-green-accent/80 font-rajdhani">AI_POWERED</span>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-rajdhani max-w-xs">
              Exploring the frontiers of AI & Machine Learning through advanced data science solutions.
            </p>
          </div>

          {/* Neural Links */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-accent/30 rounded-full animate-neural-pulse" />
              <h4 className="font-semibold text-green-accent font-orbitron text-sm tracking-wider">NEURAL_LINKS</h4>
            </div>
            <div className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center space-x-2 text-gray-400 hover:text-green-accent transition-colors duration-300"
                >
                  <div className="w-1 h-1 bg-green-accent/50 rounded-full group-hover:animate-ping" />
                  <span className="text-sm font-rajdhani font-medium">{item.toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-accent/30 rounded-full animate-neural-pulse" />
              <h4 className="font-semibold text-green-accent font-orbitron text-sm tracking-wider">SYSTEM_STATUS</h4>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-green-primary/10 border border-green-accent/20 rounded-lg">
                <span className="text-xs text-gray-300 font-rajdhani">AI_SYSTEMS</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
                  <span className="text-xs text-green-accent font-orbitron">ONLINE</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 bg-green-primary/10 border border-green-accent/20 rounded-lg">
                <span className="text-xs text-gray-300 font-rajdhani">LEARNING_MODE</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                  <span className="text-xs text-green-accent font-orbitron">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-green-accent/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="font-rajdhani">Made with</span>
              <Heart className="text-green-accent animate-pulse" size={14} />
              <span className="font-rajdhani">by Moiz</span>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center space-x-3 p-2 bg-green-primary/10 border border-green-accent/30 rounded-full">
              <div className="flex items-center space-x-1">
                <Binary className="text-green-accent animate-pulse" size={12} />
                <span className="text-xs text-green-accent font-orbitron">REACT</span>
              </div>
              <div className="w-px h-4 bg-green-accent/30" />
              <div className="flex items-center space-x-1">
                <Cpu className="text-green-accent animate-neural-pulse" size={12} />
                <span className="text-xs text-green-accent font-orbitron">AI_DRIVEN</span>
              </div>
            </div>
          </div>
        </div>

        {/* System Signature */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-primary/20 to-green-accent/10 border border-green-accent/30 rounded-full">
            <div className="w-2 h-2 bg-green-accent rounded-full animate-ping" />
            <span className="text-xs text-green-accent font-orbitron tracking-wider">NEURAL_NETWORK_SIGNATURE_VERIFIED</span>
            <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

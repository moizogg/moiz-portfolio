
import React from 'react';
import { ChevronDown, Code, Database, Brain, Cpu, GitBranch, Terminal, MapPin, Calendar, GraduationCap, Zap, Star, Trophy, TrendingUp, Layers, Shield, Hexagon, Activity, Binary, Microchip, Network, Bot } from 'lucide-react';
import TechBackground from './TechBackground';

const HeroSection = () => {
  const techIcons = [
    { icon: <Code size={20} />, delay: '0s' },
    { icon: <Database size={18} />, delay: '0.5s' },
    { icon: <Brain size={22} />, delay: '1s' },
    { icon: <Cpu size={19} />, delay: '1.5s' },
    { icon: <GitBranch size={17} />, delay: '2s' },
    { icon: <Terminal size={21} />, delay: '2.5s' },
  ];

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Tech Background */}
      <TechBackground density="medium" />

      {/* Optimized Animated Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-beam animate-beam-1 left-1/4 top-0" />
        <div className="hero-beam animate-beam-2 right-1/3 top-0" />
        <div className="hero-beam animate-beam-3 left-2/3 top-0" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20">
        {/* Left Side - Text Content */}
        <div className="lg:col-span-7 text-left order-2 lg:order-1">
          <div className="animate-fade-up">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-green-primary/20 border border-green-accent/30 rounded-full text-green-accent text-sm font-medium mb-4">
                🚀 Available for Internships
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight font-orbitron">
              Hello, I'm{' '}
              <span className="text-gradient">Moiz</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-accent mb-6 font-semibold font-rajdhani">
              Aspiring Data Scientist
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-lg">
              17-year-old student exploring the frontiers of AI & Machine Learning, 
              transforming data into intelligent solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-neural group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="relative z-10">View My Projects</span>
              </button>
              <button className="btn-quantum" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Terminal size={18} />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Next-Gen Robotic Profile Interface */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          {/* Holographic Display Container */}
          <div className="floating-card animate-float-gentle max-w-md mx-auto lg:mx-0">
            
            {/* Enhanced Holographic Projections */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-primary/30 via-green-accent/15 to-green-secondary/10 rounded-2xl blur-2xl transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tl from-green-accent/20 via-transparent to-green-primary/15 rounded-2xl blur-xl transform -rotate-2 scale-102" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-transparent to-plasma-purple/5 rounded-2xl blur-lg transform rotate-1 scale-103" />
            
            {/* Quantum Energy Rings */}
            <div className="absolute -inset-4">
              <div className="absolute inset-0 border border-green-accent/20 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
              <div className="absolute inset-2 border border-green-primary/15 rounded-full animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }} />
            </div>
            
            {/* Main Interface Terminal */}
            <div className="relative bg-gradient-to-br from-gray-900/95 via-black/90 to-slate-800/85 backdrop-blur-xl border border-green-accent/40 rounded-2xl overflow-hidden font-rajdhani shadow-xl shadow-green-accent/30">
              
              {/* Terminal Header Bar */}
              <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/15 border-b border-green-accent/30 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500/80 rounded-full" />
                      <div className="w-2 h-2 bg-yellow-500/80 rounded-full" />
                      <div className="w-2 h-2 bg-green-accent rounded-full" />
                    </div>
                    <span className="text-green-accent font-orbitron text-xs tracking-wider hidden sm:inline">PROFILE_INTERFACE</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
                    <span className="text-xs text-green-accent/80 font-orbitron hidden sm:inline">SECURE</span>
                  </div>
                </div>
              </div>

              {/* Main Interface Body */}
              <div className="p-4">
                {/* Identity Matrix */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {/* Profile Avatar Section */}
                  <div className="col-span-1">
                    <div className="relative">
                      <div className="relative bg-gradient-to-br from-gray-800/80 to-black/70 border border-green-accent/40 rounded-xl p-2">
                        <div className="relative">
                          <img 
                            src="/lovable-uploads/99948437-1369-4d00-8abb-7e075e4bff53.png" 
                            alt="Moiz Amjad - Data Science Student" 
                            className="w-full h-16 sm:h-20 rounded-lg object-cover border border-green-accent/20"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable={false}
                            onDragStart={(e) => e.preventDefault()}
                            style={{ userSelect: 'none' }}
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute top-1 right-1 w-2 h-2 bg-green-accent rounded-full animate-pulse" />
                        </div>
                        <div className="mt-2 text-center">
                          <div className="text-green-accent text-xs font-orbitron">VERIFIED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Identity Data */}
                  <div className="col-span-2 space-y-2">
                    <div className="bg-green-primary/10 border border-green-accent/30 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-green-accent text-xs font-orbitron">USER_IDENTITY</span>
                        <Star className="text-green-accent" size={12} />
                      </div>
                      <h3 className="text-white font-bold text-lg font-orbitron">MOIZ AMJAD</h3>
                      <p className="text-green-accent text-xs font-rajdhani">AI & DATA SCIENCE</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-green-primary/5 border border-green-accent/20 rounded-lg p-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="text-green-accent" size={12} />
                          <div>
                            <div className="text-green-accent text-xs font-orbitron">AGE</div>
                            <div className="text-white text-sm font-bold font-rajdhani">17</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-primary/5 border border-green-accent/20 rounded-lg p-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="text-green-accent" size={12} />
                          <div>
                            <div className="text-green-accent text-xs font-orbitron">LOC</div>
                            <div className="text-white text-sm font-bold font-rajdhani">MULTAN</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Status Grid */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  <div className="bg-green-primary/10 border border-green-accent/30 rounded-lg p-2 text-center">
                    <Trophy className="text-green-accent mx-auto mb-1" size={16} />
                    <div className="text-green-accent text-sm font-bold font-orbitron">6+</div>
                    <div className="text-gray-400 text-xs font-rajdhani">PROJ</div>
                  </div>
                  
                  <div className="bg-green-primary/10 border border-green-accent/30 rounded-lg p-2 text-center">
                    <TrendingUp className="text-green-accent mx-auto mb-1" size={16} />
                    <div className="text-green-accent text-sm font-bold font-orbitron">85%</div>
                    <div className="text-gray-400 text-xs font-rajdhani">LEARN</div>
                  </div>
                  
                  <div className="bg-green-primary/10 border border-green-accent/30 rounded-lg p-2 text-center">
                    <GraduationCap className="text-green-accent mx-auto mb-1" size={16} />
                    <div className="text-green-accent text-sm font-bold font-orbitron">2Y+</div>
                    <div className="text-gray-400 text-xs font-rajdhani">EXPER</div>
                  </div>
                  
                  <div className="bg-green-primary/10 border border-green-accent/30 rounded-lg p-2 text-center">
                    <Zap className="text-green-accent mx-auto mb-1" size={16} />
                    <div className="text-green-accent text-sm font-bold font-orbitron">MAX</div>
                    <div className="text-gray-400 text-xs font-rajdhani">ENRGY</div>
                  </div>
                </div>

                  {/* Tech Arsenal */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Cpu className="text-green-accent" size={14} />
                      <h4 className="text-green-accent font-orbitron text-xs">TECH_ARSENAL</h4>
                      <div className="flex-1 h-px bg-gradient-to-r from-green-accent/50 to-transparent" />
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-neural-pulse" />
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      {[
                        { name: 'PYTHON', icon: <Code size={10} />, level: 90 },
                        { name: 'AI/ML', icon: <Brain size={10} />, level: 75 },
                        { name: 'REACT', icon: <Layers size={10} />, level: 85 },
                        { name: 'JAVA', icon: <Terminal size={10} />, level: 70 },
                        { name: 'DATA', icon: <Database size={10} />, level: 88 },
                        { name: 'CLOUD', icon: <Cpu size={10} />, level: 80 }
                      ].map((tech) => (
                        <div key={tech.name} className="bg-green-primary/15 border border-green-accent/40 rounded-md p-2 group hover:bg-green-accent/10 transition-colors">
                          <div className="flex items-center space-x-1 mb-1">
                            <div className="text-green-accent group-hover:scale-110 transition-transform">
                              {tech.icon}
                            </div>
                            <span className="text-xs text-white font-orbitron">{tech.name}</span>
                          </div>
                          <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-green-primary to-green-accent rounded-full relative"
                              style={{ width: `${tech.level}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                {/* Neural Network Status */}
                <div className="bg-gradient-to-r from-green-primary/20 to-green-accent/10 border border-green-accent/40 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      <Brain className="text-green-accent" size={14} />
                      <span className="text-green-accent text-xs font-orbitron">AI_STATUS</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-accent rounded-full animate-pulse" />
                      <span className="text-green-accent text-xs font-orbitron">ACTIVE</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400 font-rajdhani">AI_FOCUS</span>
                      <span className="text-green-accent font-orbitron">92%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-primary to-green-accent rounded-full w-[92%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gradient-to-r from-green-primary/10 to-green-accent/5 border-t border-green-accent/30 p-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-green-accent font-orbitron">ONLINE</span>
                  <div className="flex items-center space-x-1">
                    <Shield className="text-green-accent" size={10} />
                    <span className="text-green-accent font-orbitron">SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Interface Elements - Enhanced */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-green-accent/30 to-cyber-blue/20 rounded-full animate-pulse blur-sm" />
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-primary/20 to-plasma-purple/15 rounded-full animate-neural-pulse blur-md" />
          <div className="absolute top-8 right-8 w-2 h-2 bg-green-accent rounded-full animate-ping" />
          <div className="absolute bottom-12 left-4 w-1 h-1 bg-cyber-blue rounded-full animate-pulse" />
          
          {/* Data Stream Lines */}
          <div className="absolute top-0 right-0 w-px h-20 bg-gradient-to-b from-green-accent/40 to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-20 h-px bg-gradient-to-r from-green-primary/40 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative">
            <ChevronDown className="text-green-accent" size={28} />
            <div className="absolute -inset-2 border border-green-accent/30 rounded-full animate-ping" />
          </div>
          <span className="text-gray-400 text-xs font-orbitron tracking-wider">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

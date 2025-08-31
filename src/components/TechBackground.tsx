import React, { useMemo } from 'react';
import { 
  Code, Database, Brain, Cpu, GitBranch, Terminal, 
  Wifi, Server, Monitor, Smartphone, Zap, Globe,
  HardDrive, Binary, Microchip, Network, Shield,
  Bot, Layers, Hexagon, Activity, Command
} from 'lucide-react';

interface TechBackgroundProps {
  density?: 'light' | 'medium' | 'heavy';
  className?: string;
}

const TechBackground: React.FC<TechBackgroundProps> = ({ 
  density = 'medium',
  className = ''
}) => {
  const allTechIcons = useMemo(() => [
    Code, Database, Brain, Cpu, GitBranch, Terminal,
    Wifi, Server, Monitor, Smartphone, Zap, Globe,
    HardDrive, Binary, Microchip, Network, Shield,
    Bot, Layers, Hexagon, Activity, Command
  ], []);

  const densityConfig = useMemo(() => ({
    light: { count: 8, sizes: [16, 18], opacities: [0.1, 0.15] },
    medium: { count: 12, sizes: [14, 16], opacities: [0.15, 0.2] },
    heavy: { count: 18, sizes: [12, 14, 16], opacities: [0.2, 0.25] }
  }), []);

  const config = densityConfig[density];

  const techElements = useMemo(() => {
    return Array.from({ length: config.count }).map((_, index) => {
      const IconComponent = allTechIcons[Math.floor(Math.random() * allTechIcons.length)];
      const size = config.sizes[Math.floor(Math.random() * config.sizes.length)];
      const opacity = config.opacities[Math.floor(Math.random() * config.opacities.length)];
      const animationDuration = 8 + Math.random() * 6; // 8-14 seconds
      const animationDelay = Math.random() * 8; // 0-8 seconds delay
      
      return {
        id: index,
        Icon: IconComponent,
        size,
        opacity,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration,
        animationDelay,
        direction: Math.random() > 0.5 ? 'normal' : 'reverse'
      };
    });
  }, [config, allTechIcons]);

  // Reduced floating particles for performance
  const particles = useMemo(() => 
    Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: Math.random() * 6 + 6
    }))
  , []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Enhanced Floating Tech Icons */}
      {techElements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-gentle text-green-accent"
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            opacity: element.opacity,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.animationDelay}s`,
            animationDirection: element.direction
          }}
        >
          <element.Icon size={element.size} />
        </div>
      ))}

      {/* Floating Tech Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-green-accent/30 rounded-full animate-float-gentle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}

      {/* Enhanced Quantum Scanning System */}
      <div className="absolute inset-0">
        {/* Horizontal quantum streams */}
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-accent/40 to-transparent animate-pulse"
          style={{
            top: '20%',
            animationDelay: '0s',
            animationDuration: '5s'
          }}
        />
        <div 
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent animate-pulse"
          style={{
            top: '60%',
            animationDelay: '2.5s',
            animationDuration: '6s'
          }}
        />
        
        {/* Vertical neural links */}
        <div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-primary/30 to-transparent animate-pulse"
          style={{
            left: '30%',
            animationDelay: '1s',
            animationDuration: '7s'
          }}
        />
        <div 
          className="absolute h-full w-px bg-gradient-to-b from-transparent via-plasma-purple/20 to-transparent animate-pulse"
          style={{
            left: '70%',
            animationDelay: '3.5s',
            animationDuration: '8s'
          }}
        />
      </div>

      {/* Reduced Energy Network for performance */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-accent/30 rounded-full animate-neural-pulse"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Optimized Floating Tech Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 3 }).map((_, i) => {
          const shapes = [Hexagon, Bot, Network];
          const Shape = shapes[i];
          return (
            <div
              key={i}
              className="absolute animate-float-gentle"
              style={{
                left: `${25 + i * 25}%`,
                top: `${25 + i * 25}%`,
                animationDelay: `${i * 3}s`,
                animationDuration: '8s'
              }}
            >
              <Shape className="text-green-accent/15 animate-pulse" size={14} />
            </div>
          )
        })}
      </div>

      {/* Optimized Data Streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-12 bg-gradient-to-b from-green-accent/25 via-green-primary/15 to-transparent animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${Math.random() * 60 + 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechBackground;
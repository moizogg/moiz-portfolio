import React, { useMemo, useRef, useEffect } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection Observer for performance optimization
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const allTechIcons = useMemo(() => [
    Code, Database, Brain, Cpu, GitBranch, Terminal,
    Wifi, Server, Monitor, Smartphone, Zap, Globe,
    HardDrive, Binary, Microchip, Network, Shield,
    Bot, Layers, Hexagon, Activity, Command
  ], []);

  // Reduced density for better performance
  const densityConfig = useMemo(() => ({
    light: { count: 4, sizes: [16], opacities: [0.1] },
    medium: { count: 6, sizes: [14, 16], opacities: [0.15] },
    heavy: { count: 8, sizes: [12, 14], opacities: [0.2] }
  }), []);

  const config = densityConfig[density];

  const techElements = useMemo(() => {
    if (prefersReducedMotion) return [];
    
    return Array.from({ length: config.count }).map((_, index) => {
      const IconComponent = allTechIcons[Math.floor(Math.random() * allTechIcons.length)];
      const size = config.sizes[Math.floor(Math.random() * config.sizes.length)];
      const opacity = config.opacities[Math.floor(Math.random() * config.opacities.length)];
      const animationDuration = 12 + Math.random() * 8; // Slower animations for better performance
      const animationDelay = Math.random() * 10;
      
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
  }, [config, allTechIcons, prefersReducedMotion]);

  // Minimal particles for performance
  const particles = useMemo(() => {
    if (prefersReducedMotion) return [];
    
    return Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 8 + 8 // Slower for performance
    }));
  }, [prefersReducedMotion]);

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        willChange: isVisible && !prefersReducedMotion ? 'transform, opacity' : 'auto',
        contain: 'layout style paint'
      }}
    >
      {/* Performance-optimized animations only when visible and motion allowed */}
      {isVisible && !prefersReducedMotion && (
        <>
          {/* Reduced Floating Tech Icons */}
          {techElements.map((element) => (
            <div
              key={element.id}
              className="absolute text-green-accent"
              style={{
                left: `${element.left}%`,
                top: `${element.top}%`,
                opacity: element.opacity,
                animation: `float-gentle ${element.animationDuration}s ease-in-out infinite`,
                animationDelay: `${element.animationDelay}s`,
                animationDirection: element.direction,
                willChange: 'transform',
                transform: 'translateZ(0)', // Force GPU acceleration
                backfaceVisibility: 'hidden'
              }}
            >
              <element.Icon size={element.size} />
            </div>
          ))}

          {/* Minimal Tech Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute bg-green-accent/20 rounded-full"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animation: `float-gentle ${particle.duration}s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                willChange: 'transform',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden'
              }}
            />
          ))}

          {/* Simplified Quantum Scanning System */}
          <div className="absolute inset-0" style={{ contain: 'layout style' }}>
            {/* Only 2 scanning lines for performance */}
            <div 
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-accent/30 to-transparent"
              style={{
                top: '25%',
                animation: 'pulse 6s ease-in-out infinite',
                willChange: 'opacity'
              }}
            />
            <div 
              className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-primary/20 to-transparent"
              style={{
                left: '50%',
                animation: 'pulse 8s ease-in-out infinite 2s',
                willChange: 'opacity'
              }}
            />
          </div>

          {/* Minimal Energy Network */}
          <div className="absolute inset-0">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 bg-green-accent/20 rounded-full"
                style={{
                  left: `${30 + i * 40}%`,
                  top: `${40 + i * 20}%`,
                  animation: `neural-pulse 4s ease-in-out infinite ${i * 2}s`,
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)'
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Static fallback elements for reduced motion */}
      {(prefersReducedMotion || !isVisible) && (
        <div className="absolute inset-0">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-green-accent/20 to-transparent top-1/4" />
          <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-primary/15 to-transparent left-1/2" />
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-accent/15 rounded-full"
              style={{
                left: `${25 + i * 25}%`,
                top: `${30 + i * 20}%`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TechBackground;
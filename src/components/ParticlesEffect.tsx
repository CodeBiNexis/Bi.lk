import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ParticlesEffect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: HTMLDivElement[] = [];
    const numParticles = 150;
    const colors = ['#A330E5', '#FFFFFF', '#520F68'];

    // Create particles
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background-color: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        opacity: ${Math.random() * 0.5 + 0.3};
        pointer-events: none;
        mix-blend-mode: screen;
        filter: blur(1px);
      `;
      containerRef.current.appendChild(particle);
      particles.push(particle);

      // Initial random position
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      // Continuous floating animation
      animateParticle(particle);
    }

    function animateParticle(particle: HTMLDivElement) {
      gsap.to(particle, {
        duration: 'random(3, 5)',
        x: `random(${-20}, ${window.innerWidth + 20})`,
        y: `random(${-20}, ${window.innerHeight + 20})`,
        ease: 'none',
        repeat: -1,
        yoyo: true,
        delay: Math.random() * -5,
      });
    }

    // Handle window resize
    const handleResize = () => {
      particles.forEach(particle => {
        gsap.to(particle, {
          duration: 0.1,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        });
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      particles.forEach(particle => {
        gsap.killTweensOf(particle);
        particle.remove();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

export default ParticlesEffect; 
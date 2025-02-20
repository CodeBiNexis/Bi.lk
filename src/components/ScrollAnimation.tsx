import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  useEffect(() => {
    // Hero section animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power4.out',
    });

    // Animate sections when they come into view
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      const cards = section.querySelectorAll('.animate-card');
      const texts = section.querySelectorAll('.animate-text');
      
      // Cards animation
      gsap.from(cards, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      });

      // Texts animation
      gsap.from(texts, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return null;
};

export default ScrollAnimation; 
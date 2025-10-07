import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP scroll animations
 * Provides reusable animation functions for different components
 */
export const useGSAPAnimations = () => {
  const elementsRef = useRef([]);

  // Add element to animation queue
  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  // Fade in animation from bottom
  const fadeInUp = (element, delay = 0, duration = 1) => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  // Slide in from left
  const slideInLeft = (element, delay = 0, duration = 1) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: -100
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  // Slide in from right
  const slideInRight = (element, delay = 0, duration = 1) => {
    gsap.fromTo(element,
      {
        opacity: 0,
        x: 100
      },
      {
        opacity: 1,
        x: 0,
        duration: duration,
        delay: delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  // Stagger animation for multiple elements
  const staggerAnimation = (elements, delay = 0.2) => {
    gsap.fromTo(elements,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: delay,
        scrollTrigger: {
          trigger: elements[0],
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  // Parallax effect
  const parallaxEffect = (element, speed = 0.5) => {
    gsap.to(element, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  };

  // Scale on scroll
  const scaleOnScroll = (element, fromScale = 0.8, toScale = 1) => {
    gsap.fromTo(element,
      {
        scale: fromScale
      },
      {
        scale: toScale,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  };

  // Cleanup function
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    addToRefs,
    fadeInUp,
    slideInLeft,
    slideInRight,
    staggerAnimation,
    parallaxEffect,
    scaleOnScroll
  };
};

export default useGSAPAnimations;
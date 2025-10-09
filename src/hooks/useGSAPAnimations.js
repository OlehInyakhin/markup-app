import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const elementsRef = useRef([]);

  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const getAnimationConfig = config => {
    if (prefersReducedMotion()) {
      return {
        ...config,
        duration: 0.1,
        ease: 'none',
      };
    }
    return config;
  };

  const addToRefs = el => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  const fadeInUp = (element, delay = 0, duration = 1) => {
    const config = getAnimationConfig({
      opacity: 1,
      y: 0,
      scale: 1,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : 50,
        scale: prefersReducedMotion() ? 1 : 0.95,
      },
      config
    );
  };

  const slideInLeft = (element, delay = 0, duration = 1) => {
    const config = getAnimationConfig({
      opacity: 1,
      x: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: prefersReducedMotion() ? 0 : -100,
      },
      config
    );
  };

  const slideInRight = (element, delay = 0, duration = 1) => {
    const config = getAnimationConfig({
      opacity: 1,
      x: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: prefersReducedMotion() ? 0 : 100,
      },
      config
    );
  };

  const slideInDown = (element, delay = 0, duration = 1) => {
    const config = getAnimationConfig({
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : -100,
      },
      config
    );
  };

  const staggerAnimation = useCallback((elements, delay = 0.2, startDelay = 0) => {
    const config = getAnimationConfig({
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      stagger: prefersReducedMotion() ? 0 : delay,
      delay: startDelay,
      scrollTrigger: {
        trigger: elements[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : 30,
      },
      config
    );
  }, []);

  const parallaxEffect = (element, speed = 0.5) => {
    // Skip parallax effect if user prefers reduced motion
    if (prefersReducedMotion()) {
      return;
    }

    gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  };

  const scaleOnScroll = useCallback((element, fromScale = 0.8, toScale = 1, delay = 0) => {
    const config = getAnimationConfig({
      scale: toScale,
      duration: 1,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      element,
      {
        scale: prefersReducedMotion() ? toScale : fromScale,
      },
      config
    );
  }, []);

  // Fade in from top animation
  const fadeInDown = (element, delay = 0, duration = 1) => {
    const config = getAnimationConfig({
      opacity: 1,
      y: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: prefersReducedMotion() ? 0 : -50,
      },
      config
    );
  };

  // Typewriter effect for text elements
  const typewriterEffect = (element, duration = 2, delay = 0) => {
    if (!element || !element.textContent) return;

    const text = element.textContent;
    const chars = text.split('');
    element.innerHTML = '';

    // Check for reduced motion preference
    if (prefersReducedMotion()) {
      element.innerHTML = text;
      return;
    }

    gsap.to(
      {},
      {
        duration: duration,
        delay: delay,
        ease: 'none',
        onUpdate: function () {
          const progress = this.progress();
          const currentIndex = Math.floor(progress * chars.length);
          element.innerHTML =
            chars.slice(0, currentIndex).join('') +
            (progress < 1 ? '<span class="typewriter-cursor">|</span>' : '');
        },
        onComplete: function () {
          element.innerHTML = text;
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  };

  // Fade out animation
  const fadeOut = (element, delay = 0, duration = 0.8) => {
    const config = getAnimationConfig({
      opacity: 0,
      duration: duration,
      delay: delay,
      ease: 'power2.out',
    });

    gsap.to(element, config);
  };

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    addToRefs,
    fadeInUp,
    fadeInDown,
    fadeOut,
    slideInLeft,
    slideInRight,
    slideInDown,
    staggerAnimation,
    parallaxEffect,
    scaleOnScroll,
    typewriterEffect,
  };
};

export default useGSAPAnimations;

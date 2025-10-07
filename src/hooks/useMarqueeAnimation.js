import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Custom hook for creating smooth marquee animations
 * @param {number} duration - Animation duration in seconds (default: 30)
 * @returns {Object} - Object containing ref for the scrolling element
 */
const useMarqueeAnimation = (duration = 30) => {
  const scrollingRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const scrollingElement = scrollingRef.current;
    if (!scrollingElement) return;

    // Create infinite marquee animation
    // We divide by 2 because content is duplicated for seamless loop
    const scrollWidth = scrollingElement.scrollWidth / 2;
    
    // Animation moves from right to left with seamless cycling
    animationRef.current = gsap.fromTo(
      scrollingElement,
      {
        x: 0
      },
      {
        x: -scrollWidth,
        duration: duration,
        ease: 'none',
        repeat: -1
      }
    );

    // Cleanup function to kill animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [duration]);

  return { scrollingRef };
};

export default useMarqueeAnimation;
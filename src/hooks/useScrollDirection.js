import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll direction and visibility state for header
 * @param {number} threshold - Scroll threshold to trigger hide/show (default: window.innerHeight / 2)
 * @returns {object} - { scrollDirection, isVisible, scrollY }
 */
export const useScrollDirection = (threshold = null) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Set default threshold to half of viewport height
  const scrollThreshold =
    threshold || (typeof window !== 'undefined' ? window.innerHeight / 2 : 400);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update scroll position
      setScrollY(currentScrollY);

      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setScrollDirection('down');

        // Hide header if scrolled past threshold
        if (currentScrollY > scrollThreshold) {
          setIsVisible(false);
        }
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setScrollDirection('up');

        // Always show header when scrolling up
        setIsVisible(true);
      }

      // Show header when at top of page
      if (currentScrollY <= 0) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY, scrollThreshold]);

  return {
    scrollDirection,
    isVisible,
    scrollY,
  };
};

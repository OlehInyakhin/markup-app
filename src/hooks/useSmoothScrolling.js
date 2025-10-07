import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

/**
 * Custom hook for smooth scrolling functionality
 * Provides smooth navigation between sections
 */
export const useSmoothScrolling = () => {

  // Smooth scroll to element
  const scrollToElement = (target, duration = 1.5) => {
    gsap.to(window, {
      duration: duration,
      scrollTo: {
        y: target,
        offsetY: 80 // Account for fixed header
      },
      ease: "power2.inOut"
    });
  };

  // Smooth scroll to top
  const scrollToTop = (duration = 1) => {
    gsap.to(window, {
      duration: duration,
      scrollTo: { y: 0 },
      ease: "power2.inOut"
    });
  };

  // Add smooth scrolling to navigation links
  const initSmoothNavigation = () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      const handleClick = (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          scrollToElement(targetElement);
        }
      };
      
      link.addEventListener('click', handleClick);
      
      // Return cleanup function for this specific link
      return () => {
        link.removeEventListener('click', handleClick);
      };
    });
  };

  // Add scroll indicator animation
  const animateScrollIndicator = () => {
    const scrollIndicators = document.querySelectorAll('.scroll-indicator');
    
    scrollIndicators.forEach(indicator => {
      const handleClick = () => {
        // Scroll to next section
        const currentSection = indicator.closest('section');
        const nextSection = currentSection?.nextElementSibling;
        
        if (nextSection) {
          scrollToElement(nextSection);
        }
      };
      
      indicator.addEventListener('click', handleClick);
      
      // Add pulsing animation to scroll line
      const scrollLine = indicator.querySelector('.scroll-line');
      if (scrollLine) {
        gsap.to(scrollLine, {
          scaleY: 1.5,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }
      
      return () => {
        indicator.removeEventListener('click', handleClick);
      };
    });
  };

  // Initialize smooth scrolling behaviors
  useEffect(() => {
    const cleanupFunctions = [];
    
    // Initialize navigation
    cleanupFunctions.push(initSmoothNavigation());
    
    // Initialize scroll indicators
    cleanupFunctions.push(animateScrollIndicator());
    
    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => {
        if (typeof cleanup === 'function') cleanup();
      });
    };
  }, []);

  return {
    scrollToElement,
    scrollToTop,
    initSmoothNavigation,
    animateScrollIndicator
  };
};

export default useSmoothScrolling;
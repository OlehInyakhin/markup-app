import { gsap } from 'gsap';

/**
 * Custom hook for interactive GSAP animations
 * Handles hover effects, button interactions, and micro-animations
 */
export const useInteractiveAnimations = () => {

  // Button hover animation
  const addButtonHover = (buttonElement) => {
    if (!buttonElement) return;

    const handleMouseEnter = () => {
      gsap.to(buttonElement, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(buttonElement, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    buttonElement.addEventListener('mouseenter', handleMouseEnter);
    buttonElement.addEventListener('mouseleave', handleMouseLeave);

    // Return cleanup function
    return () => {
      buttonElement.removeEventListener('mouseenter', handleMouseEnter);
      buttonElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  // Card hover animation
  const addCardHover = (cardElement) => {
    if (!cardElement) return;

    const handleMouseEnter = () => {
      gsap.to(cardElement, {
        y: -10,
        scale: 1.02,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cardElement, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    };

    cardElement.addEventListener('mouseenter', handleMouseEnter);
    cardElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cardElement.removeEventListener('mouseenter', handleMouseEnter);
      cardElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  // Logo hover animation
  const addLogoHover = (logoElement) => {
    if (!logoElement) return;

    const handleMouseEnter = () => {
      gsap.to(logoElement, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(logoElement, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    logoElement.addEventListener('mouseenter', handleMouseEnter);
    logoElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      logoElement.removeEventListener('mouseenter', handleMouseEnter);
      logoElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  // Play button pulse animation
  const addPlayButtonPulse = (playButtonElement) => {
    if (!playButtonElement) return;

    // Create pulsing effect
    const pulseAnimation = gsap.to(playButtonElement, {
      scale: 1.1,
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });

    const handleMouseEnter = () => {
      pulseAnimation.pause();
      gsap.to(playButtonElement, {
        scale: 1.2,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(playButtonElement, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        onComplete: () => pulseAnimation.resume()
      });
    };

    playButtonElement.addEventListener('mouseenter', handleMouseEnter);
    playButtonElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      pulseAnimation.kill();
      playButtonElement.removeEventListener('mouseenter', handleMouseEnter);
      playButtonElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  // Magnetic effect for elements
  const addMagneticEffect = (element, strength = 0.3) => {
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  return {
    addButtonHover,
    addCardHover,
    addLogoHover,
    addPlayButtonPulse,
    addMagneticEffect
  };
};

export default useInteractiveAnimations;
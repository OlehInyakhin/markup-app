import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLogosAnimation = sectionRef => {
  const trackRefs = useRef([]);
  const animationsRef = useRef([]);
  const scrollTriggerRef = useRef(null);

  const addTrackRef = el => {
    if (el && !trackRefs.current.includes(el)) {
      trackRefs.current.push(el);
    }
  };

  const initializeTrackAnimation = (
    trackElement,
    direction = 'left',
    duration = 60
  ) => {
    if (!trackElement) return;

    const trackWidth = trackElement.scrollWidth;
    const moveDistance = trackWidth / 2;

    let animation;

    if (direction === 'left') {
      animation = gsap.to(trackElement, {
        x: -moveDistance,
        duration: duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % moveDistance),
        },
      });
    } else {
      gsap.set(trackElement, { x: -moveDistance });
      animation = gsap.to(trackElement, {
        x: 0,
        duration: duration,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % moveDistance),
        },
      });
    }

    animationsRef.current.push(animation);
    return animation;
  };

  const initializeAllAnimations = () => {
    trackRefs.current.forEach((track, index) => {
      if (track) {
        const direction = index === 0 ? 'left' : 'right';
        initializeTrackAnimation(track, direction, 60);
      }
    });

    // Setup ScrollTrigger for viewport visibility
    if (sectionRef?.current) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => resumeAnimations(),
        onLeave: () => pauseAnimations(),
        onEnterBack: () => resumeAnimations(),
        onLeaveBack: () => pauseAnimations(),
      });
    }
  };

  const pauseAnimations = () => {
    animationsRef.current.forEach(animation => {
      if (animation) {
        animation.pause();
      }
    });
  };

  const resumeAnimations = () => {
    animationsRef.current.forEach(animation => {
      if (animation) {
        animation.resume();
      }
    });
  };

  const addHoverPause = (trackElement, trackIndex) => {
    if (!trackElement) return;

    const handleMouseEnter = () => {
      const animation = animationsRef.current[trackIndex];
      if (animation) {
        animation.pause();
      }
    };

    const handleMouseLeave = () => {
      const animation = animationsRef.current[trackIndex];
      if (animation) {
        animation.resume();
      }
    };

    trackElement.addEventListener('mouseenter', handleMouseEnter);
    trackElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      trackElement.removeEventListener('mouseenter', handleMouseEnter);
      trackElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  useEffect(() => {
    return () => {
      // Clean up animations
      animationsRef.current.forEach(animation => {
        if (animation) {
          animation.kill();
        }
      });

      // Clean up ScrollTrigger
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      animationsRef.current = [];
      trackRefs.current = [];
    };
  }, []);

  return {
    addTrackRef,
    initializeTrackAnimation,
    initializeAllAnimations,
    pauseAnimations,
    resumeAnimations,
    addHoverPause,
  };
};

export default useLogosAnimation;

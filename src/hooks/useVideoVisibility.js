import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useVideoVisibility = (options = {}) => {
  const { trigger = null, start = 'top bottom', end = 'bottom top' } = options;

  const videoRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const sectionRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current && videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn('Video play failed:', error);
        });
      }
    }
  };

  const pauseVideo = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    const triggerElement = trigger || sectionRef.current;

    if (!triggerElement) {
      console.warn('useVideoVisibility: No trigger element found');
      return;
    }

    // Create ScrollTrigger for viewport visibility
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: triggerElement,
      start: start,
      end: end,
      onEnter: () => {
        playVideo();
      },
      onLeave: () => {
        pauseVideo();
      },
      onEnterBack: () => {
        playVideo();
      },
      onLeaveBack: () => {
        pauseVideo();
      },
    });

    // Cleanup function
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [trigger, start, end]);

  return {
    videoRef,
    sectionRef,
    playVideo,
    pauseVideo,
  };
};

export default useVideoVisibility;

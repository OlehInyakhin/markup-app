import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useMarqueeAnimation = (duration = 30, sectionRef = null) => {
  const scrollingRef = useRef(null);
  const animationRef = useRef(null);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const scrollingElement = scrollingRef.current;
    if (!scrollingElement) return;

    const scrollWidth = scrollingElement.scrollWidth / 2;
    animationRef.current = gsap.fromTo(
      scrollingElement,
      {
        x: 0,
      },
      {
        x: -scrollWidth,
        duration: duration,
        ease: 'none',
        repeat: -1,
      }
    );

    if (sectionRef?.current) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: () => {
          if (animationRef.current) {
            animationRef.current.resume();
          }
        },
        onLeave: () => {
          if (animationRef.current) {
            animationRef.current.pause();
          }
        },
        onEnterBack: () => {
          if (animationRef.current) {
            animationRef.current.resume();
          }
        },
        onLeaveBack: () => {
          if (animationRef.current) {
            animationRef.current.pause();
          }
        },
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, [duration, sectionRef]);

  return { scrollingRef };
};

export default useMarqueeAnimation;

import { useEffect, useRef } from 'react';
import './Logos.css';

import { useLogosAnimation } from '@/hooks/useLogosAnimation';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

import { firstRowLogos, secondRowLogos } from './constants';

export const Logos = () => {
  const sectionRef = useRef(null);
  const { addTrackRef, initializeAllAnimations, addHoverPause } =
    useLogosAnimation(sectionRef);
  const { fadeInUp } = useGSAPAnimations();
  const firstTrackRef = useRef(null);
  const secondTrackRef = useRef(null);

  useEffect(() => {
    if (firstTrackRef.current && secondTrackRef.current) {
      const logosContainer = document.querySelector('.logos__container');
      if (logosContainer) {
        fadeInUp(logosContainer, 0, 1);
      }

      setTimeout(() => {
        addTrackRef(firstTrackRef.current);
        addTrackRef(secondTrackRef.current);
        initializeAllAnimations();
      }, 500);

      const cleanupFirst = addHoverPause(firstTrackRef.current, 0);
      const cleanupSecond = addHoverPause(secondTrackRef.current, 1);

      return () => {
        if (cleanupFirst) cleanupFirst();
        if (cleanupSecond) cleanupSecond();
      };
    }
  }, [addTrackRef, initializeAllAnimations, addHoverPause, fadeInUp]);

  return (
    <section className="logos" ref={sectionRef}>
      <div className="logos__container">
        <div className="logos__row logos__row--first">
          <div className="logos__track" ref={firstTrackRef}>
            {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
              <div key={`first-${index}`} className="logos__item">
                <img src={logo.src} alt={logo.alt} className="logos__image" />
              </div>
            ))}
          </div>
        </div>

        <div className="logos__row logos__row--second">
          <div className="logos__track" ref={secondTrackRef}>
            {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div key={`second-${index}`} className="logos__item">
                <img src={logo.src} alt={logo.alt} className="logos__image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

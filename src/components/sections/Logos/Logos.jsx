import { useEffect, useRef } from 'react';
import './Logos.css';

import { useLogosAnimation } from '@/hooks/useLogosAnimation';

import { firstRowLogos, secondRowLogos } from './constants';

export const Logos = () => {
  const { addTrackRef, initializeAllAnimations, addHoverPause } = useLogosAnimation();
  const firstTrackRef = useRef(null);
  const secondTrackRef = useRef(null);

  useEffect(() => {
    if (firstTrackRef.current && secondTrackRef.current) {
      addTrackRef(firstTrackRef.current);
      addTrackRef(secondTrackRef.current);
      initializeAllAnimations();
      
      const cleanupFirst = addHoverPause(firstTrackRef.current, 0);
      const cleanupSecond = addHoverPause(secondTrackRef.current, 1);
      
      return () => {
        if (cleanupFirst) cleanupFirst();
        if (cleanupSecond) cleanupSecond();
      };
    }
  }, [addTrackRef, initializeAllAnimations, addHoverPause]);



  return (
    <section className="logos">
      <div className="logos__container">

        <div className="logos__row logos__row--first">
          <div className="logos__track" ref={firstTrackRef}>

            {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
              <div key={`first-${index}`} className="logos__item">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="logos__image"
                />
              </div>
            ))}
          </div>
        </div>


        <div className="logos__row logos__row--second">
          <div className="logos__track" ref={secondTrackRef}>

            {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div key={`second-${index}`} className="logos__item">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="logos__image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
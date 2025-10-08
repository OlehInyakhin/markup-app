import { useEffect, useRef } from 'react';
import './Ventures.css';
import ArrowLeft from '@/assets/images/icons/arrow-left.svg?react';
import bgVideo from '@/assets/media/hybrid.mp4';
import useVideoVisibility from '@/hooks/useVideoVisibility';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

export const Ventures = () => {
  const { videoRef, sectionRef } = useVideoVisibility();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);
  const { fadeInUp, slideInLeft } = useGSAPAnimations();

  useEffect(() => {
    if (titleRef.current) {
      fadeInUp(titleRef.current, 0.3, 1);
    }

    if (descriptionRef.current) {
      fadeInUp(descriptionRef.current, 0.3, 1);
    }

    if (ctaRef.current) {
      slideInLeft(ctaRef.current, 0.4, 1);
    }
  }, [fadeInUp, slideInLeft]);

  return (
    <section className="ventures" ref={sectionRef}>
      <div className="ventures__video-container">
        <video
          className="ventures__video"
          ref={videoRef}
          muted
          playsInline
          loop
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container">
        <div className="ventures__content">
          <h2 className="ventures__title" ref={titleRef}>
            venture Lab for Bold Ideas{' '}
          </h2>
          <p className="ventures__description" ref={descriptionRef}>
            חדשנות, יצירתיות וחשיבה פורצת דרך <br />
            שלוקחת מיזמים חדשים עד לקצה
          </p>
          <a href="#" className="ventures__cta-button" ref={ctaRef}>
            בואו נדבר
            <ArrowLeft className="ventures__cta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

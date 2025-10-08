import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import logoSrc from '@/assets/images/logos/spin-logo.svg';
import './Preloader.css';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            fadeOut();
          }, 500);
          return 100;
        }
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, []);

  const fadeOut = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete?.();
      },
    });

    tl.to('.preloader', {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.inOut',
    });
  };

  useEffect(() => {
    if (progress > 0) {
      gsap.to('.preloader__progress-fill', {
        width: `${progress}%`,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div className="preloader">
      <div className="preloader__content">
        <div className="preloader__logo">
          <img className="preloader__logo-image" src={logoSrc} alt="Logo" />
        </div>

        <div className="preloader__progress">
          <div className="preloader__progress-bar">
            <div className="preloader__progress-fill"></div>
          </div>
          <div className="preloader__progress-text">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

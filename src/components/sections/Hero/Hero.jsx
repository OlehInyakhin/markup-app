import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import './Hero.css';

export const Hero = () => {
  const { t } = useTranslation('hero');
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const { fadeInUp } = useGSAPAnimations();

  useEffect(() => {
    if (titleRef.current && subtitleRef.current) {
      fadeInUp(titleRef.current, 1, 0.2);
      fadeInUp(subtitleRef.current, 1, 0.6);
    }
  }, [fadeInUp]);

  return (
    <section className="hero">
      <div className="container">
        <h1 ref={titleRef} className="hero__title">
          {t('title')}
        </h1>
        <p ref={subtitleRef} className="hero__subtitle">
          {t('subtitle')}
        </p>
      </div>
    </section>
  );
};

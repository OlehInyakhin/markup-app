import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './TextAndLogo.css';
import spinLogo from '@/assets/images/logos/spin-logo.svg';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

export const TextAndLogo = () => {
  const { t } = useTranslation('textAndLogo');
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const { fadeInUp, slideInLeft } = useGSAPAnimations();

  useEffect(() => {
    if (logoRef.current) {
      slideInLeft(logoRef.current, 0.2, 1);
    }

    if (titleRef.current) {
      fadeInUp(titleRef.current, 0.2, 1);
    }

    if (descriptionRef.current) {
      fadeInUp(descriptionRef.current, 0.4, 1);
    }
  }, [fadeInUp, slideInLeft]);
  return (
    <section className="text-and-logo" id="text-and-logo">
      <div className="container text-and-logo__container">
        <div className="text-and-logo__logo-column">
          <div className="text-and-logo__logo-container">
            <img
              ref={logoRef}
              src={spinLogo}
              alt={t('logoAlt')}
              className="text-and-logo__logo"
            />
          </div>
        </div>
        <div className="text-and-logo__text-column">
          <h2 ref={titleRef} className="text-and-logo__title">
            {t('title')}
          </h2>
          <p ref={descriptionRef} className="text-and-logo__description">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
};

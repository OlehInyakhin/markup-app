import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './CallToAction.css';
import spinLogo from '@/assets/images/logos/spin-logo.svg';
import useMarqueeAnimation from '@/hooks/useMarqueeAnimation';

export const CallToAction = () => {
  const {
    i18n: { dir },
    t,
  } = useTranslation('callToAction');
  const sectionRef = useRef(null);
  const { scrollingRef } = useMarqueeAnimation(50, sectionRef, dir());

  return (
    <section className="call-to-action" ref={sectionRef}>
      <div className="call-to-action__container">
        <div className="call-to-action__scrolling-wrapper">
          <div className="call-to-action__scrolling-content" ref={scrollingRef}>
            <div key="cta-item-1" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-2" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-3" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-4" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-5" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-6" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-7" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-8" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-9" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
            <div key="cta-item-10" className="call-to-action__item">
              <img
                src={spinLogo}
                alt="Spin Logo"
                className="call-to-action__logo"
                loading="lazy"
              />
              <p className="call-to-action__text">{t('text')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

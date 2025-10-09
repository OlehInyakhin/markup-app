import { useState, useEffect, useRef } from 'react';
import Arrow from '@/assets/images/icons/arrow-right-white.svg?react';
import footerLogoSrc from '@/assets/images/logos/footer-logo.svg';
import logoSrc from '@/assets/images/logos/logo.svg';
import imageSrc from '@/assets/images/footer-image.png';
import Instagram from '@/assets/images/icons/instagram.svg?react';
import LinkedIn from '@/assets/images/icons/linkedin.svg?react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import './Footer.css';

export const Footer = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const footerRef = useRef(null);
  const { staggerAnimation, fadeInUp, scaleOnScroll } = useGSAPAnimations();

  const handleSubscribe = e => {
    e.preventDefault();
    console.log('Subscribing email:', e.target[0].value);
    setIsSubscribed(true);

    setTimeout(() => {
      setIsSubscribed(false);
      e.target.reset();
    }, 3000);
  };

  useEffect(() => {
    if (footerRef.current) {
      const columns = footerRef.current.querySelectorAll('.footer__column');
      staggerAnimation(columns, 0.3);

      const brandSection = footerRef.current.querySelector('.footer__brand');
      if (brandSection) {
        fadeInUp(brandSection, 0.3, 0.8);
      }

      const footerImage = footerRef.current.querySelector('.footer__image');
      if (footerImage) {
        scaleOnScroll(footerImage, 0.8, 1, 0.5);
      }
    }
  }, [staggerAnimation, fadeInUp, scaleOnScroll]);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <img
                src={footerLogoSrc}
                alt="Footer logo"
                className="footer__logo"
              />
              <form
                className="footer__subscription-form"
                onSubmit={handleSubscribe}
              >
                <h3 className="footer__form-title">מייל אחד שווה אלף תובנות</h3>
                <div className="footer__input-group">
                  <input
                    type="email"
                    placeholder="כתובת המייל שלך"
                    className="footer__email-input"
                    required
                  />
                  <button type="submit" className="footer__subscribe-btn">
                    <Arrow />
                  </button>
                </div>
                {isSubscribed && (
                  <div className="footer__success-message">
                    ✓ Subscribed successfully!
                  </div>
                )}
              </form>
            </div>

            <div className="footer__links">
              <div className="footer__column">
                <h4 className="footer__title">חברה</h4>
                <ul className="footer__list">
                  <li>
                    <a href="#" className="footer__link">
                      עלינו
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      עבודות
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      קריירה
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      בלוג
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      צור קשר
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      English
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__column">
                <h4 className="footer__title">מחלקות</h4>
                <ul className="footer__list">
                  <li>
                    <a href="#" className="footer__link">
                      פיתוח
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      עיצוב ואסטרטגיה
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      שיווק דיגיטלי
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link">
                      UX/UI
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__column footer__column--socials">
                <h4 className="footer__title">סושיאל</h4>
                <ul className="footer__list">
                  <li>
                    <a href="#" className="footer__link" title="עמוד האינטסגרם">
                      <span className="footer__link-text">אינטסגרם</span>
                      <Instagram className="footer__link-icon" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer__link" title="עמוד הלינקדין">
                      <span className="footer__link-text">לינקדין</span>
                      <LinkedIn className="footer__link-icon" />
                    </a>
                  </li>
                </ul>
                <img
                  src={footerLogoSrc}
                  alt="Footer logo"
                  className="footer__logo"
                  width={43}
                  height={20}
                />
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <img
              src={imageSrc}
              width={1720}
              height={392}
              alt="HYBRID"
              className="footer__image"
              loading="lazy"
            />
            <div className="footer__copyright">
              <p>
                &copy; {new Date().getFullYear()} SPIN. All rights reserved.
              </p>
              <div className="footer__legal">
                <a href="#" className="footer__link">
                  מדיניות
                </a>
                <a href="#" className="footer__link">
                  פרטיות
                </a>
              </div>
            </div>
            <a href="/" className="footer__bottom-logo">
              <img width={130} height={16} src={logoSrc} alt="HYBRID" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

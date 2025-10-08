import { useEffect, useRef } from 'react';
import './TextAndLogo.css';
import spinLogo from '@/assets/images/logos/spin-logo.svg';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

export const TextAndLogo = () => {
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
    <section className="text-and-logo">
      <div className="container text-and-logo__container">
        <div className="text-and-logo__logo-column">
          <div className="text-and-logo__logo-container">
            <img
              ref={logoRef}
              src={spinLogo}
              alt="SPIN Logo"
              className="text-and-logo__logo"
            />
          </div>
        </div>
        <div className="text-and-logo__text-column">
          <h2 ref={titleRef} className="text-and-logo__title">
            בעולם דינמי, אינטראקטיבי והיפראקטיבי - נדרשת גישה משולבת
          </h2>
          <p ref={descriptionRef} className="text-and-logo__description">
            מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. צש
            בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. הועניב
            היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף.
            זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק.
          </p>
        </div>
      </div>
    </section>
  );
};

import './TextAndLogo.css';
import spinLogo from '@/assets/images/logos/spin-logo.svg';

export const TextAndLogo = () => {
  return (
    <section className="text-and-logo">
      <div className="container text-and-logo__container">
        <div className="text-and-logo__logo-column">
          <div className="text-and-logo__logo-container">
            <img 
              src={spinLogo} 
              alt="SPIN Logo" 
              className="text-and-logo__logo"
            />
          </div>
        </div>
        <div className="text-and-logo__text-column">
          <h2 className="text-and-logo__title">
            בעולם דינמי, אינטראקטיבי והיפראקטיבי - נדרשת גישה משולבת
          </h2>
          <p className="text-and-logo__description">
            מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק.
          </p>
        </div>
      </div>
    </section>
  );
};
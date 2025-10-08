import { useEffect, useRef } from 'react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import './Hero.css';

export const Hero = () => {
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
          לא משנה איך יראה העתיד, נדאג שתהיו חלק ממנו
        </h1>
        <p ref={subtitleRef} className="hero__subtitle">
          שילבנו יכולות אסטרטגיה, טכנולוגיה, עיצוב ושיווק שישמרו עליכם ייחודיים
          ונחשקים. כך שגם אם יהיה כאן שלטון מכונות, נדאג שהן ישתוקקו לעבוד אתכם.
        </p>
      </div>
    </section>
  );
};

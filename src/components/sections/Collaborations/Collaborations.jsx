import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './Collaborations.css';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

import { collaborations } from './constants';

export const Collaborations = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const { fadeInUp, staggerAnimation } = useGSAPAnimations();

  useEffect(() => {
    if (titleRef.current) {
      fadeInUp(titleRef.current, 0, 1);
    }

    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const slides = sectionRef.current.querySelectorAll(
          '.collaborations__slide'
        );
        if (slides.length > 0) {
          staggerAnimation(slides, 0.2, 0.5);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [fadeInUp, staggerAnimation]);

  return (
    <section className="collaborations" ref={sectionRef}>
      <div className="container collaborations__container">
        <header className="collaborations__header">
          <h1 className="collaborations__title" ref={titleRef}>
            שיתופי פעולה בולטים
          </h1>
        </header>

        <div className="collaborations__gallery-container">
          <Swiper
            className="collaborations__swiper"
            modules={[FreeMode, Scrollbar]}
            spaceBetween={30}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.25,
            }}
            scrollbar={{
              hide: false,
              draggable: true,
            }}
            breakpoints={{
              1024: {
                spaceBetween: 96,
              },
            }}
          >
            {collaborations.map(collaboration => (
              <SwiperSlide
                key={collaboration.id}
                className="collaborations__slide"
              >
                <div className="collaborations__card">
                  <div className="collaborations__card-logo">
                    <img
                      src={collaboration.logo}
                      alt={collaboration.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="collaborations__card-content">
                    <h3 className="collaborations__card-title">
                      <a
                        href={collaboration.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {collaboration.name}
                      </a>
                    </h3>
                    <p className="collaborations__card-description">
                      {collaboration.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

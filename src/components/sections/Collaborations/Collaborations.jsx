import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './Collaborations.css';

import { collaborations } from './constants';

export const Collaborations = () => {



  return (
    <section className="collaborations">
      <div className="container collaborations__container">
        <header className="collaborations__header">
          <h1 className="collaborations__title">שיתופי פעולה בולטים</h1>
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
              momentumVelocityRatio: 0.25
            }}
            scrollbar={{
              hide: false,
              draggable: true
            }}
            breakpoints={{
              1024: {
                spaceBetween: 96
              },
            }}
          >
            {collaborations.map((collab) => (
              <SwiperSlide key={collab.id} className="collaborations__slide">
                <div className="collaborations__card">
                  <div className="collaborations__card-logo">
                    <img 
                      src={collab.logo} 
                      alt={collab.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="collaborations__card-content">
                    <h3 className="collaborations__card-title">
                      <a href={collab.url} target="_blank" rel="noopener noreferrer">
                        {collab.name}
                      </a>
                    </h3>
                    <p className="collaborations__card-description">
                      {collab.description}
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
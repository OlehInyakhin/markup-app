import React from 'react';
import './Follow.css';

import Image1 from '@/assets/images/follow/follow-image-01.jpg';
import Image2 from '@/assets/images/follow/follow-image-02.jpg';
import Image3 from '@/assets/images/follow/follow-image-03.jpg';
import Image4 from '@/assets/images/follow/follow-image-04.jpg';
import Image5 from '@/assets/images/follow/follow-image-05.jpg';
import Linkedin from '@/assets/images/icons/linkedin.svg?react';
import Instagram from '@/assets/images/icons/instagram.svg?react';

export const Follow = () => {
  return (
    <section className="follow">
      <div className="container follow__container">
        <header className="follow__header">
          <div className="follow__title-wrapper">
            <h2 className="follow__title">תהיו חברים</h2>
          </div>
          <div className="follow__actions">
            <a href="#" className="follow__link" _target="_blank" title="Follow us on Instagram">
              <Instagram className="follow__icon" />
            </a>
            <a href="#" className="follow__link" _target="_blank" title="Follow us on LinkedIn">
              <Linkedin className="follow__icon" />
            </a>
          </div>
        </header>

        <div className="follow__gallery">
          <div className="follow__image follow__image--1">
            <img src={Image1} alt="Gallery image 1" />
          </div>
          <div className="follow__image follow__image--2">
            <img src={Image2} alt="Gallery image 2" />
          </div>
          <div className="follow__image follow__image--3">
            <img src={Image3} alt="Gallery image 3" />
          </div>
          <div className="follow__image follow__image--4">
            <img src={Image4} alt="Gallery image 4" />
          </div>
          <div className="follow__image follow__image--5">
            <img src={Image5} alt="Gallery image 5" />
          </div>
        </div>
      </div>
    </section>
  );
};
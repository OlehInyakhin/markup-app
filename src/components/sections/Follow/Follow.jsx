import { useEffect, useRef } from 'react';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import './Follow.css';

import Image1 from '@/assets/images/follow/follow-image-01.webp';
import Image2 from '@/assets/images/follow/follow-image-02.webp';
import Image3 from '@/assets/images/follow/follow-image-03.webp';
import Image4 from '@/assets/images/follow/follow-image-04.webp';
import Image5 from '@/assets/images/follow/follow-image-05.webp';
import Linkedin from '@/assets/images/icons/linkedin.svg?react';
import Instagram from '@/assets/images/icons/instagram.svg?react';

export const Follow = () => {
  const titleRef = useRef(null);
  const linksRef = useRef([]);
  const imagesRef = useRef([]);
  const { fadeInUp, staggerAnimation } = useGSAPAnimations();

  useEffect(() => {
    if (titleRef.current) {
      fadeInUp(titleRef.current, 0, 1);
    }

    if (linksRef.current.length > 0) {
      staggerAnimation(linksRef.current, 0.2, 0.3);
    }

    if (imagesRef.current.length > 0) {
      staggerAnimation(imagesRef.current, 0.3, 0.3);
    }
  }, [fadeInUp, staggerAnimation]);

  const addToLinksRef = el => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const addToImagesRef = el => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  return (
    <section className="follow">
      <div className="container follow__container">
        <header className="follow__header">
          <div className="follow__title-wrapper">
            <h2 ref={titleRef} className="follow__title">
              תהיו חברים
            </h2>
          </div>
          <div className="follow__actions">
            <a
              ref={addToLinksRef}
              href="#"
              className="follow__link"
              _target="_blank"
              title="Follow us on Instagram"
            >
              <Instagram className="follow__icon" />
            </a>
            <a
              ref={addToLinksRef}
              href="#"
              className="follow__link"
              _target="_blank"
              title="Follow us on LinkedIn"
            >
              <Linkedin className="follow__icon" />
            </a>
          </div>
        </header>

        <div className="follow__gallery">
          <div ref={addToImagesRef} className="follow__image follow__image--1">
            <img src={Image1} alt="Gallery image 1" />
          </div>
          <div ref={addToImagesRef} className="follow__image follow__image--2">
            <img src={Image2} alt="Gallery image 2" />
          </div>
          <div ref={addToImagesRef} className="follow__image follow__image--3">
            <img src={Image3} alt="Gallery image 3" />
          </div>
          <div ref={addToImagesRef} className="follow__image follow__image--4">
            <img src={Image4} alt="Gallery image 4" />
          </div>
          <div ref={addToImagesRef} className="follow__image follow__image--5">
            <img src={Image5} alt="Gallery image 5" />
          </div>
        </div>
      </div>
    </section>
  );
};

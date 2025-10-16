import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './Blog.css';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import { ArrowFollower } from '@/components/common/ArrowFollower/ArrowFollower.jsx';
import { useTranslation } from 'react-i18next';

import { blogPosts } from './constants';

export const Blog = () => {
  const titleRef = useRef(null);
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const { fadeInUp, staggerAnimation } = useGSAPAnimations();
  const {
    i18n: { dir },
    t,
  } = useTranslation('blog');
  const direction = dir() ?? 'rtl';

  useEffect(() => {
    if (titleRef.current) {
      fadeInUp(titleRef.current, 0, 1);
    }

    const timer = setTimeout(() => {
      if (sectionRef.current) {
        const slides = sectionRef.current.querySelectorAll('.blog__slide');
        if (slides.length > 0) {
          staggerAnimation(slides, 0.2, 0.5);
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [fadeInUp, staggerAnimation]);

  return (
    <section className="blog" ref={sectionRef} id="blog">
      <div className="container blog__container">
        <header className="blog__header">
          <h1 className="blog__title" ref={titleRef}>
            {t('title')}
          </h1>
        </header>

        <div className="blog__gallery-container" ref={galleryRef}>
          <ArrowFollower
            containerRef={galleryRef}
            hideOnHoverSelectors={['.blog__card-content']}
          />
          <Swiper
            key={`blog-swiper-${direction}`}
            modules={[FreeMode, Scrollbar]}
            spaceBetween={25}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.5,
            }}
            scrollbar={{
              hide: false,
              draggable: true,
              dragSize: 'auto',
            }}
            className="blog__swiper"
            dir={direction}
          >
            {blogPosts.map(post => (
              <SwiperSlide key={post.id} className="blog__slide">
                <div className="blog__card">
                  <div className="blog__card-image">
                    <img
                      src={post.image}
                      alt={t(post.titleKey)}
                      width={480}
                      height={640}
                      loading="lazy"
                    />
                  </div>
                  <div className="blog__card-content">
                    <h3 className="blog__card-title">
                      <a
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t(post.titleKey)}
                      </a>
                    </h3>
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

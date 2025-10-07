import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import './Blog.css';

import { blogPosts } from './constants';

export const Blog = () => {

  return (
    <section className="blog">
      <div className="container blog__container">
        <header className="blog__header">
          <h1 className="blog__title">קצת חומר למחשבה</h1>
        </header>

        <div className="blog__gallery-container">
          <Swiper
            modules={[FreeMode, Scrollbar]}
            spaceBetween={25}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: false,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.5
            }}
            scrollbar={{
              hide: false,
              draggable: true,
              dragSize: 'auto'
            }}
            className="blog__swiper"
          >
            {blogPosts.map((post) => (
              <SwiperSlide key={post.id} className="blog__slide">
                <div className="blog__card">
                  <div className="blog__card-image">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="blog__card-content">
                    <h3 className="blog__card-title">
                      <a href={post.url} target="_blank" rel="noopener noreferrer">
                        {post.title}
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
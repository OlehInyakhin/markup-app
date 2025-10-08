import { useState, useEffect, useRef } from 'react';
import './Services.css';
import {
  services,
  SERVICE_LINK_MOBILE_HEIGHT,
  arrowIcon,
  videoFile,
} from './constants';
import useVideoVisibility from '@/hooks/useVideoVisibility';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';

export const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { videoRef, sectionRef } = useVideoVisibility();
  const videoContainerRef = useRef(null);
  const { staggerAnimation, scaleOnScroll } = useGSAPAnimations();

  const handleServiceClick = serviceId => () => {
    if (serviceId !== activeService) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveService(serviceId);
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 300);
    }
  };

  const currentVideo =
    services.find(service => service.id === activeService)?.videoSrc ||
    videoFile;

  useEffect(() => {
    services.forEach(service => {
      if (service.videoSrc) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = service.videoSrc;
      }
    });
  }, []);

  useEffect(() => {
    const serviceItems = document.querySelectorAll('.services__item');

    if (serviceItems.length > 0) {
      staggerAnimation(serviceItems, 0.15);
    }

    if (videoContainerRef.current) {
      scaleOnScroll(videoContainerRef.current, 0.9, 1);
    }
  }, [staggerAnimation, scaleOnScroll]);

  return (
    <section className="services" ref={sectionRef}>
      <div className="container services__container">
        <div className="services__list">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`services__item ${
                activeService === service.id ? 'services__item--active' : ''
              } ${index === services.length - 1 ? 'services__item--last' : ''}`}
              onClick={handleServiceClick(service.id)}
            >
              <div className="services__item-content">
                <div className="services__arrow-container">
                  <img
                    src={arrowIcon}
                    alt="Arrow"
                    className="services__arrow"
                  />
                </div>
                <h3 className="services__item-title">{service.title}</h3>
              </div>
              {index !== services.length - 1 && (
                <div className="services__line"></div>
              )}
            </div>
          ))}
        </div>

        <div
          ref={videoContainerRef}
          className="services__video-container"
          style={{
            top: `${activeService * SERVICE_LINK_MOBILE_HEIGHT}px`,
          }}
        >
          <div className="services__video-wrapper">
            <video
              key={activeService}
              ref={videoRef}
              className={`services__video ${isTransitioning ? 'services__video--transitioning' : ''}`}
              controlsList="nodownload"
              loop
              playsInline
              muted
            >
              <source src={currentVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

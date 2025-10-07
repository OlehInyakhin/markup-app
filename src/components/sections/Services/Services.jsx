import { useState, useEffect } from 'react';
import './Services.css';
import { services, SEVICE_LINK_MOBILE_HEIGHT, arrowIcon, videoFile } from './constants';

export const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleServiceClick = (serviceId) => () => {
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

  const currentVideo = services.find(service => service.id === activeService)?.videoSrc || videoFile;

  useEffect(() => {
    services.forEach(service => {
      if (service.videoSrc) {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = service.videoSrc;
      }
    });
  }, []);

  return (
    <section className="services">
      <div className="container services__container">

        <div className="services__list">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`services__item ${
                activeService === service.id ? 'services__item--active' : ''
              } ${
                index === services.length - 1 ? 'services__item--last' : ''
              }`}
              onClick={handleServiceClick(service.id)}
            >
              <div className="services__item-content">
                <div className="services__arrow-container">
                  <img src={arrowIcon} alt="Arrow" className="services__arrow" />
                </div>
                <h3 className="services__item-title">
                  {service.title}
                </h3>
              </div>
              {index !== services.length - 1 && <div className="services__line"></div>}
            </div>
          ))}
        </div>

        <div className="services__video-container" style={{
            top: `${activeService * SEVICE_LINK_MOBILE_HEIGHT}px`
          }}>
          <div className="services__video-wrapper">
            <video 
              key={activeService}
              autoPlay 
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
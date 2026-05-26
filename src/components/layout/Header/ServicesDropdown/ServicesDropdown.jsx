import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './ServicesDropdown.css';
import {
  services,
  arrowIcon,
  videoFile,
} from '@/components/sections/Services/constants';

export const ServicesDropdown = ({ isOpen, onClose }) => {
  const { t } = useTranslation('services');
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const dropdownRef = useRef(null);
  const videoRefs = useRef({});

  // Handle service hover for changing active service
  const handleServiceHover = serviceId => () => {
    setActiveService(serviceId);
    setHoveredService(serviceId);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  // Handle video play/pause based on hover
  useEffect(() => {
    Object.keys(videoRefs.current).forEach(serviceId => {
      const video = videoRefs.current[serviceId];
      if (video) {
        if (hoveredService === parseInt(serviceId)) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [hoveredService]);

  // Get current service data
  const currentService = services.find(service => service.id === activeService);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle escape key to close dropdown
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="services-dropdown" ref={dropdownRef}>
      <div className="container services-dropdown__container">
        <div className="services-dropdown__content">
          {/* Services Menu */}
          <div className="services-dropdown__menu">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`services-dropdown__item ${
                  activeService === service.id ? 'services-dropdown__item--active' : ''
                }`}
                onMouseEnter={handleServiceHover(service.id)}
                onMouseLeave={handleServiceLeave}
              >
                <div className="services-dropdown__item-content">
                  <div className="services-dropdown__arrow-container">
                    <video
                      ref={el => videoRefs.current[service.id] = el}
                      className="services-dropdown__arrow-video"
                      controlsList="nodownload"
                      loop
                      playsInline
                      muted
                    >
                      <source src={service.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                  <h3 className="services-dropdown__item-title">
                    {t(service.titleKey)}
                  </h3>
                </div>
                {index !== services.length - 1 && (
                  <div className="services-dropdown__line"></div>
                )}
              </div>
            ))}
          </div>

          {/* Submenu Content */}
          <div className="services-dropdown__submenu-container">
            {currentService && currentService.submenu && (
              <div className="services-dropdown__submenu">
                <h4 className="services-dropdown__submenu-title">
                  {t(currentService.titleKey)}
                </h4>
                <div className="services-dropdown__submenu-items">
                  {currentService.submenu.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="services-dropdown__submenu-item"
                    >
                      {t(item.titleKey)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
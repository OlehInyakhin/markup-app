import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import logoSrc from '@/assets/images/logos/logo.svg';
import ArrowIcon from '@/assets/images/icons/arrow-down.svg?react';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { ServicesDropdown } from './ServicesDropdown';
import './Header.css';

export const Header = () => {
  const { t } = useTranslation('header', 'common');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const { isVisible } = useScrollDirection();

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: -100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleAnchorClick = e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    console.log(targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      closeMobileNav();
    }
  };

  return (
    <header
      className={`header ${!isVisible ? 'header--hidden' : ''} ${isMobileNavOpen ? 'header--nav-open' : ''}`}
      ref={headerRef}
    >
      <div className="container">
        <div className="header__overlay" aria-hidden="true" />
        <div className="header__content">
          <div className="header__logo">
            <a href="/" className="logo-link">
              <img src={logoSrc} alt="HYBRID" />
            </a>
          </div>
          <nav
            className={`header__nav ${isMobileNavOpen ? 'header__nav--open' : ''}`}
          >
            <div
              className="header__nav-overlay"
              onClick={closeMobileNav}
              aria-hidden="true"
            />

            <ul className="nav-list">
              <li className="nav-item-with-icon">
                <a
                  href="#services"
                  className={`nav-link nav-link--with-icon ${isServicesDropdownOpen ? 'active' : ''}`}
                  onClick={toggleServicesDropdown}
                >
                  <span>{t('navigation.services')}</span>
                  <ArrowIcon
                    className={`nav-icon ${isServicesDropdownOpen ? 'rotated' : ''}`}
                    aria-hidden="true"
                  />
                </a>
                <ServicesDropdown 
                  isOpen={isServicesDropdownOpen} 
                  onClose={closeServicesDropdown}
                />
              </li>
              <li>
                <a
                  href="#about"
                  className="nav-link"
                  onClick={handleAnchorClick}
                >
                  {t('navigation.about')}
                </a>
              </li>
              <li>
                <a
                  href="#work"
                  className="nav-link"
                  onClick={handleAnchorClick}
                >
                  {t('navigation.work')}
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="nav-link"
                  onClick={handleAnchorClick}
                >
                  {t('navigation.blog')}
                </a>
              </li>
              <li>
                <a
                  href="#career"
                  className="nav-link"
                  onClick={handleAnchorClick}
                >
                  {t('navigation.career')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="nav-link"
                  onClick={handleAnchorClick}
                >
                  {t('navigation.contact')}
                </a>
              </li>
              <li>
                <LanguageSwitcher onLanguageChange={closeMobileNav}>
                  <span className="nav-link">
                    {t('language', { ns: 'common' })}
                  </span>
                </LanguageSwitcher>
              </li>
            </ul>
          </nav>

          <button
            className={`header__menu-btn ${isMobileNavOpen ? 'header__menu-btn--open' : ''}`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileNavOpen}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

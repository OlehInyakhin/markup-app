import { useState } from 'react';
import logoSrc from '@/assets/images/logos/logo.svg';
import arrowIcon from '@/assets/images/icons/arrow-down.svg';
import './Header.css';

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="/" className="logo-link">
              <img src={logoSrc} alt="HYBRID" />
            </a>
          </div>
          <nav className={`header__nav ${isMobileNavOpen ? 'header__nav--open' : ''}`}>
            {/* Mobile nav overlay */}
            <div 
              className="header__nav-overlay" 
              onClick={closeMobileNav}
              aria-hidden="true"
            />
            
            <ul className="nav-list">
              <li className="nav-item-with-icon">
                <a href="#" className="nav-link nav-link--with-icon" onClick={closeMobileNav}>
                  <img src={arrowIcon} alt="" className="nav-icon" />
                  <span>שירותים</span>
                </a>
              </li>
              <li><a href="#" className="nav-link" onClick={closeMobileNav}>עלינו</a></li>
              <li><a href="#" className="nav-link" onClick={closeMobileNav}>עבודות</a></li>
              <li><a href="#" className="nav-link" onClick={closeMobileNav}>בלוג</a></li>
              <li><a href="#" className="nav-link" onClick={closeMobileNav}>קריירה</a></li>
              <li><a href="#" className="nav-link" onClick={closeMobileNav}>צור קשר</a></li>
              <li><a href="#" className="nav-link" onClick={closeMobileNav}>En</a></li>
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
import React, { useState, useEffect } from 'react';
// 1. Top par logo image ko import kiya (Path ko apne folder ke hisab se adjustment kar sakte hain)
import landingLogo from '../assets/img/landing-logo.png'; 

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (isMenuActive) {
        const headerEl = document.getElementById('mainHeader');
        if (headerEl && !headerEl.contains(e.target)) {
          setIsMenuActive(false);
        }
      }
    };
    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, [isMenuActive]);

  const logoImgStyle = {
    height: '34px',
    width: 'auto',
    objectFit: 'contain',
    display: 'inline-block',
    marginRight: '2px'
  };

  return (
    <header 
      id="mainHeader" 
      className={`${isScrolled ? 'scrolled' : ''} ${isMenuActive ? 'menu-active' : ''}`}
    >
      <nav>
        <a href="/" className="logo">
          {/* 2. String path ko hata kar direct import kiya hua variable {landingLogo} use kiya */}
          <img 
            src={landingLogo} 
            alt="Digital Whopper Logo" 
            style={logoImgStyle} 
            className="logo-img-asset" 
          />
          Digital Whopper
        </a>
        
        <div className="nav-links" id="navLinksMenu">
          <a href="#">Home</a>
          <a href="/services.html">Services</a>
          <a href="#">PortFolio</a>
          <a href="#">SEO Audit</a>
          <a href="#">SMO Audit</a>
          <a href="#">Shark Tank Journey</a>
        </div>

        <div className="nav-cta">
          <a href="/" className="btn btn-gold">Why Us?</a>
        </div>
        
        <button 
          className="menu-toggle-trigger" 
          id="hamburgerBtn" 
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuActive(!isMenuActive);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
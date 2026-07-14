import React, { useEffect, useState } from 'react';
import './App.css';

// Components Import
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClientsCarousel from './components/ClientsCarousel';
import WorkWorkspace from './components/WorkWorkspace';
import StrategySection from './components/StrategySection';
import ROASShowcase from './components/ROASShowcase';
import TimelineJourney from './components/TimelineJourney';
import BlogSection from './components/BlogSection';
import FAQAccordion from './components/FAQAccordion';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. ---- Full Window Preloader Fade Out Engine ----
    const preloaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 1200); // 1.2 Seconds delay jaise aapki original script me thha

    // 2. ---- Custom Cyber Cursor Animation System ----
    const cursorDot = document.getElementById('customCursor');
    const cursorBlur = document.getElementById('customCursorBlur');

    const handleMouseMove = (e) => {
      if (window.innerWidth > 900 && cursorDot && cursorBlur) {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.transform = `translate3d(${posX - 4}px, ${posY - 4}px, 0)`;
        cursorBlur.style.transform = `translate3d(${posX - 17}px, ${posY - 17}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3. ---- Unified Scroll Reveal Interceptors ----
    const revealSections = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

    revealSections.forEach(section => revealObserver.observe(section));

    // Cleanup functions[cite: 1]
    return () => {
      clearTimeout(preloaderTimeout);
      window.removeEventListener('mousemove', handleMouseMove);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="app-container">
      {/* 🤖 PRELOADER LOADING PANEL ENGINE (Direct HTML logic handles) */}
      <div id="customPreloader" className={`preloader-overlay ${!loading ? 'fade-out' : ''}`}>
        <div className="preloader-content">
          <h2 className="preloader-brand">Digital Whopper</h2>
          <div className="preloader-spinner">
            <span className="spinner-dot"></span>
            <span className="spinner-dot"></span>
          </div>
        </div>
      </div>

      {/* Custom Cyber Interaction Pointers */}
      <div className="custom-custom" id="customCursor"></div>
      <div className="custom-cursor-blur" id="customCursorBlur"></div>

      {/* Main Core Layout Structures */}
      <Navbar />
      <HeroSection />
      <ClientsCarousel />
      <WorkWorkspace />
      <StrategySection />
      <Testimonials/>
      <ROASShowcase />
      <TimelineJourney />
      <BlogSection />
      <FAQAccordion />
      <AIChatbot />
      <Footer />
    </div>
  );
}

export default App;
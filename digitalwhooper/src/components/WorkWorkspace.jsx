import React, { useState, useEffect, useRef } from 'react';

// 🌟 20 HIGH DENSITY PROJECTS REPOSITORY
const projects = [
  { title: "D2C Storefront", tag: "Shopify conversion build", images: ["https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"] },
  { title: "Performance Ads", tag: "Meta + Google funnels", images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=760&q=68"] },
  { title: "Analytics Hub", tag: "SEO growth dashboard", images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68"] },
  { title: "Social Launch", tag: "Reels and creator content", images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=760&q=68"] },
  { title: "CRM Flow", tag: "Lead nurture system", images: ["https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68"] },
  { title: "Creator Ads", tag: "Short-form launch kit", images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"] },
  { title: "EdTech Platform", tag: "LMS React Architecture", images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68"] },
  { title: "B2B SaaS Portal", tag: "Cloud Infrastructure Integration", images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68"] },
  { title: "Real Estate Funnel", tag: "High-Intent Meta Ad Lead Gen", images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"] },
  { title: "FMCG Brand Scale", tag: "Omnichannel Hyper-Growth", images: ["https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68"] },
  { title: "FinTech UI/UX", tag: "Secure Mobile Wallet Design", images: ["https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68"] },
  { title: "Healthcare SEO", tag: "Medical Directory Scaling", images: ["https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68"] },
  { title: "Luxury Decor Site", tag: "High-Ticket WooCommerce Build", images: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68"] },
  { title: "Crypto Tracker", tag: "Real-time API Web Dashboard", images: ["https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68"] },
  { title: "Automotive Growth", tag: "Hyperlocal Lead Generation", images: ["https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"] },
  { title: "Fashion Branding", tag: "Lookbook & Creative Direction", images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=760&q=68"] },
  { title: "AgriTech Application", tag: "Offline-First Mobile UI", images: ["https://images.unsplash.com/photo-1592982537447-7440771109a2?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68"] },
  { title: "Gym & Fitness App", tag: "Subscription Funnel Build", images: ["https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68"] },
  { title: "Travel Aggregator", tag: "Custom High-Concurrency API", images: ["https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68"] },
  { title: "Jewelry E-Store", tag: "Immersive Elegant UX/UI", images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=760&q=80", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"] }
]; //[cite: 1]

function WorkWorkspace() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);

  const halfLimit = Math.ceil(projects.length / 2); //[cite: 1]
  const leftProjects = projects.slice(0, halfLimit); //[cite: 1]
  const rightProjects = projects.slice(halfLimit); //[cite: 1]

  // Auto-focus select first item safely
  useEffect(() => {
    startCarouselLoop(0);
    return () => clearInterval(intervalRef.current);
  }, [activeIdx]);

  const startCarouselLoop = (idx) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    const totalSlides = projects[idx].images.length;
    setCurrentSlide(0);

    intervalRef.current = setInterval(() => {
      if (totalSlides <= 1) return;
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % totalSlides;
        const track = trackRef.current;
        if (track) {
          if (window.innerWidth <= 900) {
            const slideHeight = track.clientHeight;
            track.scrollTo({ top: nextSlide * slideHeight, left: 0, behavior: 'smooth' });
          } else {
            const slideWidth = track.clientWidth;
            track.scrollTo({ left: nextSlide * slideWidth, top: 0, behavior: 'smooth' });
          }
        }
        return nextSlide;
      });
    }, 2500); //[cite: 1]
  };

  const handleCardClick = (globalIdx) => {
    setActiveIdx(globalIdx);
    if (window.innerWidth <= 900) {
      setShowPopup(true);
      document.body.style.overflow = 'hidden'; //[cite: 1]
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = ''; //[cite: 1]
  };

  const moveNext = (e) => {
    if (e) e.stopPropagation(); //[cite: 1]
    const track = trackRef.current;
    if (!track) return;

    const totalSlides = projects[activeIdx].images.length;
    const nextSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextSlide);

    if (window.innerWidth <= 900) {
      const slideHeight = track.clientHeight;
      track.scrollTo({ top: nextSlide * slideHeight, behavior: 'smooth' });
    } else {
      const slideWidth = track.clientWidth;
      track.scrollTo({ left: nextSlide * slideWidth, behavior: 'smooth' });
    }
  };

  const isMobileView = typeof window !== 'undefined' && window.innerWidth <= 900;

  // Phone content template builder block
  const renderPhoneSimulator = () => (
    <div className="mock-device">
      <div className="phone-notch"></div>
      <div className="phone-screen-display id-phoneMockScreen has-carousel">
        <div 
          ref={trackRef}
          className="phone-carousel-track" 
          style={{
            flexDirection: showPopup || isMobileView ? 'column' : 'row',
            overflowX: showPopup || isMobileView ? 'hidden' : 'scroll',
            overflowY: showPopup || isMobileView ? 'scroll' : 'hidden',
          }}
        >
          {projects[activeIdx].images.map((imgUrl, i) => (
            <img 
              key={i}
              src={imgUrl} 
              className="phone-carousel-slide" 
              style={
                showPopup || isMobileView
                  ? { width: '100%', height: '100%', display: 'block', scrollSnapAlign: 'start', flexShrink: 0 }
                  : { width: '100%', height: '100%', flex: 'none', scrollSnapAlign: 'start', objectFit: 'cover' }
              } 
              alt="Showcase Slide" 
            />
          ))}
        </div>
        <div className="carousel-next-indicator" onClick={moveNext}>✦</div>
      </div>
      <div className="phone-home-indicator"></div>
    </div>
  );

  return (
    <section id="work" className="scroll-reveal">
      <div className="wrap">
        <div className="eyebrow">Our work</div>
        <h2 className="h2 text-shine">Projects that whoop in your hand</h2>
      </div>
      <div className="wrap1">
        <div className="work-workspace-container">
          
          {/* Left Project Column */}
          <div className="work-column-left">
            {leftProjects.map((p, idx) => (
              <div 
                className={`work-card ${activeIdx === idx ? 'active' : ''}`} 
                key={idx} 
                onClick={() => handleCardClick(idx)}
              >
                <img src={p.images[0]} alt={p.title} loading="lazy" />
                <div className="work-card-body">
                  <b>{p.title}</b>
                  <span>{p.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky Smartphone Frame for Desktop */}
          {!showPopup && (
            <div className="phone-center-column">
              {renderPhoneSimulator()}
            </div>
          )}

          {/* Right Project Column */}
          <div className="work-column-right">
            {rightProjects.map((p, idx) => {
              const globalIdx = idx + halfLimit; //[cite: 1]
              return (
                <div 
                  className={`work-card ${activeIdx === globalIdx ? 'active' : ''}`} 
                  key={globalIdx} 
                  onClick={() => handleCardClick(globalIdx)}
                >
                  <img src={p.images[0]} alt={p.title} loading="lazy" />
                  <div className="work-card-body">
                    <b>{p.title}</b>
                    <span>{p.tag}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 📱 MOBILE POP-UP OVERLAY LIGHTBOX */}
      {showPopup && (
        <div className="mobile-popup-overlay" style={{ display: 'flex', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(10, 15, 24, 0.9)', backdropFilter: 'blur(12px)', zIndex: 999999, justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '290px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button 
  onClick={closePopup} 
  style={{ 
    position: 'absolute', 
    top: '-50px', 
    right: 0, 
    background: 'rgba(255,255,255,0.15)', 
    border: '1px solid rgba(255,255,255,0.2)', 
    color: '#ffffff', 
    width: '40px', 
    height: '40px', 
    borderRadius: '50%', // Fixed here (camelCase notation)
    fontSize: '18px', 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontFamily: 'Sora, sans-serif' 
  }}
>
  ✕
</button>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              {renderPhoneSimulator()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WorkWorkspace;
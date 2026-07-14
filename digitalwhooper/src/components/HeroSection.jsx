import React, { useEffect, useRef } from 'react';
import roboImage from '../assets/hero-robo.png';

function HeroSection() {
  const canvasRef = useRef(null);
  const typewriterRef = useRef(null);

  useEffect(() => {
    // 1. ================= AI CONSTELLATION BACKGROUND CANVAS ENGINE =================
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;

    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    const nodes = [];
    const nodeCount = window.innerWidth < 768 ? 40 : 110; 
    const connectionDistance = 115; 
    const mousePointer = { x: null, y: null, radius: 180 }; 

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePointer.x = e.clientX - rect.left;
      mousePointer.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mousePointer.x = null;
      mousePointer.y = null;
    };

    const handleResize = () => {
      if (container) {
        width = canvas.width = container.clientWidth;
        height = canvas.height = container.clientHeight;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        pulseSpeed: Math.random() * 0.03 + 0.01,
        phase: Math.random() * Math.PI,
      });
    }

    let animationId;
    function animateAINetwork() {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        node.phase += node.pulseSpeed;
        let currentAlpha = 0.3 + (Math.sin(node.phase) + 1) * 0.35;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 82, 255, ${currentAlpha})`;
        ctx.fill();
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const n1 = nodes[i];
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(0, 82, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.95;
            ctx.stroke();
          }
        }

        if (mousePointer.x !== null && mousePointer.y !== null) {
          const n = nodes[i];
          const mdx = n.x - mousePointer.x;
          const mdy = n.y - mousePointer.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mousePointer.radius) {
            const mouseAlpha = (1 - mDist / mousePointer.radius) * 0.28;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(mousePointer.x, mousePointer.y);
            ctx.strokeStyle = `rgba(0, 210, 255, ${mouseAlpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animateAINetwork);
    }
    animateAINetwork();

    // 2. ================= AUTOMATIC CHARACTER TYPEWRITER ENGINE =================
    const wordsToType = ["to Next Level", "via Web Dev", "via Paid Ads"]; 
    let currentWordIndex = 0;
    let currentCharacterIndex = 0;
    let isDeleting = false;
    let typewriterTimeout;

    function startTypewriterLoop() {
      const targetSpan = typewriterRef.current;
      if (!targetSpan) return;

      const currentFullWord = wordsToType[currentWordIndex];

      if (isDeleting) {
        targetSpan.textContent = currentFullWord.substring(0, currentCharacterIndex - 1);
        currentCharacterIndex--;
      } else {
        targetSpan.textContent = currentFullWord.substring(0, currentCharacterIndex + 1);
        currentCharacterIndex++;
      }

      let typingSpeed = isDeleting ? 40 : 100; 
      if (!isDeleting && currentCharacterIndex === currentFullWord.length) {
        typingSpeed = 1600; 
        isDeleting = true;
      } else if (isDeleting && currentCharacterIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
        typingSpeed = 400; 
      }
      typewriterTimeout = setTimeout(startTypewriterLoop, typingSpeed);
    }
    
    const preloaderTimeout = setTimeout(startTypewriterLoop, 1500); 

    // 3. ================= HERO HEADING ZOOM ON SCROLL ENGINE =================
    const handleScrollZoom = () => {
      const heroHeading = document.querySelector('.hero h1');
      if (heroHeading) {
        const scrollPosition = window.scrollY;
        if (scrollPosition <= 600) {
          const targetScale = 1 + scrollPosition * 0.0005;
          const finalScale = Math.min(targetScale, 1.25);
          heroHeading.style.transform = `scale(${finalScale})`;
        }
      }
    };
    window.addEventListener('scroll', handleScrollZoom);

    // 4. ================= STAT COUNTERS ENGINE (FIXED LOAD TIMING) =================
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          let current = 0;
          const duration = 1500; // Animation duration in milliseconds
          const frameDuration = 1000 / 60; // 60fps frame duration
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const tick = () => {
            frame++;
            // Ease out quad formula for premium counter look
            const progress = frame / totalFrames;
            current = Math.round(target * (progress * (2 - progress)));

            if (frame >= totalFrames) {
              el.textContent = target + '+';
              return;
            }
            
            el.textContent = current;
            requestAnimationFrame(tick);
          };
          
          tick();
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px 50px 0px" }); // Margin layout safe updates

    // 🌟 React specific layout execution safe boundary fix
    const startObserverTimeout = setTimeout(() => {
      const counters = document.querySelectorAll('.hero-stats-counter-value');
      counters.forEach((c) => counterObserver.observe(c));
    }, 1000); // 1 Second standard delay window

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScrollZoom);
      cancelAnimationFrame(animationId);
      clearTimeout(typewriterTimeout);
      clearTimeout(preloaderTimeout);
      clearTimeout(startObserverTimeout);
      counterObserver.disconnect();
    };
  }, []);

  return (
    <section className="hero scroll-reveal">
      <div className="pink-blob"></div>
      <div className="purple-ambient-glow"></div>
      
      <div className="stars-container">
        <canvas ref={canvasRef} id="aiNodeCanvas"></canvas>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-inner">
          <div className="eyebrow">Best digital marketing agency in Jaipur</div>
          <h1 className="text-shine">
            Take your business online -{' '}
            <span className="highlight text-shine" ref={typewriterRef} id="typewriterText"></span>
          </h1>
          <p>
            You've built a great product and poured endless hours into perfecting it. But online, 
            your competitors keep ranking first while your business stays invisible. Digital Whopper 
            helps businesses like yours get seen, get clicks, and get results.
          </p>
          <div className="hero-actions">
            <a href="#footer" className="btn btn-gold">Enquire now ✦</a>
            <a href="#work" className="btn btn-ghost">Explore services</a>
          </div>
          
          {/* 🌟 STAT COUNTER BLOCKS ATTACHED DIRECT CLASS REF SYSTEM */}
          <div className="hero-stats">
            <div>
              <b className="hero-stats-counter-value" data-target="150">0</b>
              <span>Projects delivered</span>
            </div>
            <div>
              <b className="hero-stats-counter-value" data-target="5">0</b>
              <span>Years of growth</span>
            </div>
            <div>
              <b className="hero-stats-counter-value" data-target="40">0</b>
              <span>Brands built by 2022</span>
            </div>
            <div>
              <b className="hero-stats-counter-value" data-target="12">0</b>
              <span>Marketing services</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="robo-glow"></div>
          <img src={roboImage} alt="Digital Marketing Robot" className="robo-image" />
          <div className="float-badge b1">🚀 Performance Ads</div>
          <div className="float-badge b2">🔍 SEO Growth</div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
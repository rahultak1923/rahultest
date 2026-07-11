// ==========================================================================
// 🛍️ DIGITAL WHOPPER SERVICES PAGE EXCLUSIVE ENGINE (UPDATED WITH LEARN MORE REDIRECT)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  
  // 🌟 1. SERVICES DATABASE
  const servicesList = [
    { id: 0, icon: "💻", title: "Web Design & Dev", desc: "Crafting beautiful, modern, high-conversion websites optimized for speed and stunning user experiences across all devices." },
    { id: 1, icon: "🛍️", title: "App & Shopify Build", desc: "End-to-end custom e-commerce stores and mobile application ecosystems tailored carefully to turn visitors into brand advocates." },
    { id: 2, icon: "🔍", title: "SEO Optimization", desc: "Dominate search engine results with high-intent keyword strategies, structural audits, and premium content systems." },
    { id: 3, icon: "📈", title: "Performance Ads", desc: "Data-driven paid advertising architectures configured strategically to scale revenue, optimize ROI, and multiply profits." },
    { id: 4, icon: "📱", title: "SMO & Branding", desc: "Build unforgettable digital presence across social networks with trending content strategies and custom brand identity assets." },
    { id: 5, icon: "🚀", title: "D2C Scaling", desc: "Accelerating direct-to-consumer digital startups from early-stage ideas into highly successful, marketplace-dominant enterprises." }
  ];

  // 🌟 2. RENDER CARD ENGINE (WITH PERFECT LEARN MORE REDIRECT FUNCTION)
  const targetGrid = document.querySelector('.services-cards-wrapper');
  if (targetGrid) {
    targetGrid.innerHTML = servicesList.map(s => `
      <div class="service-card-core" onclick="window.location.href='services-detailsw.html?id=${s.id}'" style="cursor: pointer;">
        <div class="card-icon-slot">${s.icon}</div>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <span class="card-action-trigger" onclick="event.stopPropagation(); window.location.href='services-detailsw.html?id=${s.id}'" style="color: #0052ff; font-weight:600; display:inline-block; margin-top:12px; cursor: pointer;">
          Learn More ✦
        </span>
      </div>
    `).join('');
  }

  // 🌟 3. GLOBAL HEADER AUTO-INJECTION FOR THIS PAGE
  const globalHeaderContainer = document.getElementById('mainHeader');
  if (globalHeaderContainer) {
    globalHeaderContainer.innerHTML = `
      <nav>
        <a href="/" class="logo">
          <img src="img/landing-logo.png" alt="Digital Whopper Logo" class="logo-img-asset">
          Digital Whopper
        </a>        
        <div class="nav-links" id="navLinksMenu">
          <a href="/index.html">Home</a>
          <a href="/servicesw.html">Services</a>
          <a href="/portfolio.html">PortFolio</a>
          <a href="#">SEO Audit</a>
          <a href="#">SMO Audit</a>
          <a href="/shark-tank-journey.html">Shark Tank Journey</a>
        </div>
        <div class="nav-cta"><a href="contact.html" class="btn btn-gold">Why Us?</a></div>
        <button class="menu-toggle-trigger" id="hamburgerBtn" aria-label="Toggle Navigation">
          <span></span><span></span><span></span>
        </button>
      </nav>
    `;

    // Mobile Menu Trigger Sync
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        globalHeaderContainer.classList.toggle('menu-active');
      });
    }
  }

  // 🌟 4. GLOBAL FOOTER AUTO-INJECTION FOR THIS PAGE
  const globalFooterContainer = document.getElementById('footer');
  if (globalFooterContainer) {
    globalFooterContainer.innerHTML = `
      <div class="wrap">
        <div class="foot-top">
          <div class="foot-brand">
            <a href="/" class="logo"><div class="logo-mark">DW</div>Digital Whopper</a>
            <p>3rd Floor, 4/11, Vidyut Abhiyanta Colony, Sector 4, Malviya Nagar, Jaipur, Rajasthan 302017</p>
            <p>
              <a href="tel:+916200379161">+91 6200379161</a><br>
              <a href="mailto:hello@digitalwhopper.com">hello@digitalwhopper.com</a>
            </p>
            <div class="socials">
              <a href="https://www.facebook.com/officialdigitalwhopper" target="_blank" rel="noopener">Facebook</a>
              <a href="https://www.instagram.com/digital_whopper/" target="_blank" rel="noopener">Instagram</a>
              <a href="https://www.linkedin.com/company/digitalwhopper/" target="_blank" rel="noopener">LinkedIn</a>
            </div>
          </div>
          <div class="foot-links">
            <div class="foot-col">
              <h4>Pages</h4>
              <a href="/">Home</a>
              <a href="services.html">Services</a>
              <a href="contact.html">Contact</a>
            </div>
            <div class="foot-col">
              <h4>Our services</h4>
              <a href="services.html">App &amp; Shopify Development</a>
              <a href="services.html">SEO &amp; SMO Optimisation</a>
              <a href="services.html">E-Commerce</a>
              <a href="services.html">Performance Marketing</a>
              <a href="services.html">Web Design &amp; Development</a>
            </div>
          </div>
        </div>
        <div class="foot-bottom">
          <span>© 2026 Digital Whopper. All rights reserved.</span>
          <span>Made with ✦ in Jaipur, the Pink City</span>
        </div>
      </div>
    `;
  }

  // 🌟 5. REVEAL SECTIONS ENGINE FOR THIS PAGE
  const revealSections = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealSections.forEach(section => {
    revealObserver.observe(section);
  });

  // 🌟 6. HIDE PRELOADER WHEN LOADED
  const preloader = document.getElementById('customPreloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 800);
  }
});

// 🌟 7. AI CONSTELLATION CANVAS ENGINE FOR BACKGROUND STARS
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('aiNodeCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let container = canvas.parentElement;
  let width = canvas.width = container['clientWidth'];
  let height = canvas.height = container['clientHeight'];
  const nodes = [];
  const nodeCount = window.innerWidth < 768 ? 30 : 80;
  const connectionDistance = 115;

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    nodes.forEach(node => {
      node.x += node.vx; node.y += node.vy;
      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;
      ctx.beginPath(); ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 82, 255, 0.4)'; ctx.fill();
    });
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(Math.pow(nodes[i].x - nodes[j].x, 2) + Math.pow(nodes[i].y - nodes[j].y, 2));
        if (dist < connectionDistance) {
          ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(0, 82, 255, ${(1 - dist / connectionDistance) * 0.15})`; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }
  animate();
});
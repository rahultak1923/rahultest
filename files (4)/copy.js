// ---- Custom Cyber Cursor Animation System ----
const cursorDot = document.getElementById('customCursor');
const cursorBlur = document.getElementById('customCursorBlur');

if (cursorDot && cursorBlur && window.innerWidth > 900) {
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.transform = `translate3d(${posX - 4}px, ${posY - 4}px, 0)`;
    cursorBlur.style.transform = `translate3d(${posX - 17}px, ${posY - 17}px, 0)`;
  });

  function applyCursorHooks() {
    const interactives = document.querySelectorAll('a, .btn, .work-card, .strategy-card, .blog-card, .faq-q, .chat-bubble, .suggest-chip, .close-chat-btn, .send-msg-btn, .service-card-core');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
    });
  }
  applyCursorHooks();
}

// ---- Unified Scroll Reveal Interceptors ----
const revealSections = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

revealSections.forEach(section => {
  revealObserver.observe(section);
});

// ---- Header Scroll Listener Engine ----
const mainHeader = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  if (mainHeader && window.scrollY > 40) {
    mainHeader.classList.add('scrolled');
  } else if (mainHeader) {
    mainHeader.classList.remove('scrolled');
  }
});

// 🌟 20+ HIGH DENSITY REAL-WORLD MARKETING & DEV PROJECTS REPOSITORY
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
  { title: "Jewelry E-Store", tag: "Immersive Elegant UX/UI", images: ["https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=760&q=68", "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"] }
];

let carouselIntervalIndex = null; 

// ---- 3-Div Separated Workspace Balanced Grid Renderer ----
function renderThreeDivWorkspace() {
  const leftTarget = document.getElementById('gridWorkspaceLeft');
  const rightTarget = document.getElementById('gridWorkspaceRight');
  
  if (!leftTarget || !rightTarget || projects.length < 1) return;

  const halfLimit = Math.ceil(projects.length / 2);
  const leftProjects = projects.slice(0, halfLimit);
  const rightProjects = projects.slice(halfLimit);

  leftTarget.innerHTML = leftProjects.map((p, idx) => generateCardTemplate(p, idx)).join('');
  rightTarget.innerHTML = rightProjects.map((p, idx) => generateCardTemplate(p, idx + halfLimit)).join('');

  if (typeof applyCursorHooks === "function") applyCursorHooks();
}

function generateCardTemplate(p, globalIdx) {
  return `
    <div class="work-card" data-index="${globalIdx}" onclick="updatePhoneDisplay(${globalIdx}, this)">
      <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
      <div class="work-card-body">
        <b>${p.title}</b>
        <span>${p.tag}</span>
      </div>
    </div>
  `;
}

function updatePhoneDisplay(projectIndex, element) {
  const track = document.getElementById('phoneCarouselTrack');
  const placeholder = document.getElementById('screenPlaceholder');
  const screenWrapper = document.getElementById('phoneMockScreen');
  const project = projects[projectIndex];

  if (!track || !project) return;
  if (carouselIntervalIndex) clearInterval(carouselIntervalIndex);

  if (placeholder) placeholder.style.display = 'none';
  if (screenWrapper) screenWrapper.classList.add('has-carousel');

  const isMobile = window.innerWidth <= 900;
  
  track.innerHTML = project.images.map(imgUrl => {
    const mobileStyle = isMobile 
      ? 'width: 100% !important; height: 100% !important; display: block !important; scroll-snap-align: start !important; flex-shrink: 0 !important;' 
      : 'width: 100%; height: 100%; flex: none; scroll-snap-align: start; object-fit: cover;';
      
    return `<img src="${imgUrl}" class="phone-carousel-slide" style="${mobileStyle}" alt="Showcase Slide">`;
  }).join('');

  if (isMobile) {
    track.style.setProperty('flex-direction', 'column', 'important');
    track.style.setProperty('overflow-x', 'hidden', 'important');
    track.style.setProperty('overflow-y', 'scroll', 'important');
  } else {
    track.style.setProperty('flex-direction', 'row');
    track.style.setProperty('overflow-x', 'scroll');
    track.style.setProperty('overflow-y', 'hidden');
  }

  track.scrollLeft = 0;
  track.scrollTop = 0;

  document.querySelectorAll('.work-card').forEach(card => card.classList.remove('active'));
  if (element) element.classList.add('active');

  let currentSlide = 0;
  const totalSlides = project.images.length;

  carouselIntervalIndex = setInterval(() => {
    if (totalSlides <= 1) return;
    currentSlide = (currentSlide + 1) % totalSlides;

    if (window.innerWidth <= 900) {
      const slideHeight = track.clientHeight;
      track.scrollTo({
        top: currentSlide * slideHeight,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const slideWidth = track.clientWidth;
      track.scrollTo({
        left: currentSlide * slideWidth,
        top: 0,
        behavior: 'smooth'
      });
    }
  }, 2500); 
}

function moveCarouselNext(event) {
  if(event) event.stopPropagation(); 
  const track = document.getElementById('phoneCarouselTrack');
  if (!track || !track.firstElementChild) return;

  if (window.innerWidth <= 900) {
    const slideHeight = track.clientHeight;
    if (track.scrollTop + slideHeight >= track.scrollHeight - 10) {
      track.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ top: slideHeight, behavior: 'smooth' });
    }
  } else {
    const slideWidth = track.clientWidth;
    if (track.scrollLeft + slideWidth >= track.scrollWidth - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  }
}

// ---- 2 Separate Infinite Scrolling Carousels Engine ----
const testimonials = [
  { rating: 5, text: "The team is quite supportive — they patiently listen to every query and understand exactly what is needed. Our online visibility has improved significantly.", initials: "NR", name: "Nikita Roy", role: "Fashion Brand Owner" },
  { rating: 4.8, text: "We wanted a partner who could help us rank at the top of search results. Soon after starting with Digital Whopper's SEO team, we began seeing positive results. Truly professional.", initials: "SS", name: "Saurabh Sharma", role: "Founder, Home Décor Business" },
  { rating: 4.8, text: "I ran an offline store and wanted to take it online, but my own attempts didn't deliver. Digital Whopper ran campaigns that brought great ROI — really happy!", initials: "DS", name: "Dev Saxena", role: "Small Business Owner" },
  { rating: 4.8, text: "Thanks to Digital Whopper's social media team, our reach has grown remarkably over the past few months. We're really satisfied with their work.", initials: "SY", name: "Shruti Yadav", role: "Influencer" }
];

function renderTwoRowCarouselTestimonials() {
  const container = document.querySelector('.test-row');
  if (!container || testimonials.length < 2) return;

  const half = Math.ceil(testimonials.length / 2);
  const firstRowData = testimonials.slice(0, half);
  const secondRowData = testimonials.slice(half);

  const quadrupledFirstRow = [...firstRowData, ...firstRowData, ...firstRowData, ...firstRowData];
  const quadrupledSecondRow = [...secondRowData, ...secondRowData, ...secondRowData, ...secondRowData];

  container.innerHTML = `
    <div class="test-track-carousel-1">
      ${quadrupledFirstRow.map(t => generateTestimonialCardHTML(t)).join('')}
    </div>
    <div class="test-track-carousel-2" style="margin-top: 24px;">
      ${quadrupledSecondRow.map(t => generateTestimonialCardHTML(t)).join('')}
    </div>
  `;
}

function generateTestimonialCardHTML(t) {
  return `
    <div class="test-card">
      <span class="stars">★★★★★</span><span class="test-score">${t.rating}</span>
      <p>"${t.text}"</p>
      <div class="test-who">
        <div class="avatar">${t.initials}</div>
        <div><b>${t.name}</b><span>${t.role}</span></div>
      </div>
    </div>
  `;
}

// ---- Stat counters Engine ----
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.max(1, Math.round(target / 60));
      const tick = () => {
        current += step;
        if (current >= target) { el.textContent = target + '+'; return; }
        el.textContent = current;
        requestAnimationFrame(tick);
      };
      tick();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

// ---- FAQ accordion ----
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});

// 🤖 DYNAMIC INTERACTIVE AI CHATBOT IMPLEMENTATION ENGINE
const chatbotWrapper = document.querySelector('.chatbot-wrapper');
const chatBubble = document.getElementById('chatBubble');
const closeChatBtn = document.getElementById('closeChatBtn');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatUserInput = document.getElementById('chatUserInput');
const chatMessages = document.getElementById('chatMessages');

if(chatBubble && chatbotWrapper) {
  chatBubble.addEventListener('click', () => chatbotWrapper.classList.add('chat-open'));
}
if(closeChatBtn && chatbotWrapper) {
  closeChatBtn.addEventListener('click', () => chatbotWrapper.classList.remove('chat-open'));
}

function handleUserSendMessage() {
  const text = chatUserInput.value.trim();
  if(!text) return;

  appendMessageBubble(text, 'user-msg');
  chatUserInput.value = '';
  processBotBrainResponse(text);
}

if(sendChatBtn) sendChatBtn.addEventListener('click', handleUserSendMessage);
if(chatUserInput) {
  chatUserInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') handleUserSendMessage();
  });
}

function appendMessageBubble(text, className) {
  const bubble = document.createElement('div');
  bubble.className = `msg-bubble ${className}`;
  bubble.innerHTML = text;
  
  const suggestions = document.getElementById('chatSuggestions');
  if(suggestions && className === 'user-msg') suggestions.remove();

  if(chatMessages) {
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function triggerBotResponse(keyword) {
  appendMessageBubble(`I want to know about ${keyword}`, 'user-msg');
  processBotBrainResponse(keyword);
}

function processBotBrainResponse(input) {
  const query = input.toLowerCase();
  
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.id = 'typingIndicator';
  typing.innerText = 'Whoppy is typing...';
  if(chatMessages) {
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  setTimeout(() => {
    const indicator = document.getElementById('typingIndicator');
    if(indicator) indicator.remove();

    let botReply = "That's interesting! Let me connect you directly to our growth team on WhatsApp for details. Or type 'services' to see what we build! 🚀";

    if(query.includes('services') || query.includes('service') || query.includes('work')) {
      botReply = "We provide full 360° digital growth solutions! ✦ App & Shopify Build ✦ SEO Optimization ✦ Performance Meta/Google Funnel Ads ✦ D2C scaling. Which one are you looking for?";
    } else if(query.includes('pricing') || query.includes('price') || query.includes('cost') || query.includes('charge')) {
      botReply = "Our packages are fully customized based on your business targets! Let's build a free consultation map. Drop us a ping on WhatsApp at +916200379161.";
    } else if(query.includes('contact') || query.includes('human') || query.includes('speak') || query.includes('call')) {
      botReply = "Perfect! Opening direct WhatsApp hotline channel with our strategist. Click here: <a href='https://wa.me/916200379161' target='_blank' style='text-decoration:underline;color:#0052ff;'>Chat on WhatsApp</a> 📲";
    }

    appendMessageBubble(botReply, 'bot-msg');
    if (typeof applyCursorHooks === "function") applyCursorHooks();
  }, 1100);
}

// 🌟 HERO SCROLL DRIVEN HEADING ZOOM ENGINE
const heroHeading = document.querySelector('.hero h1');
if (heroHeading) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition <= 600) {
      const targetScale = 1 + (scrollPosition * 0.0005);
      const finalScale = Math.min(targetScale, 1.25);
      heroHeading.style.transform = `scale(${finalScale})`;
    }
  });
}

// 🌟 AUTOMATIC CHARACTER TYPEWRITER ENGINE
const wordsToType = [ "to Next Level", "via Web Dev", "via Paid Ads"];
let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isDeletingArrayString = false;
const targetTypewriterSpan = document.getElementById('typewriterText');

function startTypewriterLoop() {
  if (!targetTypewriterSpan) return;
  const currentFullWord = wordsToType[currentWordIndex];

  if (isDeletingArrayString) {
    targetTypewriterSpan.textContent = currentFullWord.substring(0, currentCharacterIndex - 1);
    currentCharacterIndex--;
  } else {
    targetTypewriterSpan.textContent = currentFullWord.substring(0, currentCharacterIndex + 1);
    currentCharacterIndex++;
  }

  let typingSpeed = isDeletingArrayString ? 40 : 100;
  if (!isDeletingArrayString && currentCharacterIndex === currentFullWord.length) {
    typingSpeed = 1600;
    isDeletingArrayString = true;
  } else if (isDeletingArrayString && currentCharacterIndex === 0) {
    isDeletingArrayString = false;
    currentWordIndex = (currentWordIndex + 1) % wordsToType.length;
    typingSpeed = 400;
  }
  setTimeout(startTypewriterLoop, typingSpeed);
}

// 🌟 GLOBAL HEADER & FOOTER AUTO-INJECTION SYSTEM
document.addEventListener('DOMContentLoaded', () => {
  const globalHeaderContainer = document.getElementById('mainHeader');
  const globalFooterContainer = document.getElementById('footer');

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
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    `;

    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
      hamburgerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        globalHeaderContainer.classList.toggle('menu-active');
      });
    }

    document.addEventListener('click', (e) => {
      if (globalHeaderContainer.classList.contains('menu-active')) {
        const navMenu = document.getElementById('navLinksMenu');
        if (navMenu && !navMenu.contains(e.target) && e.target !== hamburgerBtn) {
          globalHeaderContainer.classList.remove('menu-active');
        }
      }
    });
  }

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

  // 🚀 [RESTORED SERVICES REDIRECT] Services Section core cards redirection listener
  document.querySelectorAll('.service-card-core').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = '/services.html';
    });
  });

  renderThreeDivWorkspace();
  renderTwoRowCarouselTestimonials();
  
  document.querySelectorAll('.counter').forEach(c => counterObserver.observe(c));
  setTimeout(startTypewriterLoop, 1500);
});

// Full Window Slide Exit Trigger
window.addEventListener('load', () => {
  const preloader = document.getElementById('customPreloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1200); 
  }
});

// ==========================================================================
// 🧠 FUTURISTIC AI CONSTELLATION BACKGROUND ENGINE (CANVAS NODE NET) WITH MOUSE TRAIL
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('aiNodeCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let container = canvas.parentElement;
  let width = canvas.width = container['clientWidth'];
  let height = canvas.height = container['clientHeight'];

  const nodes = [];
  const nodeCount = window.innerWidth < 768 ? 40 : 110; 
  const connectionDistance = 115; 
  
  const mousePointer = { x: null, y: null, radius: 180 };

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mousePointer.x = e.clientX - rect.left;
    mousePointer.y = e.clientY - rect.top;
  });

  window.addEventListener('mouseleave', () => {
    mousePointer.x = null;
    mousePointer.y = null;
  });

  window.addEventListener('resize', () => {
    width = canvas.width = container['clientWidth'];
    height = canvas.height = container['clientHeight'];
  });

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6, 
      vy: (Math.random() - 0.5) * 0.6, 
      radius: Math.random() * 2 + 1.5,  
      pulseSpeed: Math.random() * 0.03 + 0.01,
      phase: Math.random() * Math.PI
    });
  }

  function animateAINetwork() {
    ctx.clearRect(0, 0, width, height);

    nodes.forEach(node => {
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

    requestAnimationFrame(animateAINetwork);
  }

  animateAINetwork();
});
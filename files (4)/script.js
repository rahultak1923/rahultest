// ---- Custom Cyber Cursor Animation System ----
const cursorDot = document.getElementById('customCursor');
const cursorBlur = document.getElementById('customCursorBlur');

if (cursorDot && cursorBlur && window.innerWidth > 900) {
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.transform = `translate3d(${posX - 4}px, ${posY - 4}px, 0)`;
    
    cursorBlur.animate({
      transform: `translate3d(${posX - 17}px, ${posY - 17}px, 0)`
    }, { duration: 240, fill: "forwards" });
  });

  function applyCursorHooks() {
    const interactives = document.querySelectorAll('a, .btn, .work-card, .strategy-card, .blog-card, .faq-q, .chat-bubble, .suggest-chip, .close-chat-btn, .send-msg-btn');
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
  if (window.scrollY > 40) {
    mainHeader.classList.add('scrolled');
  } else {
    mainHeader.classList.remove('scrolled');
  }
});

// 🌟 1. अपडेटेड प्रोजेक्ट डेटा (हर प्रोजेक्ट में अपनी इमेजेस का Array डालें)
const projects = [
  { 
    title: "D2C Storefront", 
    tag: "Shopify conversion build",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68"
    ]
  },
  { 
    title: "Performance Ads", 
    tag: "Meta + Google funnels",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=760&q=68"
    ]
  },
  { 
    title: "Analytics Hub", 
    tag: "SEO growth dashboard",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68"
    ]
  },
  { 
    title: "Social Launch", 
    tag: "Reels and creator content",
    images: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=760&q=68"
    ]
  },
  { 
    title: "CRM Flow", 
    tag: "Lead nurture system",
    images: [
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68"
    ]
  },
  { 
    title: "Creator Ads", 
    tag: "Short-form launch kit",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=760&q=68",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68"
    ]
  }
];

let carouselIntervalIndex = null; // टाइमर स्टोर करने के लिए

// 🌟 2. ग्रिड वर्कस्पेस को रेंडर करने का नया फंक्शन
function renderGridWorkspace(el, list) {
  if(!el) return;
  el.innerHTML = list.map((p, idx) => `
    <div class="work-card" data-index="${idx}" onclick="updatePhoneDisplay(${idx}, this)">
      <img src="${p.images[0]}" alt="${p.title}" loading="lazy">
      <div class="work-card-body">
        <b>${p.title}</b>
        <span>${p.tag}</span>
      </div>
    </div>
  `).join('');
  
  if (typeof applyCursorHooks === "function") applyCursorHooks();
}

// 🌟 3. कार्ड क्लिक होने पर कैरोसेल इंजन लोड करने का लॉजिक
function updatePhoneDisplay(projectIndex, element) {
  const track = document.getElementById('phoneCarouselTrack');
  const placeholder = document.getElementById('screenPlaceholder');
  const screenWrapper = document.getElementById('phoneMockScreen');
  const project = projects[projectIndex];

  if (!track || !project) return;

  // पुराने किसी भी एक्टिव टाइमर को क्लियर करें
  if (carouselIntervalIndex) clearInterval(carouselIntervalIndex);

  // प्लेसहोल्डर छिपाएं और स्क्रीन पर क्लास जोड़ें
  if (placeholder) placeholder.style.display = 'none';
  if (screenWrapper) screenWrapper.classList.add('has-carousel');

  // ट्रैक के अंदर इमेजेस इन्जेक्ट करें
  track.innerHTML = project.images.map(imgUrl => `
    <img src="${imgUrl}" class="phone-carousel-slide" alt="Showcase Slide">
  `).join('');

  // स्क्रॉल पोजीशन रीसेट करें
  track.scrollLeft = 0;

  // एक्टिव कार्ड हाइलाइट संभालें
  document.querySelectorAll('.work-card').forEach(card => card.classList.remove('active'));
  if (element) element.classList.add('active');

  // 🌟 2.5 सेकंड का ऑटोप्ले इंटरवल इंजन
  let currentSlide = 0;
  const totalSlides = project.images.length;

  carouselIntervalIndex = setInterval(() => {
    if (totalSlides <= 1) return;
    currentSlide = (currentSlide + 1) % totalSlides;
    const slideWidth = track.clientWidth;
    track.scrollTo({
      left: currentSlide * slideWidth,
      behavior: 'smooth'
    });
  }, 2500); // 2500ms = 2.5 Seconds Auto-rotation Lock
}

// 🌟 4. राइट साइड के आइकॉन बटन पर क्लिक करने का मैनुअल लॉजिक
function moveCarouselNext(event) {
  if(event) event.stopPropagation(); // पैरेंट क्लिक इवेंट रोकें
  const track = document.getElementById('phoneCarouselTrack');
  if (!track || !track.firstElementChild) return;

  const slideWidth = track.clientWidth;
  // अगर हम बिल्कुल एंड में पहुँच गए हैं तो वापस शुरुआत में आ जाएं, नहीं तो अगला स्लाइड करें
  if (track.scrollLeft + slideWidth >= track.scrollWidth - 10) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: slideWidth, behavior: 'smooth' });
  }
}

// बूटअप रेंडर चालू करें
document.addEventListener('DOMContentLoaded', () => {
  renderGridWorkspace(document.getElementById('gridWorkspace'), projects);
});

// ---- Testimonials Framework ----
const testimonials = [
  { rating: 5, text: "The team is quite supportive — they patiently listen to every query and understand exactly what is needed. Our online visibility has improved significantly.", initials: "NR", name: "Nikita Roy", role: "Fashion Brand Owner" },
  { rating: 4.8, text: "We wanted a partner who could help us rank at the top of search results. Soon after starting with Digital Whopper's SEO team, we began seeing positive results. Truly professional.", initials: "SS", name: "Saurabh Sharma", role: "Founder, Home Décor Business" },
  { rating: 4.8, text: "I ran an offline store and wanted to take it online, but my own attempts didn't deliver. Digital Whopper ran campaigns that brought great ROI — really happy!", initials: "DS", name: "Dev Saxena", role: "Small Business Owner" },
  { rating: 4.8, text: "Thanks to Digital Whopper's social media team, our reach has grown remarkably over the past few months. We're really satisfied with their work.", initials: "SY", name: "Shruti Yadav", role: "Influencer" },
];

function renderTestimonials(el, list) {
  if(!el) return;
  const doubled = [...list, ...list];
  el.innerHTML = doubled.map(t => `
    <div class="test-card">
      <span class="stars">★★★★★</span><span class="test-score">${t.rating}</span>
      <p>"${t.text}"</p>
      <div class="test-who">
        <div class="avatar">${t.initials}</div>
        <div><b>${t.name}</b><span>${t.role}</span></div>
      </div>
    </div>
  `).join('');
}
renderTestimonials(document.getElementById('testTrack'), testimonials);

// ---- Stat counters ----
const counters = document.querySelectorAll('.counter');
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
counters.forEach(c => counterObserver.observe(c));

// ---- FAQ accordion ----
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!wasOpen) item.classList.add('open');
  });
});


// --------------------------------------------------
// 🤖 DYNAMIC INTERACTIVE AI CHATBOT IMPLEMENTATION ENGINE
// --------------------------------------------------
const chatbotWrapper = document.querySelector('.chatbot-wrapper');
const chatBubble = document.getElementById('chatBubble');
const closeChatBtn = document.getElementById('closeChatBtn');
const sendChatBtn = document.getElementById('sendChatBtn');
const chatUserInput = document.getElementById('chatUserInput');
const chatMessages = document.getElementById('chatMessages');

// Toggle Open state
if(chatBubble && chatbotWrapper) {
  chatBubble.addEventListener('click', () => chatbotWrapper.classList.add('chat-open'));
}
if(closeChatBtn && chatbotWrapper) {
  closeChatBtn.addEventListener('click', () => chatbotWrapper.classList.remove('chat-open'));
}

// Send Message Flow
function handleUserSendMessage() {
  const text = chatUserInput.value.trim();
  if(!text) return;

  // Append user message bubble layout
  appendMessageBubble(text, 'user-msg');
  chatUserInput.value = '';

  // Fire simulated bot thinking matrix response
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
  
  // Hide suggestion chip layout context if active
  const suggestions = document.getElementById('chatSuggestions');
  if(suggestions) suggestions.remove();

  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Chip response launcher hook
function triggerBotResponse(keyword) {
  appendMessageBubble(`I want to know about ${keyword}`, 'user-msg');
  processBotBrainResponse(keyword);
}

// AI Engine Knowledge Database Context Simulation 
function processBotBrainResponse(input) {
  const query = input.toLowerCase();
  
  // Typing state component injection
  const typing = document.createElement('div');
  typing.className = 'typing-indicator';
  typing.id = 'typingIndicator';
  typing.innerText = 'Whoppy is typing...';
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    const indicator = document.getElementById('typingIndicator');
    if(indicator) indicator.remove();

    let botReply = "That's interesting! Let me connect you directly to our growth team on WhatsApp for details. Or type 'services' to see what we build! 🚀";

    if(query.includes('services') || query.includes('service') || query.includes('work')) {
      botReply = "We provide full 360° digital growth solutions! ✦ App & Shopify Build ✦ SEO Optimization ✦ Performance Meta/Google Funnel Ads ✦ D2C scaling. Which one are you looking for?";
    } else if(query.includes('pricing') || query.includes('price') || query.includes('cost') || query.includes('charge')) {
      botReply = "Our packages are fully customized based on your business targets! Let's build a free consultation map. Drop us a ping on WhatsApp at +916200379161.";
    } else if(query.includes('contact') || query.includes('human') || query.includes('speak') || query.includes('call')) {
      botReply = "Perfect! Opening direct WhatsApp hotline channel with our strategist. Click here: <a href='https://wa.me/916200379161' target='_blank' style='text-decoration:underline;color:#00f2fe;'>Chat on WhatsApp</a> 📲";
    }

    appendMessageBubble(botReply, 'bot-msg');
    if (typeof applyCursorHooks === "function") applyCursorHooks();
  }, 1100);
}


// ==========================================================================
// 🌟 NEW: PRELOADER EVENT LISTENER CONTROLLER (APPEND AT THE VERY BOTTOM)
// ==========================================================================
window.addEventListener('load', () => {
  const preloader = document.getElementById('customPreloader');
  if (preloader) {
    // Thoda delay taaki user animation dekh sake aur window smoothly reveal ho
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1200); 
  }
});

// ==========================================================================
// 🌟 NEW: LOADING SLIDE-UP & SCROLL DRIVEN HEADING ZOOM CONTROLLERS
// ==========================================================================

// 1. Loading Screen Smooth Slide-Up Engine
window.addEventListener('load', () => {
  const preloader = document.getElementById('customPreloader');
  if (preloader) {
    // 1.2 seconds ka delay taaki user preloader branding aur spinner dekh sake
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1200); 
  }
});

// 2. Real-Time Dynamic Scroll Heading Zoom Engine
const heroHeading = document.querySelector('.hero h1');

if (heroHeading) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Sirf tabhi calculate karein jab hero section viewport me visible ho (performance boost)
    if (scrollPosition <= 600) {
      // Base scale 1.0 se start hoga aur niche scroll karne par dheere-dheere 1.25 tak scale big hoga
      // 0.0005 factor ko change karke aap zoom ki speed ko control kar sakte hain
      const targetScale = 1 + (scrollPosition * 0.0005);
      
      // Scale ki maximum limit 1.25 par lock ki hai taaki heading screen se bahar na chali jaye
      const finalScale = Math.min(targetScale, 1.25);
      
      // Update hardware-accelerated matrix transforms
      heroHeading.style.transform = `scale(${finalScale})`;
    }
  });
}


// ==========================================================================
// 🌟 NEW: AUTOMATIC CHARACTER TYPEWRITER ENGINE (APPEND AT THE VERY BOTTOM)
// ==========================================================================
const wordsToType = [ "to Next Level", "via Web Dev", "via Paid Ads"];
let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isDeletingArrayString = false;
const targetTypewriterSpan = document.getElementById('typewriterText');

function startTypewriterLoop() {
  if (!targetTypewriterSpan) return;

  const currentFullWord = wordsToType[currentWordIndex];

  if (isDeletingArrayString) {
    // Character delete karne ka logic
    targetTypewriterSpan.textContent = currentFullWord.substring(0, currentCharacterIndex - 1);
    currentCharacterIndex--;
  } else {
    // Character type karne ka logic
    targetTypewriterSpan.textContent = currentFullWord.substring(0, currentCharacterIndex + 1);
    currentCharacterIndex++;
  }

  // Speed controls configuration
  let typingSpeed = isDeletingArrayString ? 40 : 100; // Delete tez hoga, typing smooth hogi

  // Agar poora word type ho gaya ho
  if (!isDeletingArrayString && currentCharacterIndex === currentFullWord.length) {
    typingSpeed = 1600; // Word type hone ke baad 1.6 seconds tak ruka rahega
    isDeletingArrayString = true;
  } 
  // Agar poora word delete ho gaya ho
  else if (isDeletingArrayString && currentCharacterIndex === 0) {
    isDeletingArrayString = false;
    currentWordIndex = (currentWordIndex + 1) % wordsToType.length; // Agla word index load hoga
    typingSpeed = 400; // Agla word shuru hone se pehle chota sa pause
  }

  setTimeout(startTypewriterLoop, typingSpeed);
}

// Initialize the typewriter execution chain on document bootup
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(startTypewriterLoop, 1500); // Preloader ke hatne ke baad shuru hoga
});



// service

// ---- Preloader Slide-Up Reset Controller ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('customPreloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 1000); 
  }
});



// ==========================================================================
// 🌟 GLOBAL HEADER & FOOTER AUTO-INJECTION SYSTEM (ALL PAGES SYNC)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const globalHeaderContainer = document.getElementById('mainHeader');
  const globalFooterContainer = document.getElementById('footer');

  // 1. Dynamic Navbar Engine (Matches your exact home page layout)
  if (globalHeaderContainer) {
    globalHeaderContainer.innerHTML = `
      <nav>
        <a href="/" class="logo"><div class="logo-mark">DW</div>Digital Whopper</a>
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="nav-cta">
          <a href="/" class="btn btn-gold">Enquire now</a>
        </div>
      </nav>
    `;
  }

  // 2. Dynamic Footer Engine (Matches your exact home page layout)
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
              <a href="/#about">About</a>
              <a href="/contact">Contact</a>
            </div>
            <div class="foot-col">
              <h4>Our services</h4>
              <a href="/services">App &amp; Shopify Development</a>
              <a href="/services">SEO &amp; SMO Optimisation</a>
              <a href="/services">E-Commerce</a>
              <a href="/services">Performance Marketing</a>
              <a href="/services">Web Design &amp; Development</a>
            </div>
            <div class="foot-col">
              <h4>Quick links</h4>
              <a href="/#blog">Blog</a>
              <a href="/#faq">FAQ</a>
              <a href="/#milestones">Our journey</a>
              <a href="https://wa.me/916200379161" target="_blank" rel="noopener">WhatsApp</a>
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
});
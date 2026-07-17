// highlight
// ==========================================================================
// 📈 LIGHT MATRIX 4-POINT LIVE COUNT-UP ENGINE
// ==========================================================================
function initMatrixCounters() {
  const counters = document.querySelectorAll('.dw-matrix-counter');
  
  if (counters.length === 0) return;

  const matrixObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // जैसे ही सेक्शन स्क्रीन पर 20% दिखाई देगा, एनीमेशन ट्रिगर होगा
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        let current = 0;
        // एनीमेशन की स्मूथनेस और ड्यूरेशन सेटिंग्स
        const duration = 2000; // 2 सेकंड में पूरा काउंट होगा
        const frameRate = 1000 / 60; // 60fps स्मूथनेस
        const totalFrames = Math.round(duration / frameRate);
        const stepIncrement = target / totalFrames;

        let frame = 0;

        function updateCount() {
          frame++;
          current += stepIncrement;

          if (frame >= totalFrames) {
            // एनीमेशन समाप्त होने पर फाइनल फिक्स वैल्यू सेट करना
            el.textContent = `${prefix}${target}${suffix}`;
          } else {
            // नंबर्स को राउंड फिगर में लाइव दिखाना
            el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            requestAnimationFrame(updateCount);
          }
        }

        // एनीमेशन चालू करें
        requestAnimationFrame(updateCount);
        // एक बार एनीमेशन चलने के बाद ऑब्जर्वर हटा दें ताकि बार-बार स्क्रॉल पर लोड न पड़े
        matrixObserver.unobserve(el);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => matrixObserver.observe(counter));
}

// डोम रेडी होने पर इंजन एक्टिवेट करें
document.addEventListener('DOMContentLoaded', () => {
  initMatrixCounters();
});



// onwer about
// ==========================================================================
// 📈 FOUNDER PORTRAIT FOOTER TRIPLE-NODE LIVE COUNT ENGINE
// ==========================================================================
function initOwnerCounters() {
  const ownerCounters = document.querySelectorAll('.owner-live-counter-o');
  if (ownerCounters.length === 0) return;

  const ownerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        
        let current = 0;
        const duration = 1800; // 1.8 सेकंड रनिंग टाइम
        const totalFrames = 60; 
        const stepIncrement = target / totalFrames;
        let frame = 0;

        function countUp() {
          frame++;
          current += stepIncrement;

          if (frame >= totalFrames) {
            el.textContent = `${prefix}${target}${suffix}`;
          } else {
            el.textContent = `${prefix}${Math.floor(current)}${suffix}`;
            requestAnimationFrame(countUp);
          }
        }
        requestAnimationFrame(countUp);
        ownerObserver.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  ownerCounters.forEach(c => ownerObserver.observe(c));
}

// DOM रेडी हुक बाइंडिंग
document.addEventListener('DOMContentLoaded', () => {
  initOwnerCounters();
});



// brand section
if (typeof applyCursorHooks === "function") {
  const ecosystemPads = document.querySelectorAll('.partner-logo-pad-e');
  ecosystemPads.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hovering'));
  });
}


// testimonial section
// ==========================================================================
// 🎡 WHATSAPP TESTIMONIALS ZIG-ZAG LOOP RUNNER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const testimonialData = [
    {
      id: 1,
      name: "Mani Brand",
      status: "Online",
      className: "card-angle-left",
      messages: [
        { type: "received", text: "How is the performance this month?" },
        { type: "sent", text: "Sir, we hit a 4.5x ROAS today! Growth is consistent." },
        { type: "received", text: "Brilliant work team! Keep it up. 🚀" }
      ]
    },
    {
      id: 2,
      name: "Ekatra Founder",
      status: "last seen today",
      className: "card-angle-right",
      messages: [
        { type: "received", text: "Organic traffic is skyrocketing after the SEO audit." },
        { type: "sent", text: "Yes! Impression scale almost doubled this week." },
        { type: "received", text: "Shark Tank pitch went amazing, thanks to the visibility! 🦈" }
      ]
    },
    {
      id: 3,
      name: "Gudmishri",
      status: "Online",
      className: "card-angle-left-subtle",
      messages: [
        { type: "received", text: "The new e-commerce storefront UI UX looks beautiful." },
        { type: "sent", text: "Thank you! Conversion rates should improve now." },
        { type: "received", text: "Already seeing 20% more checkouts today! 🔥" }
      ]
    },
    {
      id: 4,
      name: "Homearte",
      status: "Online",
      className: "card-angle-right-subtle",
      messages: [
        { type: "received", text: "Are the performance ads active?" },
        { type: "sent", text: "Live since morning. Leads are dropping in at lowest CPA." },
        { type: "received", text: "Amazing, let's scale the budget! 📈" }
      ]
    }
  ];

  const track = document.getElementById('testimonialTrack');
  if (!track) return;

  // इनफिनिट स्क्रॉल लूप को बिना किसी लैग के चलाने के लिए ओरिजिनल डेटा का डुप्लीकेट (Clone) सेट बनाना
  const repeatedData = [...testimonialData, ...testimonialData, ...testimonialData];

  // HTML रेंडरिंग ब्लॉक
  track.innerHTML = repeatedData.map(item => {
    const msgHTML = item.messages.map(m => `<div class="wp-msg ${m.type}">${m.text}</div>`).join('');
    const statusHTML = item.status ? `<span class="wp-chat-status">${item.status}</span>` : '';
    
    return `
      <div class="wp-chat-card ${item.className}">
        <div class="wp-chat-header">
          <span class="wp-chat-name">${item.name}</span>
          ${statusHTML}
        </div>
        <div class="wp-chat-body">
          ${msgHTML}
        </div>
      </div>
    `;
  }).join('');
});
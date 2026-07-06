// ---- Preloader System Trigger ----
window.addEventListener('load', () => {
  const preloader = document.getElementById('customPreloader');
  if (preloader) {
    setTimeout(() => preloader.classList.add('fade-out'), 1000);
  }
});

// ---- Custom Cyber Cursor Tracker ----
const cursorDot = document.getElementById('customCursor');
const cursorBlur = document.getElementById('customCursorBlur');

if (cursorDot && cursorBlur && window.innerWidth > 900) {
  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.transform = `translate3d(${posX - 4}px, ${posY - 4}px, 0)`;
    cursorBlur.style.transform = `translate3d(${posX - 17}px, ${posY - 17}px, 0)`;
  });
}

// ---- Scroll Reveal Framework ----
const revealSections = document.querySelectorAll('.scroll-reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.1 });
revealSections.forEach(s => revealObserver.observe(s));


// --------------------------------------------------
// 📊 SERVICES INTEL DATA DATA AND CLICK TRIGGERS
// --------------------------------------------------
const serviceDatabase = [
  {
    title: "Paid Media Strategy",
    icon: "📈",
    desc: "We plan, execute, and scale aggressive ad matrix campaigns across Meta and Google networks. No vanity metrics—pure focus on incremental margins and volume scalability.",
    features: ["Funnel Architecture Planning", "CBO Scaling Protocols", "Ad Creative Matrix Mapping", "ROAS Optimization System"]
  },
  {
    title: "SEO Domination Systems",
    icon: "🔍",
    desc: "Reverse-engineering organic search behavior. We build scalable content clusters, high-authority backlink parameters, and technical speed frameworks that win rank positions permanently.",
    features: ["Intent Keyword Architecture", "Core Web Vitals Boost", "High-Velocity Link Outreach", "Semantic Content Mapping"]
  },
  {
    title: "Shopify Conversion Engines",
    icon: "🛒",
    desc: "Standard themes limit revenue potential. We develop bespoke, lightning-fast Shopify headless architectures engineered exclusively to maximize average order value (AOV) and lifetime value.",
    features: ["Custom Liquid Programming", "One-Page Instant Checkout", "Retention Flow Integrations", "Speed Performance Locking"]
  },
  {
    title: "UI/UX Cyber Blueprints",
    icon: "🖼️",
    desc: "Design is product psychology. We create high-fidelity high-contrast dark wireframes and user journeys built to reduce bounce rates and enforce micro-actions.",
    features: ["Interactive Wireframing", "Figma Prototype Execution", "Conversion Heatmap Tuning", "Neuromarketing Visual Tones"]
  },
  {
    title: "Scalable Application Build",
    icon: "🔗",
    desc: "Deploying production-ready native mobile software and robust server systems capable of handling heavy database loads and real-time client micro-interactions flawlessly.",
    features: ["Cross-Platform App Engines", "Node.js Secure Backend Architecture", "API Connection Mapping", "Database Cloud Tuning"]
  },
  {
    title: "Social Authority Launch",
    icon: "📢",
    desc: "Attention is the new global currency. We direct short-form retention architectures (Reels/TikToks) designed to construct thousands of absolute organic core brand advocates daily.",
    features: ["Script Hook Blueprints", "High-Retention Editing Systems", "Creator Alignment Pipelines", "Multi-Channel Virality Map"]
  }
];

// Open Click Console 
function openServiceConsole(index) {
  const data = serviceDatabase[index];
  if(!data) return;

  document.getElementById('modalIcon').innerText = data.icon;
  document.getElementById('modalTitle').innerText = data.title;
  document.getElementById('modalDescription').innerText = data.desc;

  // Render bullet list items dynamically
  const featuresList = document.getElementById('modalFeatures');
  featuresList.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

  // Show Modal Overlay Smoothly
  document.getElementById('serviceModal').classList.add('console-open');
}

// Close Console 
function closeServiceConsole() {
  document.getElementById('serviceModal').classList.remove('console-open');
}

// Click outside window close handler
document.getElementById('serviceModal').addEventListener('click', (e) => {
  if(e.target.id === 'serviceModal') closeServiceConsole();
});
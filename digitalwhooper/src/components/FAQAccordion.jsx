import React, { useState } from 'react';

function FAQAccordion() {
  // 🌟 State parameters to securely check which item index is currently opened
  const [openIndex, setOpenIndex] = useState(0); // Zero means first default index starts expanded[cite: 2]

  const queries = [
    { q: "Which e-commerce platforms does Digital Whopper manage?", a: "We manage stores across all major platforms — Amazon, Flipkart, Etsy, Shopify and more — handling listings, optimisation, ads and growth end to end." },
    { q: "Does Digital Whopper also help with website design and UI/UX?", a: "Yes — our in-house design team handles everything from wireframes to fully built, conversion-focused websites and storefronts." },
    { q: "Which industrial sectors does Digital Whopper work with?", a: "We work across diverse sectors — fashion, home décor, D2C startups, retail, services and more. Our strategies adapt to your industry." },
    { q: "Does Digital Whopper provide regular progress reports?", a: "Yes, you'll receive clear, regular reports so you always know exactly what's working and where your budget is going." },
    { q: "What are the charges for digital marketing services?", a: "Pricing depends on your goals and scope — get in touch for a free consultation and a plan tailored to your budget." }
  ]; //[cite: 2]

  const handleToggle = (idx) => {
    // Agar click kiya hua single accordion pehle se open hai, to toggle collapse karega varna next panel toggle open
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-reveal">
      <div className="wrap">
        <div className="eyebrow">FAQ</div>
        <h2 className="h2 text-shine">Frequently asked questions</h2>
        <div className="faq-list">
          {queries.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={idx}>
                <div className="faq-q" onClick={() => handleToggle(idx)}>
                  {item.q}
                  <span className="plus">+</span>
                </div>
                <div 
                  className="faq-a" 
                  style={{ 
                    maxHeight: isOpen ? '200px' : '0', 
                    paddingBottom: isOpen ? '200px' ? '20px' : '0' : '0',
                    transition: 'max-height 0.3s ease, padding 0.3s ease' 
                  }}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQAccordion;

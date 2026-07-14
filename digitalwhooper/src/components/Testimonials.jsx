import React from 'react';
import './Testimonials.css'; // Extracted stylesheet mapping hook

// 🌟 Testimonials Data Repository Array
const testimonialsData = [
  { rating: 5, text: "The team is quite supportive — they patiently listen to every query and understand exactly what is needed. Our online visibility has improved significantly.", initials: "NR", name: "Nikita Roy", role: "Fashion Brand Owner" },
  { rating: 4.8, text: "We wanted a partner who could help us rank at the top of search results. Soon after starting with Digital Whopper's SEO team, we began seeing positive results. Truly professional.", initials: "SS", name: "Saurabh Sharma", role: "Founder, Home Décor Business" },
  { rating: 4.8, text: "I ran an offline store and wanted to take it online, but my own attempts didn't deliver. Digital Whopper ran campaigns that brought great ROI — really happy!", initials: "DS", name: "Dev Saxena", role: "Small Business Owner" },
  { rating: 4.8, text: "Thanks to Digital Whopper's social media team, our reach has grown remarkably over the past few months. We're really satisfied with their work.", initials: "SY", name: "Shruti Yadav", role: "Influencer" }
];

function Testimonials() {
  // Infinite running space fill karne ke liye split arrays ko quadrupled structure diya
  const half = Math.ceil(testimonialsData.length / 2);
  const firstRowData = testimonialsData.slice(0, half);
  const secondRowData = testimonialsData.slice(half);

  const quadrupledFirstRow = [...firstRowData, ...firstRowData, ...firstRowData, ...firstRowData];
  const quadrupledSecondRow = [...secondRowData, ...secondRowData, ...secondRowData, ...secondRowData];

  // Card layout structural loop builder template block
  const renderCard = (t, index) => (
    <div className="test-card" key={index}>
      <span className="stars">★★★★★</span>
      <span className="test-score">{t.rating}</span>
      <p>"{t.text}"</p>
      <div className="test-who">
        <div className="avatar">{t.initials}</div>
        <div>
          <b>{t.name}</b>
          <span>{t.role}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="scroll-reveal">
      <div className="wrap">
        <div className="eyebrow">Testimonials</div>
        <h2 className="h2 text-shine">Results our clients talk about</h2>
        <p className="lead">
          We're not merely boasting — our clients have seen real transformation. 
          Here's what they say about the results we delivered.
        </p>
      </div>

      <div className="test-row">
        {/* Row 1 - Infinite Left Animation Track */}
        <div className="test-track-carousel-1">
          {quadrupledFirstRow.map((t, idx) => renderCard(t, idx))}
        </div>
        
        {/* Row 2 - Infinite Right Animation Track */}
        <div className="test-track-carousel-2" style={{ marginTop: '24px' }}>
          {quadrupledSecondRow.map((t, idx) => renderCard(t, idx))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

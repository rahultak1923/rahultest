import React from 'react';

function StrategySection() {
  // Strategy cards data layer list
  const strategies = [
    { num: "01", title: "The Spark", desc: "Turning vision to reality" },
    { num: "02", title: "Foundation", desc: "Blending technology with human creativity" },
    { num: "03", title: "Strategic Growth", desc: "Scale with vision" },
    { num: "04", title: "Digital Excellence", desc: "Passion, precision, and mastery" },
    { num: "05", title: "Innovation Drive", desc: "Pushing boundaries with unique strategies" },
    { num: "06", title: "Client Expansion", desc: "Building across diverse sectors" }
  ]; //[cite: 2]

  return (
    <section id="about" className="scroll-reveal">
      <div className="wrap">
        <div className="eyebrow">Our strategy</div>
        <h2 className="h2 text-shine">From spark to scale</h2>
        <div className="strategy-grid">
          {strategies.map((item, index) => (
            <div className="strategy-card" key={index}>
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrategySection;


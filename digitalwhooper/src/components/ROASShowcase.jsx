import React, { useState } from 'react';

function ROASShowcase() {
  // 🌟 Component local state for active view dashboard control
  const [displayState, setDisplayState] = useState('before'); // 'before' or 'after'

  return (
    <div className="roas-impact-showcase" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(0, 82, 255, 0.08)', borderRadius: '24px', padding: '40px', marginBottom: '56px', boxShadow: '0 20px 40px rgba(0, 82, 255, 0.03)', width: '100%' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
       // Line 11 ke inner section ko is tarah wrap karein (quotes ke sath):
<div 
  className="eyebrow" 
  style={{ 
    color: '#10b981', 
    background: 'rgba(16, 185, 129, 0.05)', // Fixed here (added string quotes)
    borderColor: 'rgba(16, 185, 129, 0.12)' 
  }}
>
  Case Comparison
</div>
        <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '26px', fontWeight: 800, color: '#0a0f18', marginBottom: '12px' }}>The ROI Multiplication Engine</h3>
        <p style={{ color: '#5c6b82', fontSize: '15px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>Compare the performance matrix side-by-side. Toggle the state buttons below to analyze how our custom architectures instantly lock platform leaks.</p>
      </div>

      <div className="roas-dual-display-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: "24px", marginBottom: '32px', width: '100%' }}>
        
        {/* Left Side View Panel - Store Analytics */}
        <div className="roas-view-panel" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '340px', background: '#0c0c0f', border: '1px solid rgba(0, 82, 255, 0.06)', boxShadow: 'var(--card-shadow-default)' }}>
          <img 
            src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=760&q=68" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease', opacity: displayState === 'before' ? 1 : 0, transform: displayState === 'before' ? 'scale(1)' : 'scale(0.98)' }} 
            alt="Left Before View" 
          />
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=760&q=68" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease', opacity: displayState === 'after' ? 1 : 0, transform: displayState === 'after' ? 'scale(1)' : 'scale(0.98)' }} 
            alt="Left After View" 
          />
          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(10, 15, 24, 0.75)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', zIndex: 5 }}>Store Analytics View</div>
        </div>

        {/* Right Side View Panel - Marketing Funnel */}
        <div className="roas-view-panel" style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '340px', background: '#0c0c0f', border: '1px solid rgba(0, 82, 255, 0.06)', boxShadow: 'var(--card-shadow-default)' }}>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=760&q=68" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease', opacity: displayState === 'before' ? 1 : 0, transform: displayState === 'before' ? 'scale(1)' : 'scale(0.98)' }} 
            alt="Right Before View" 
          />
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=760&q=68" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'all 0.5s ease', opacity: displayState === 'after' ? 1 : 0, transform: displayState === 'after' ? 'scale(1)' : 'scale(0.98)' }} 
            alt="Right After View" 
          />
          <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(10, 15, 24, 0.75)', backdropFilter: 'blur(8px)', color: '#fff', padding: '6px 14px', borderRadius: '30px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', zIndex: 5 }}>Marketing ROAS Funnel</div>
        </div>

      </div>

      {/* Controller Buttons Grid Element */}
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        
        <div className="roas-toggle-container" style={{ display: 'inline-flex', background: '#edf2f9', padding: '6px', borderRadius: '99px', border: '1px solid rgba(0, 82, 255, 0.05)' }}>
          <button 
            className={`combo-toggle-btn ${displayState === 'before' ? 'active-state' : ''}`} 
            onClick={() => setDisplayState('before')}
            style={{ padding: '12px 28px', border: 'none', background: 'none', fontFamily: 'Sora, sans-serif', fontSize: '13px', fontWeight: 700, borderRadius: '99px', cursor: 'pointer', transition: 'all 0.3s ease', color: '#5c6b82' }}
          >
            Before Audit
          </button>
          <button 
            className={`combo-toggle-btn ${displayState === 'after' ? 'active-state' : ''}`} 
            onClick={() => setDisplayState('after')}
            style={{ padding: '12px 28px', border: 'none', background: 'none', fontFamily: 'Sora, sans-serif', fontSize: '13px', fontWeight: 700, borderRadius: '99px', cursor: 'pointer', transition: 'all 0.3s ease', color: '#5c6b82' }}
          >
            After Whopper Engine
          </button>
        </div>

        {/* Dynamic State Metrics Indicator */}
        <div 
          id="dualMetricPill" 
          style={{ 
            padding: '12px 24px', 
            borderRadius: '99px', 
            fontFamily: 'Sora, sans-serif', 
            fontWeight: 800, 
            fontSize: '14.5px', 
            color: '#ffffff', 
            background: displayState === 'before' ? '#ef4444' : '#10b981', 
            boxShadow: displayState === 'before' ? '0 8px 20px rgba(239, 68, 68, 0.25)' : '0 8px 20px rgba(16, 185, 129, 0.3)', 
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
          }}
        >
          {displayState === 'before' ? "Status: Purchase ROAS is locked at 1.4" : "Status: Purchase ROAS scaled to 7.6 🔥"}
        </div>

      </div>

    </div>
  );
}

export default ROASShowcase;

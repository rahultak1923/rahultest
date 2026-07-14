import React from 'react';

// 🌟 Sabhi client images ko manually top par import kiya aapke custom path ke mutabik
import logoGudmishri from '../assets/img/client/gudmishri.webp';
import logoHomearte from '../assets/img/client/homearte.webp';
import logo1 from '../assets/img/client/logo(1).webp';
import logo10 from '../assets/img/client/logo(10).webp';
import logo2 from '../assets/img/client/logo(2).webp';
import logo3 from '../assets/img/client/logo(3).webp';
import logo4 from '../assets/img/client/logo(4).webp';
import logo6 from '../assets/img/client/logo(6).webp';
import logo7 from '../assets/img/client/logo(7).webp';
import logo8 from '../assets/img/client/logo(8).webp';
import logo1_alt from '../assets/img/client/logo-1.webp';
import logoMeenal from '../assets/img/client/meenal.webp';

function ClientsCarousel() {
  // Brand logo array me string path ki jagah imported variables ko set kiya
  const clientLogos = [
    { src: logoGudmishri, alt: "Gudmishri Logo" },
    { src: logoHomearte, alt: "Homearte Logo" },
    { src: logo1, alt: "Mani Logo" },
    { src: logo10, alt: "Corporate Partner Asset A" },
    { src: logo2, alt: "Corporate Partner Asset B" },
    { src: logo3, alt: "Gudmishri Logo" },
    { src: logo4, alt: "Homearte Logo" },
    { src: logo6, alt: "Mani Logo" },
    { src: logo7, alt: "Corporate Partner Asset A" },
    { src: logo8, alt: "Corporate Partner Asset B" },
    { src: logo1_alt, alt: "Corporate Partner Asset B" },
    { src: logoMeenal, alt: "Corporate Partner Asset B" }
  ];

  // Infinite smooth scroll ko fill rakhne ke liye array ko duplicate loop block diya hai
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="clients-carousel-section scroll-reveal" style={{ marginTop: '2rem' }}>
      <div className="infinite-track-container">
        <div className="carousel-infinite-row">
          {doubledLogos.map((logo, index) => (
            <div className="client-logo-box" key={index}>
              {/* React variables binding logic using curly braces */}
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsCarousel;
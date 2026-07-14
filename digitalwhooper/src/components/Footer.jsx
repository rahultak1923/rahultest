import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="foot-top">
          <div class="foot-brand">
            <a href="/" class="logo"><div class="logo-mark">DW</div>Digital Whopper</a>
            <p>3rd Floor, 4/11, Vidyut Abhiyanta Colony, Sector 4, Malviya Nagar, Jaipur, Rajasthan 302017</p>
            <p>
              <a href="tel:+916200379161">+91 6200379161</a><br />
              <a href="mailto:hello@digitalwhopper.com">hello@digitalwhopper.com</a>
            </p>
            <div class="socials">
              <a href="https://www.facebook.com/officialdigitalwhopper" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/digital_whopper/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/digitalwhopper/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="foot-links">
            <div className="foot-col">
              <h4>Pages</h4>
              <a href="/">Home</a>
              <a href="/services">Services</a>
              <a href="/#about">About</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="foot-col">
              <h4>Our services</h4>
              <a href="/services">App &amp; Shopify Development</a>
              <a href="/services">SEO &amp; SMO Optimisation</a>
              <a href="/services">E-Commerce</a>
              <a href="/services">Performance Marketing</a>
              <a href="/services">Web Design &amp; Development</a>
            </div>
            <div className="foot-col">
              <h4>Quick links</h4>
              <a href="/#blog">Blog</a>
              <a href="/#faq">FAQ</a>
              <a href="/#milestones">Our journey</a>
              <a href="https://wa.me/916200379161" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Digital Whopper. All rights reserved.</span>
          <span>Made with ✦ in Jaipur, the Pink City</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
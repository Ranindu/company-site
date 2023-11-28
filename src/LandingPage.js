import React from 'react';
import bannerImage from './images/banners/myBanner-1920x595.png';
import './LandingPage.css'; // Ensure you have this CSS file in your project

function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">Your Business Name</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero-banner">
        <img src={bannerImage} alt="Banner" />
        <div className="banner-content">
          <h1>Leading SEO Agency</h1>
          <p>Your tagline or brief description goes here.</p>
          <button>Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>Our Services</h2>
        {/* Add your service descriptions here */}
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <h2>Testimonials</h2>
        {/* Add testimonials here */}
      </section>

      {/* Contact Form */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        {/* Add contact form here */}
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2023 Your Business Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
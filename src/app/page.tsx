'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroMessageRef = useRef<HTMLParagraphElement>(null);

  const heroImages = [
    '/assets/hero-trade.png',
    '/assets/hero-healthcare.png',
    '/assets/hero-electromechanical.png',
    '/assets/hero-it.png'
  ];

  const heroMessages = [
    'Delivering IT consulting, electromechanical works, and health and hospital solutions for organizations across Ethiopia.',
    'Mindray DigiEye 330 systems support high-resolution imaging, fast acquisition, and smoother diagnostic workflow.',
    'Electromechanical works designed to support reliable, day-to-day operations.',
    'IT consulting that helps teams build practical, dependable technology systems.'
  ];

  useEffect(() => {
    // Hero slideshow
    const slideInterval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    if (heroImageRef.current) {
      heroImageRef.current.style.backgroundImage = `url("${heroImages[heroSlide]}")`;
    }
    if (heroMessageRef.current) {
      heroMessageRef.current.textContent = heroMessages[heroSlide];
    }
  }, [heroSlide]);

  useEffect(() => {
    // Intersection Observer for nav links
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.site-nav a');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
            });
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header" id="top">
        <a className="brand" href="#home" aria-label="Firansibekan home">
          <img src="/assets/logo.jpg" alt="Firansibekan logo" />
          <span><strong>FIRANSIBEKAN</strong><small>Trade & Investment</small></span>
        </a>
        <button 
          className="menu-button" 
          aria-expanded={isMenuOpen} 
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span><span></span>
        </button>
        <nav id="main-navigation" className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
          <a className="active" href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#divisions" onClick={() => setIsMenuOpen(false)}>Departments</a>
          <a href="#partnerships" onClick={() => setIsMenuOpen(false)}>Partners</a>
          <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Leadership</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Location</a>
        </nav>
        <div className="header-actions"><a className="location" href="#contact">Location</a><a className="call" href="tel:+251911280885">Call Now</a></div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-image" ref={heroImageRef} role="img" aria-label="Firansibekan project work"></div>
          <div className="hero-wash"></div>
          <div className="hero-content">
            <p className="eyebrow"><i></i> Addis Ababa, Ethiopia · IT, engineering & healthcare</p>
            <h1>Firansibekan<br /><span>Connecting the dots, makes all the difference.</span></h1>
            <p className="hero-copy" id="heroMessage" ref={heroMessageRef}>
              Delivering IT consulting, electromechanical works, and health and hospital solutions for organizations across Ethiopia.
            </p>
            <div className="hero-actions"><a className="button button-primary" href="#divisions">Explore our divisions <b>→</b></a><a className="text-link" href="#contact">Start a conversation <b>↗</b></a></div>
          </div>
          <div className="hero-stats" aria-label="Firansibekan at a glance">
            <article><span>01</span><strong>1,102 followers</strong><p>Sharing company and product updates.</p></article>
            <article><span>02</span><strong>3 core areas</strong><p>IT, engineering, and healthcare.</p></article>
            <article><span>03</span><strong>3-person team</strong><p>Focused technical support.</p></article>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to discover</span><i>↓</i></a>
        </section>

        <section id="about" className="intro section">
          <div className="section-shell">
            <div className="section-kicker">01 — WHO WE ARE</div>
            <div className="intro-grid"><h2>Technical solutions for <em>essential work.</em></h2><div><p className="lead">Firansibekan Trade and Investment is based in Addis Ababa and works across IT and IT consulting, electromechanical works, and health and hospital solutions. We support practical, reliable systems for the organizations we serve.</p><a className="arrow-link" href="#expertise">Discover our approach <b>→</b></a></div></div>
          </div>
        </section>

        <section id="divisions" className="divisions section">
          <div className="section-shell">
            <div className="section-heading"><div><div className="section-kicker">02 — OUR FOCUS AREAS</div><h2>Specialist solutions.<br /><em>Practical delivery.</em></h2></div><p>Our work brings together technical consulting, electromechanical capability, and healthcare-focused systems to support day-to-day operations.</p></div>
            <div className="division-grid">
              <a className="division-card large" href="#contact"><img src="/assets/hero-healthcare.png" alt="Health and hospital solutions" /><div><span>01 / Health & hospitals</span><h3>Diagnostic systems<br />for better care.</h3><b>Explore <i>→</i></b></div></a>
              <a className="division-card" href="#contact"><img src="/assets/hero-it.png" alt="IT and IT consulting" /><div><span>02 / IT & IT consulting</span><h3>Technology that<br />supports the work.</h3><b>Explore <i>→</i></b></div></a>
              <a className="division-card" href="#contact"><img src="/assets/hero-electromechanical.png" alt="Electromechanical works" /><div><span>03 / Electromechanical works</span><h3>Reliable systems<br />for daily operations.</h3><b>Explore <i>→</i></b></div></a>
              <a className="division-card wide" href="#contact"><img src="/assets/hero-trade.png" alt="Mindray DigiEye 330 digital X-ray system" /><div><span>04 / Medical imaging</span><h3>Mindray DigiEye 330<br />Digital X-Ray System.</h3><b>Enquire now <i>→</i></b></div></a>
            </div>
          </div>
        </section>

        <section id="expertise" className="expertise">
          <div className="expertise-photo"><img src="/assets/founder.png" alt="Firansibekan leadership" /><span>FIRANSIBEKAN / 2012—TODAY</span></div>
          <div className="expertise-copy"><div className="section-kicker">03 — OUR APPROACH</div><h2>Precision from<br />setup to support.</h2><p>Our recent healthcare work includes installation of the Mindray DigiEye 330 Digital X-Ray System. The system supports high-resolution imaging, fast acquisition, and a smoother diagnostic workflow.</p><ul><li><b>01</b> High-resolution digital imaging</li><li><b>02</b> User-focused system setup</li><li><b>03</b> Technical service and support</li></ul><a href="#contact" className="button button-dark">Talk to our team <b>→</b></a></div>
        </section>

        <section id="partnerships" className="partners section">
          <div className="section-shell">
            <div><div className="section-kicker">04 — PARTNERSHIPS</div><h2>Better together,<br /><em>built to last.</em></h2></div>
            <div className="partner-list"><article><span>01</span><h3>Healthcare facilities</h3><p>Supporting hospitals and healthcare providers with digital radiography systems and technical delivery.</p></article><article><span>02</span><h3>IT and engineering clients</h3><p>Providing IT consulting and electromechanical work that helps teams operate with confidence.</p></article><article><span>03</span><h3>Mindray technology</h3><p>Delivering digital imaging systems designed for clear images, efficient workflow, and patient care.</p></article></div>
          </div>
        </section>
        <section className="statement"><p>“Connecting the dots,<br />makes all the difference.”</p><span>FIRANSIBEKAN</span></section>
      </main>

      <footer id="contact" className="footer">
        <div className="section-shell">
          <div className="footer-top"><div><p className="eyebrow"><i></i> LET'S TALK ABOUT YOUR NEEDS</p><h2>Need a system<br />or service?</h2></div><a href="mailto:info@firansibekan.com" className="footer-email">info@firansibekan.com <b>↗</b></a></div>
          <div className="footer-bottom"><div className="footer-brand"><img src="/assets/logo.jpg" alt="" /><span>FIRANSIBEKAN<small>Trade & Investment</small></span></div><p>Bole Atlas Area, Century Executive Tower, 9th Floor,<br />Room No. 09-A-01, Addis Ababa, Ethiopia<br /><a href="tel:+251911280885">+251 911 280 885</a> / <a href="tel:+251118550009">+251 11 855 0009</a><br /><a href="https://www.firansibekan.com">https://www.firansibekan.com</a></p><p>© 2026 Firansibekan<br />All rights reserved.</p></div>
        </div>
      </footer>
    </>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import OurValues from '@/components/OurValues';
import WhyChooseUs from '@/components/WhyChooseUs';
import OurProcess from '@/components/OurProcess';
import Testimonials from '@/components/Testimonials';
import Impact from '@/components/Impact';
import CTA from '@/components/CTA';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [heroSlide, setHeroSlide] = useState(0);
  const navRef = useRef<HTMLElement>(null);
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

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown((current) => current === dropdown ? null : dropdown);
  };

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
        <nav ref={navRef} id="main-navigation" className={`site-nav ${isMenuOpen ? 'open' : ''}`}>
          <a className="active" href="#home" onClick={handleNavLinkClick}>Home</a>
          <a href="#about" onClick={handleNavLinkClick}>About</a>
          
          <div className={`dropdown ${activeDropdown === 'departments' ? 'open' : ''}`}>
            <button
              type="button"
              className="dropdown-toggle"
              aria-expanded={activeDropdown === 'departments'}
              onClick={() => toggleDropdown('departments')}
            >
              <span>Departments</span>
              <i aria-hidden="true">⌄</i>
            </button>
            <div className="dropdown-menu">
              <a href="#divisions" onClick={handleNavLinkClick}>Health & Hospitals</a>
              <a href="#divisions" onClick={handleNavLinkClick}>IT & IT Consulting</a>
              <a href="#divisions" onClick={handleNavLinkClick}>Electromechanical Works</a>
              <a href="#divisions" onClick={handleNavLinkClick}>Medical Imaging</a>
            </div>
          </div>

          <a href="#partnerships" onClick={handleNavLinkClick}>Partners</a>
          <a href="#leadership" onClick={handleNavLinkClick}>Leadership</a>
          
          <div className={`dropdown ${activeDropdown === 'more' ? 'open' : ''}`}>
            <button
              type="button"
              className="dropdown-toggle"
              aria-expanded={activeDropdown === 'more'}
              onClick={() => toggleDropdown('more')}
            >
              <span>More</span>
              <i aria-hidden="true">⌄</i>
            </button>
            <div className="dropdown-menu">
              <a href="#values" onClick={handleNavLinkClick}>Our Values</a>
              <a href="#why-us" onClick={handleNavLinkClick}>Why Choose Us</a>
              <a href="#process" onClick={handleNavLinkClick}>Our Process</a>
              <a href="#testimonials" onClick={handleNavLinkClick}>Testimonials</a>
              <a href="#impact" onClick={handleNavLinkClick}>Impact</a>
            </div>
          </div>

          <a href="#contact" onClick={handleNavLinkClick}>Location</a>
        </nav>
        <div className="header-actions"><a className="call" href="tel:+251911280885">Call Now</a></div>
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

        <section id="about" className="about section">
          <div className="section-shell">
            <div className="section-kicker">01 — ABOUT FIRANSIBEKAN</div>
            
            <div className="about-grid">
              <div className="about-text">
                <h2>Connecting Expertise.<br /><em>Creating Opportunities.</em></h2>
                
                <p>Firansibekan Trade and Investment is an Ethiopian company committed to connecting businesses, institutions, and communities with reliable products, technologies, and practical solutions.</p>
                
                <p>Our work spans multiple sectors, including healthcare and medical equipment, laboratory solutions, medicine and healthcare products, beauty and personal care, sanitary products, IT consulting, and electromechanical services.</p>
                
                <p>Through our diverse capabilities and sector-focused approach, we aim to deliver solutions that respond to real needs and create lasting value. We believe that successful business is built on quality, reliability, technical expertise, and strong partnerships.</p>
                
                <p>As we continue to grow, Firansibekan remains focused on creating meaningful opportunities and contributing to the development of the sectors and communities we serve.</p>
                
                <div className="about-approach">
                  <h3>Our Approach</h3>
                  <p>We listen to the needs of our clients, identify the right solutions, and work to deliver reliable products and services with professionalism and commitment.</p>
                  <a className="button button-primary" href="#divisions">Explore our services <b>→</b></a>
                </div>
              </div>
              
              <div className="about-visual">
                <div className="about-image-placeholder">
                  <div className="image-item">
                    <img src="/assets/hero-healthcare.png" alt="Medical equipment" />
                  </div>
                  <div className="image-item">
                    <img src="/assets/hero-electromechanical.png" alt="Technical/electromechanical work" />
                  </div>
                  <div className="image-item">
                    <img src="/assets/hero-it.png" alt="IT/technology" />
                  </div>
                  <div className="image-item">
                    <img src="/assets/hero-trade.png" alt="Personal care products" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-kicker">01</div>
                <h3>Diverse Expertise</h3>
                <p>Solutions across multiple sectors.</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-kicker">02</div>
                <h3>Reliable Solutions</h3>
                <p>Focused on quality and practical results.</p>
              </div>
              <div className="highlight-item">
                <div className="highlight-kicker">03</div>
                <h3>Built on Partnership</h3>
                <p>Creating long-term value through collaboration.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="divisions" className="departments section">
          <div className="section-shell">
            <div className="section-kicker">02 — OUR DEPARTMENTS</div>
            <div className="departments-heading">
              <h2>Specialized teams.<br /><em>Practical solutions.</em></h2>
              <p>Firansibekan brings together expertise across healthcare, technology, and technical services to deliver solutions that meet the needs of institutions and businesses.</p>
            </div>
            
            <div className="departments-grid">
              <div className="department-card">
                <div className="department-icon">🏥</div>
                <h3>Health & Hospitals</h3>
                <p>Supporting healthcare institutions with products, solutions, and services that contribute to better healthcare delivery.</p>
              </div>
              
              <div className="department-card">
                <div className="department-icon">💻</div>
                <h3>IT & IT Consulting</h3>
                <p>Providing practical technology solutions and consulting to help organizations improve their digital capabilities.</p>
              </div>
              
              <div className="department-card">
                <div className="department-icon">⚙️</div>
                <h3>Electromechanical Works</h3>
                <p>Delivering technical expertise and solutions for electromechanical systems, equipment, and related projects.</p>
              </div>
              
              <div className="department-card">
                <div className="department-icon">🩺</div>
                <h3>Medical Imaging</h3>
                <p>Providing advanced medical imaging solutions and equipment to support accurate diagnosis and modern healthcare services.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="partnerships" className="partners section">
          <div className="section-shell">
            <div className="section-kicker">03 — OUR PARTNERS</div>
            
            <div className="partners-heading">
              <h2>Trusted Technology.<br /><em>Strong Partnerships.</em></h2>
              <p>We collaborate with trusted manufacturers and industry partners to deliver reliable solutions across healthcare and technical sectors.</p>
            </div>
            
            <div className="partners-content">
              <div className="partner-featured">
                <div className="partner-label">Featured technology partner:</div>
                
                <div className="partner-card">
                  <div className="partner-logo">
                    <div className="logo-placeholder">
                      <span className="logo-text">mindray</span>
                      <span className="logo-tagline">healthcare within reach</span>
                    </div>
                  </div>
                  <h3>Mindray — Medical imaging and healthcare technology</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="leadership">
          <div className="section-shell">
            <div className="section-kicker">04 — LEADERSHIP</div>
            
            <div className="leadership-heading">
              <h2>Guided by Vision.<br /><em>Driven by Purpose.</em></h2>
              <p>Our leadership brings together vision, experience, and commitment to guide Firansibekan's growth and deliver meaningful solutions across the sectors we serve.</p>
            </div>
            
            <div className="leadership-card">
              <div className="leader-photo">
                <img src="/assets/founder.png" alt="Gebremariam Atsbha Gebreyohannes" />
              </div>
              
              <div className="leader-info">
                <h3>Gebremariam Atsbha Gebreyohannes</h3>
                <div className="leader-title">General Manager</div>
                <p>As General Manager of Firansibekan Trade and Investment, Gebremariam Atsbha Gebreyohannes contributes to the company's strategic direction, daily operations, and continued growth across its diverse business sectors.</p>
                <p>With a focus on professionalism, collaboration, and sustainable growth, he helps guide the company in delivering reliable solutions and building strong relationships with clients and partners.</p>
              </div>
            </div>
          </div>
        </section>
        <OurValues />
        <WhyChooseUs />
        <OurProcess />
        <Testimonials />
        <Impact />
        <section className="statement"><p>“Connecting the dots,<br />makes all the difference.”</p><span>FIRANSIBEKAN</span></section>
        <CTA />

        {/* Contact Section */}
        <section id="contact" className="contact-section section">
          <div className="section-shell">
            <div className="contact-grid">
              <div className="contact-left">
                <div className="section-kicker">CONTACT</div>
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-intro">Contact us for project inquiries, commercial opportunities, investor conversations, or strategic partnerships. Our team will respond as soon as possible.</p>
                
                <div className="contact-info-cards">
                  <div className="info-card">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h4>Phone</h4>
                      <p><a href="tel:+251911280885">+251 911 280 885</a></p>
                      <p><a href="tel:+251118550009">+251 11 855 0009</a></p>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="info-icon">✉️</div>
                    <div className="info-content">
                      <h4>Email</h4>
                      <p><a href="mailto:info@firansibekan.com">info@firansibekan.com</a></p>
                    </div>
                  </div>
                  
                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h4>Head Office</h4>
                      <p>Bole Atlas Area, Century Executive Tower, 9th Floor,</p>
                      <p>Room No. 09-A-01, Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-right">
                <div className="contact-map">
                  <iframe
                    title="Firansibekan location map"
                    src="https://www.google.com/maps?q=Bole%20Atlas%20Area%2C%20Century%20Executive%20Tower%2C%209th%20Floor%2C%20Room%20No.%2009-A-01%2C%20Addis%20Ababa%2C%20Ethiopia&z=15&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="section-shell">
          <div className="footer-grid">
            <div className="footer-col">
              <h4 className="footer-col-title">FIRANSIBEKAN</h4>
              <p className="footer-col-subtitle">Trade & Investment</p>
              <p className="footer-desc">A diversified Ethiopian business committed to delivering practical, reliable solutions across healthcare, technology, and technical services.</p>
              
              <div className="footer-contact-small">
                <p className="footer-contact-item">📞 <a href="tel:+251911280885">+251 911 280 885</a></p>
                <p className="footer-contact-item">✉️ <a href="mailto:info@firansibekan.com">info@firansibekan.com</a></p>
                <p className="footer-contact-item">📍 Addis Ababa, Ethiopia</p>
              </div>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-col-title">Navigation</h4>
              <ul className="footer-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#divisions">Departments</a></li>
                <li><a href="#partnerships">Partners</a></li>
                <li><a href="#leadership">Leadership</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-col-title">Our Departments</h4>
              <ul className="footer-nav">
                <li><a href="#divisions">Health & Hospitals</a></li>
                <li><a href="#divisions">IT & IT Consulting</a></li>
                <li><a href="#divisions">Electromechanical Works</a></li>
                <li><a href="#divisions">Medical Imaging</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4 className="footer-col-title">Work With Us</h4>
              <p className="footer-desc">Contact us to discuss partnerships, projects, or opportunities.</p>
              <a href="#contact" className="footer-call-btn">📞 Contact Us</a>
            </div>
          </div>
          
          <div className="footer-bottom-bar">
            <p className="footer-copyright">© 2026 Firansibekan. All rights reserved.</p>
            <div className="footer-right-links">
              <a href="#home" className="footer-back-top">↑ Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

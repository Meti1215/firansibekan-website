'use client';

import ScrollReveal from './ScrollReveal';

export default function CTA() {
  return (
    <section id="cta" className="cta">
      <div className="section-shell">
        <ScrollReveal>
          <div className="cta-content">
            <div>
              <h2>Ready to get started?</h2>
              <p>Let&apos;s work together to bring your vision to life. Contact us today to schedule a consultation.</p>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href="#contact">Contact Us <b>→</b></a>
              <a className="button button-outline" href="tel:+251911280885">Call Now <b>↗</b></a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

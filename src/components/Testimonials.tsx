'use client';

import ScrollReveal from './ScrollReveal';

interface TestimonialProps {
  name: string;
  role: string;
  text: string;
  delay: number;
}

function TestimonialCard({ name, role, text, delay }: TestimonialProps) {
  return (
    <ScrollReveal delay={delay} className="testimonial-card">
      <div className="testimonial-quote">&ldquo;</div>
      <p className="testimonial-text">{text}</p>
      <div className="testimonial-author">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </ScrollReveal>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-kicker">08 — TESTIMONIALS</div>
          <h2>What Our Clients Say</h2>
          <p style={{marginTop: '1rem', maxWidth: '600px', color: 'rgba(23, 28, 85, 0.85)'}}>Discover the experiences of the institutions and clients we work with.</p>
        </ScrollReveal>
        <div style={{textAlign: 'center', padding: '4rem 2rem', border: '2px dashed rgba(23, 28, 85, 0.2)', borderRadius: '1rem', marginTop: '2rem'}}>
          <h3 style={{color: 'rgba(23, 28, 85, 0.7)', fontFamily: 'Poppins, sans-serif', fontSize: '1.25rem', marginBottom: '0.5rem'}}>Client testimonials coming soon.</h3>
        </div>
      </div>
    </section>
  );
}

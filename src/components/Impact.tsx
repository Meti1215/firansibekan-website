'use client';

import ScrollReveal from './ScrollReveal';

export default function Impact() {
  return (
    <section id="impact" className="section impact">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-kicker">09 — OUR IMPACT</div>
          <h2>Creating Value Through What We Do</h2>
          <div style={{marginTop: '2rem'}}>
            <p style={{lineHeight: '1.8', color: 'rgba(23, 28, 85, 0.85)', marginBottom: '1.5rem', fontSize: '1.05rem'}}>Our work contributes to better access to healthcare solutions, modern technology, technical expertise, and reliable products across the sectors we serve.</p>
            <p style={{lineHeight: '1.8', color: 'rgba(23, 28, 85, 0.85)', marginBottom: '1.5rem', fontSize: '1.05rem'}}>From medical imaging and healthcare solutions to IT consulting and electromechanical works, we focus on delivering practical solutions that create meaningful value.</p>
            <p style={{fontFamily: 'Butler, Poppins, Georgia, Times New Roman, serif', fontSize: '1.5rem', fontWeight: 700, color: '#171c55', marginTop: '2rem'}}>Better solutions. Stronger partnerships. Lasting impact.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

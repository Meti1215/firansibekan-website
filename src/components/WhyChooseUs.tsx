'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2>Why Partner With Firansibekan</h2>
          <p>A structured, transparent, and scalable partner for IT consulting, electromechanical works, and healthcare solutions across Ethiopia.</p>
        </div>
        
        <ScrollReveal>
          <div className="why-choose-grid">
            <div className="why-choose-item">
              <div className="why-choose-icon"></div>
              <h3>Proven Commercial Foundation</h3>
              <p>Cumulative commercial experience across healthcare, IT, and electromechanical sectors — a foundation of trust and operational discipline.</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon"></div>
              <h3>Technical Expertise</h3>
              <p>Our team brings specialized knowledge in IT consulting, electromechanical systems, and healthcare technology to deliver practical solutions.</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon"></div>
              <h3>Healthcare-Focused Approach</h3>
              <p>Guided by real-world healthcare experience, our decisions ensure quality, relevance, and compliance in medical equipment and solutions.</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon"></div>
              <h3>Regulatory Discipline</h3>
              <p>Every transaction is traceable, transparent, and held to high accountability standards. We align with regulatory frameworks and compliance requirements.</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon"></div>
              <h3>Local Presence</h3>
              <p>Based in Addis Ababa, we understand the local market and can respond quickly to the needs of Ethiopian institutions and businesses.</p>
            </div>
            
            <div className="why-choose-item">
              <div className="why-choose-icon"></div>
              <h3>Operational Scale</h3>
              <p>With a focused team across diversified operations, Firansibekan maintains the scale and stability to deliver consistently across all sectors we serve.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import ScrollReveal from '@/components/ScrollReveal';

export default function Statistics() {
  return (
    <section id="statistics" className="statistics">
      <div className="container">
        <div className="section-header">
          <span className="section-number">03</span>
          <h2>Our Impact</h2>
          <p>Making a difference across Ethiopia through quality solutions and partnerships.</p>
        </div>
        
        <ScrollReveal>
          <div className="statistics-grid">
            <div className="stat-item">
              <div className="stat-number">01</div>
              <h3>Years of Experience</h3>
              <p>Delivering reliable solutions since our founding</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">04</div>
              <h3>Core Departments</h3>
              <p>Healthcare, IT, Electromechanical, Medical Imaging</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <h3>Projects Completed</h3>
              <p>Successfully delivered across Ethiopia</p>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <h3>Client Satisfaction</h3>
              <p>Committed to excellence in every project</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

'use client';

import ScrollReveal from './ScrollReveal';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  return (
    <ScrollReveal delay={delay} className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </ScrollReveal>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: '🏥',
      title: 'Multi-Sector Expertise',
      description: 'Experience across healthcare, technology, and technical services.',
      delay: 0
    },
    {
      icon: '⭐',
      title: 'Reliable Solutions',
      description: 'Dependable products and services you can trust.',
      delay: 100
    },
    {
      icon: '⚙️',
      title: 'Technical Capability',
      description: 'Skilled team with hands-on technical expertise.',
      delay: 200
    },
    {
      icon: '🤝',
      title: 'Strong Partnerships',
      description: 'Building lasting relationships based on trust and collaboration.',
      delay: 300
    }
  ];

  return (
    <section id="why-us" className="section why-choose">
      <div className="section-shell">
      <ScrollReveal>
        <div className="section-heading">
          <div>
          <div className="section-kicker">06 — WHY CHOOSE US</div>
          <h2>Why Choose Us</h2>
          </div>
          <p className="lead">We combine diverse expertise, practical solutions, and a commitment to reliable service.</p>
        </div>
      </ScrollReveal>
      <div className="why-grid">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
      </div>
    </section>
  );
}

'use client';

import ScrollReveal from './ScrollReveal';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

function ValueCard({ icon, title, description, delay }: ValueCardProps) {
  return (
    <ScrollReveal delay={delay} className="value-card">
      <div className="value-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </ScrollReveal>
  );
}

export default function OurValues() {
  const values = [
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We build trust through honesty and accountability.',
      delay: 0
    },
    {
      icon: '⭐',
      title: 'Quality',
      description: 'We strive to deliver dependable products and solutions.',
      delay: 100
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We embrace new ideas and technology to solve real challenges.',
      delay: 200
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We believe strong collaboration creates lasting value.',
      delay: 300
    }
  ];

  return (
    <section id="values" className="section">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-kicker">05 — OUR VALUES</div>
          <h2>Our Values</h2>
          <p style={{marginTop: '1rem', maxWidth: '600px', color: 'rgba(23, 28, 85, 0.85)'}}>Our values guide how we work, make decisions, and build relationships.</p>
        </ScrollReveal>
        <div className="values-grid">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>
    </section>
  );
}

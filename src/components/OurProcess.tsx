'use client';

import ScrollReveal from './ScrollReveal';

interface StepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
}

function ProcessStep({ number, title, description, delay }: StepProps) {
  return (
    <ScrollReveal delay={delay} className="process-step">
      <div className="step-number">{number}</div>
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </ScrollReveal>
  );
}

export default function OurProcess() {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      description: 'We listen to your needs and objectives.',
      delay: 0
    },
    {
      number: '02',
      title: 'Identify',
      description: 'We find the right products, services, or technical solutions.',
      delay: 100
    },
    {
      number: '03',
      title: 'Deliver',
      description: 'We work to provide and implement the agreed solution.',
      delay: 200
    },
    {
      number: '04',
      title: 'Support',
      description: 'We remain committed to communication and continued support.',
      delay: 300
    }
  ];

  return (
    <section id="process" className="section process">
      <div className="section-shell">
        <ScrollReveal>
          <div className="section-kicker">07 — OUR PROCESS</div>
          <h2>Our Process</h2>
          <p style={{marginTop: '1rem', maxWidth: '600px', color: 'rgba(23, 28, 85, 0.85)'}}>From understanding your needs to delivering the right solution.</p>
        </ScrollReveal>
        <div className="process-grid">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

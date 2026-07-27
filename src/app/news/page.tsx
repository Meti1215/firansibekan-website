import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewsPage() {
  return (
    <>
      <Navigation />
      <main className="container">
        <div className="news-page">
          <div className="news-header">
            <h1>Meet Our Partner Network</h1>
            <p className="news-subtitle">Firansibekan partner network overview</p>
          </div>
          
          <div className="news-content">
            <div className="hero-section">
              <h2>Diversified Ventures. Shared Growth Potential.</h2>
              <p className="hero-description">
                The Firansibekan network is built around long-term relationships that support venture growth, operational excellence, and meaningful market opportunity.
              </p>
              <p className="hero-description">
                Across the group's portfolio, partnership opportunities include distribution, hospitality, real estate, mining, agriculture, and premium export development.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">1997</div>
                <div className="stat-label">Founder Start</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Core Ventures</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Ker Fitness Sites</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">Hotel Awards</div>
              </div>
            </div>
            
            <div className="partners-section">
              <h2>Meet Our Partners</h2>
              <p className="section-subtitle">Trusted Relationships. Shared Growth.</p>
              <p className="partners-description">
                Firansibekan works with trusted manufacturers, suppliers, healthcare institutions, technology providers, and service partners to deliver reliable products and practical solutions across multiple sectors.
              </p>
              <p className="partners-description">
                Our partner network continues to grow through collaboration, professionalism, and a shared commitment to quality and long-term value.
              </p>
            </div>
            
            <div className="partners-logos">
              <p className="logos-placeholder">[Partner logos / partner images]</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

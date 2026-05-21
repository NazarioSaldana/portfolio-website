import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section style={{ textAlign: 'center', margin: '120px 0' }}>
      
      <h2 style={{ fontSize: '3.5rem', marginBottom: '20px', letterSpacing: '-0.03em' }}>
        Hey There! I'm <span className="name-gradient">Nazario Saldaña</span>
      </h2>
      
      <p style={{ fontSize: '1.3rem', color: '#515154', lineHeight: '1.6', fontWeight: '400', marginBottom: '40px' }}>
        I like building things, so why not showcase them!
      </p>

      <div className="hero-buttons">
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/contact" className="btn-secondary">Contact Me</Link>
      </div>
    </section>
  )
}

export default Hero
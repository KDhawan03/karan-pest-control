import { useState, useEffect } from 'react';

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/pest-1.jpg',
    '/images/pest-2.jpg',
    '/images/pest-3.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval); 
  }, []);

  return (
    <section 
      id="home"
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        marginTop: '0'
      }}
    >
      {/* Background Images with Transition */}
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 2s ease-in-out',
            zIndex: 1
          }}
        >
          <img
            src={image}
            alt={`Pest Control ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          {/* Dark Overlay */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.65)',
            }}
          />
        </div>
      ))}

      {/* Content Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          paddingTop: '64px'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', width: '100%' }}>
          <div style={{ maxWidth: '48rem' }}>
            {/* Bold Headline */}
              <h1 className="text-[#fff]" style={{
                fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                Safe, Fast & Guaranteed Pest Control for Your Home or Business.
              </h1>

            {/* Paragraph */}
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#e5e7eb',
              marginBottom: '2rem',
              lineHeight: '1.75'
            }}>
              Stay worry-free with Karan Pest Control Services, delivering modern and effective 
              treatments that keep your space safe, hygienic, and completely pest-free.
            </p>

            {/* Book a Service Button */}
            <a
              href="#quote"
              style={{
                display: 'inline-block',
                backgroundColor: '#299B46',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#1e1a3d';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#299B46';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Book a Service
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

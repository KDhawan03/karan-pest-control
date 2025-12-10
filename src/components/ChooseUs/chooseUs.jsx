import React, { useState } from 'react';
import './chooseUs.css';

const chooseUsData = [
  
  {
    id: 1,
    title: 'Experienced Professionals',
    description: 'Our trained and certified team delivers reliable pest control with proven techniques.',
    icon: '👨‍🔧',
    color: 'card-blue'
  },
  {
    id: 2,
    title: 'Safe & Eco-Friendly Methods',
    description: 'We use safe, odorless, and environmentally friendly solutions for your family and pets.',
    icon: '🌿',
    color: 'card-green'
  },
  {
    id: 3,
    title: 'Trusted & Effective Service',
    description: 'We ensure long-lasting protection with high-quality treatments and follow-ups.',
    icon: '🏆',
    color: 'card-purple'
  },
  {
    id: 4,
    title: 'Fast & Affordable Service',
    description: 'Quick response, transparent pricing, and budget-friendly pest control for all needs.',
    icon: '⚡',
    color: 'card-orange'
  },


];

const ChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="chooseUs-section">
      <div className="chooseUs-container">
        <div className="chooseUs-header">
          <button className="bg-[#299B46] text-white px-5 py-2 rounded-lg font-medium 
                   hover:bg-green-700 transition duration-300 shadow-sm hover:shadow">
            Why Choose Us?
          </button>

          <h2 className="choose-title">
            What Makes Us The Best, <span className="text-[#299B46]">Choice For You</span>
          </h2>


          <p className="chooseUs-subtitle">
            Karan Pest Services is your best choice because we combine expert care, safe solutions, and personalized service to keep your space pest-free—efficiently and reliably.
          </p>
        </div>

        <div className="services-grid">
          {chooseUsData.map((service) => (
            <div
              key={service.id}
              className={`chooseUs-card ${service.color}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="chooseUs-icon">{service.icon}</div>
              <h3 className="chooseUs-title">{service.title}</h3>
              <p className="chooseUs-description">{service.description}</p>
              {/* <button className="chooseUs-btn">Learn More →</button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;

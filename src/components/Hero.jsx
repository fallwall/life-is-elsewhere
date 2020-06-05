import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-cover-container">
        <img src="https://i.imgur.com/RRoxg6G.jpg" alt="cover" />
        <div className="arrow-container">
          <a data-scroll href="#main-wordpress">
            <div className="arrow"></div>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Hero;

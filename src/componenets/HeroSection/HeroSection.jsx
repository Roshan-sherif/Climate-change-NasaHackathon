import React from "react";
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <video autoPlay muted loop className="background-video">
        <source src="4K Planet Earth Spinning in Space _ Free HD Videos - No Copyright.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1 className="text">Explore Climate Change Impact</h1>
        <p>Discover how global temperatures have changed over the years.</p>
      </div>
    </section>
  );
};

export default HeroSection;

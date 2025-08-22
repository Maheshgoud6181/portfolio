import React from "react";
import photo from "../images/photo.jpg"; 
// Adjust the path as necessary
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
          <h3>HELLO, I'M</h3>
          <h1>
            MAHESH GOUD <span className="highlight">KALAL</span>
          </h1>
          <p>
            A passionate Full Stack Developer based in Hyderabad, creating immersive web experiences that engage users and deliver results.Currently pursuing B.Tech at NIT Durgapur.
          </p>

          <div className="contact-info-hero">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Hyderabad, Telangana, 500045</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>9390936181</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>maheshkalal9390@gmail.com</span>
            </div>
          </div>

          <div className="social-icons-hero">
            <a href="https://www.linkedin.com/in/mahesh-goud6181/" className="social-icon-hero">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/Maheshgoud6181" className="social-icon-hero" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="btn-container">
            <a href="#contact" className="btn-primary-custom">Hire Me</a>
            <a href="#projects" className="btn-outline-custom">View Projects</a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left" data-aos-duration="1000">
          <div className="image-container">
            <img src={photo} alt="Mahesh Goud Kalal" />
          </div>
          <div className="blob"></div>
          <div className="blob"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

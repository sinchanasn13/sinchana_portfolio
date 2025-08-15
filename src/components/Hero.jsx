import React from "react";
import "../style.css";
import HeroImage from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        {/* Text on the left */}
        <div className="hero-text">
          <h1>Hi, I'm Sinchana SN</h1>
          <h2>I'm a Web Developer</h2>
          <p>
            As a fresher, I'm eager to contribute to innovative projects,
            continuously learn new tools and frameworks, and grow into a
            confident and impactful software engineer.
          </p>
          <a href="/4CB22IS053_SINCHANA SN.pdf" className="btn-resume" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://github.com/sinchanasn13" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="mailto:sinchana13sn@gmail.com">
              <FaEnvelope />
            </a>
            <a href="https://www.linkedin.com/in/sn-sinchana/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Image on the right */}
        <div className="hero-image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

import React from "react";
import "../style.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <h1 className="logo">
          <span className="logo-accent"></span>Sinchana SN
          <span className="logo-accent"></span>
        </h1>
        <ul className="nav-links">
          {[
            "About",
            "Education",
            "Skills",
            "Projects",
            "Experience",
            
            "Contact",
          ].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

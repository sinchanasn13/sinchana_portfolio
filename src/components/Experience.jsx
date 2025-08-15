import React from "react";
import "../style.css";
import Image from "../assets/future.jpeg";
import Certificate from "../assets/SINCHANA SN Internship Certificate.pdf";


export default function Experience() {
  const experiences = [
    {
      logo: Image,
      role: "Full Stack Web Development Intern",
      company: "Future Interns",
      period: "July 2025",
      description:
        "Completed an intensive internship program focusing on designing, developing, and deploying full-stack applications. Gained hands-on experience in building responsive user interfaces, managing server-side logic, and working with modern databases.",
      achievements: [
        "Rebranded the Netflix homepage UI using React and Tailwind CSS, replicating 'Trending Now' and 'More reasons to join' sections with pixel-perfect design.",
        "Built a mini e-commerce platform with product listing, filtering, shopping cart, checkout simulation, user authentication, and order history using React.js, Tailwind CSS, Node.js, Express, and MongoDB.",
        "Developed a professional personal portfolio with modern color schemes, responsive layout, and optimized performance for faster load times."
      ],
      certificate: "file:///C:/Users/SUJAN/Downloads/SINCHANA%20SN%20Internship%20Certificate.pdf" // Add your certificate link here
    }
  ];

  return (
    <section id="experience" className="container experience-section">
      <h2 className="section-title">EXPERIENCE</h2>
      <div className="underline"></div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card glow-card">
            {/* Header */}
            <div className="experience-header">
              <img src={exp.logo} alt={exp.company} className="experience-logo" />
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
              </div>
            </div>

            {/* Description */}
            <p className="experience-description">{exp.description}</p>

            {/* Achievements */}
            <ul className="experience-achievements">
              {exp.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {/* Certificate Button */}
            {exp.certificate && (
              <a
  href={Certificate}
  target="_blank"
  rel="noopener noreferrer"
  className="btn-certificate"
>
   Certificate
</a>

            )}
          </div>
        ))}
      </div>
    </section>
  );
}

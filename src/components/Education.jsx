import React from "react";
import "./Education.css";
import canaraLogo from "../assets/can.png";
import rnsLogo from "../assets/rns.jpeg";
import vkrLogo from "../assets/vkr (2).png";

export default function Education() {
  const education = [
    {
      degree: "B.E. in Information Science",
      school: "Canara Engineering College, Mangalore",
      year: "2022 - Present",
      location: "Mangalore, Karnataka",
      logo: canaraLogo
    },
    {
      degree: "Pre-University (PU) - Science",
      school: "RN Shetty PU College, Kundapur",
      year: "2021 - 2022",
      score: "92%",
      location: "Kundapur, Karnataka",
      logo: rnsLogo
    },
    {
      degree: "High School",
      school: "VKR High School, Kundapur",
      year: "2020 - 2021",
      score: "91%",
      location: "Kundapur, Karnataka",
      logo: vkrLogo
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>
        <div className="underline"></div>
        <p className="section-subtitle">
          My academic journey has been instrumental in shaping my technical
          expertise and problem-solving abilities, while also fostering strong
          communication, teamwork, and leadership skills.
        </p>

        <div className="edu-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div className="edu-header">
                <img src={edu.logo} alt={edu.school} className="edu-logo" />
                <div>
                  <h3>{edu.degree}</h3>
                  <p className="edu-school">{edu.school}</p>
                  <p className="edu-location">{edu.location}</p>
                </div>
              </div>
              <p className="edu-year">{edu.year}</p>
              {edu.score && <p className="edu-score">Score: {edu.score}</p>}
              <p className="edu-description">{edu.description}</p>
              {edu.activities && (
                <ul className="edu-activities">
                  {edu.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

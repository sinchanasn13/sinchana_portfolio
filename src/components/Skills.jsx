import React from "react";
import "../style.css";

export default function Skills() {
  const professionalSkills = [
    "Problem-Solving",
    "Team Collaboration",
    "Time Management",
    "Communication",
  ];

  const technicalSkills = [
    "C",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TailwindCSS",
  ];

  const tools = [
    "GitHub",
    "VS Code",
  ];

  const SkillCategory = ({ title, skills }) => (
    <div className="skills-box">
      <h3 className="skills-heading">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div key={idx} className="skill-card">{skill}</div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="container skills-section">
      <h2 className="section-title">SKILLS</h2>
      <div className="underline"></div>
      
      <SkillCategory title="Professional Skills" skills={professionalSkills} />
      <SkillCategory title="Technical Skills" skills={technicalSkills} />
      <SkillCategory title="Tools" skills={tools} />
    </section>
  );
}

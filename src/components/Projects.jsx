import React from "react";
import "../style.css";

export default function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      description: "A movie streaming app inspired by Netflix, built using React and TMDB API for movie data.",
     
      github: "https://github.com/sinchanasn13/Netflix_clone",
      live: "https://netflix-clone-ero9.vercel.app/"
    },
    {
      title: "Gemini Clone",
      description: "An AI chatbot clone built using Google's Gemini API for natural language conversation.",
    
      github: "https://github.com/sinchanasn13/Gemini_clone",
      live: "https://gemini-clone-b4nk.vercel.app/"
    },
    {
      title: "AI Pregnancy App",
      description: "AI-powered pregnancy tracking and health guidance app with personalized tips.",
      
      github: "https://github.com/yourusername/ai-pregnancy",
      live: "https://your-ai-pregnancy-live-link.com"
    },
    {
      title: "E-commerce App",
      description: "Full-stack MERN e-commerce platform with secure payment integration.",
      
      github: "https://github.com/sinchanasn13/E_Shopy",
      live: "https://e-comm-pi-ten.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="container" style={{ padding: "80px 0" }}>
      <h2 className="section-title">PROJECTS</h2>
      <div className="underline"></div>
      <p className="section-subtitle">Some of my works:</p>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            

           

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-github">
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-live">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

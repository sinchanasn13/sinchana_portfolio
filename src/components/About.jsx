import React from "react";
import "../style.css"; 

export default function About() {
  return (
    <section id="about" className="container about-section">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="underline"></div>
      <p className="about-text">
        I’m a Information Science student with a strong passion for building
        interactive, efficient, and user-focused web applications. I enjoy
        working across the full stack — from crafting responsive, visually
        appealing frontends to designing scalable backend solutions. Over time,
        I’ve gained hands-on experience with modern technologies like React,
        Node.js, and MongoDB, and I’m always eager to explore new tools and
        frameworks.
        <br />
        <br />
        My approach combines problem-solving, creativity, and attention to
        detail, enabling me to transform ideas into functional, impactful
        digital experiences. Beyond coding, I enjoy learning about UI/UX design
        principles, contributing to collaborative projects, and refining my
        skills through continuous practice. My ultimate goal is to create
        solutions that are not just functional, but also intuitive and enjoyable
        for users.
      </p>
    </section>
  );
}

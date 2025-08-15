import React from "react";
import "./styles.css";

export default function Certificates() {
  const certs = [
    { title: "JavaScript Fundamentals", issuer: "Coursera" },
    { title: "React Development", issuer: "Udemy" }
  ];
  return (
    <section id="certificates" className="container" style={{ padding: "80px 0" }}>
      <h2 className="section-title">CERTIFICATES</h2>
      <div className="underline"></div>
      <div style={{ display: "grid", gap: "20px" }}>
        {certs.map((c, idx) => (
          <div key={idx} className="card">
            <h3>{c.title}</h3>
            <p style={{ color: "#b0b0b0" }}>{c.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

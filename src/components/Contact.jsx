import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope } from "react-icons/fa";
import "../style.css";

export default function Contact() {
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonText("Sending..."); // optional: show sending state

    emailjs
     .sendForm(
        "service_7z5wipf", // Your Service ID
        "template_57bacik",  // Your Template ID
        form.current,
        "St8l3PM3VW-XLAvYZ"  // Replace with your Public Key
      )
      .then(
        () => {
          setButtonText("Message Sent ✅"); // Update button text
          form.current.reset();             // Reset the form
          setTimeout(() => setButtonText("Send Message"), 3000); // Reset after 3s
        },
        (error) => {
          setButtonText("Failed ❌");
          console.error("EmailJS error:", error);
          setTimeout(() => setButtonText("Send Message"), 3000);
        }
      );
  };

  return (
    <section id="contact" className="container" style={{ padding: "80px 0", textAlign: "center" }}>
      <h2 className="section-title">CONTACT</h2>
      <div className="underline"></div>
      <p className="section-subtitle">Let's work together!</p>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>

        <button type="submit" className="email-btn">
          <FaEnvelope className="email-icon" />
          {buttonText}
        </button>
      </form>
    </section>
  );
}

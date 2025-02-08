import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import "../assets/Contact.css";
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn!</p>
        <div className="contact-links">
          <a href="mailto:pradhansamyam71@gmail.com" className="contact-link">
            <FaEnvelope size={30} style={{ marginRight: '10px' }} />
            pradhansamyam71@gmail.com
          </a>
          <a 
            href="https://www.linkedin.com/in/samyam-pradhan-b59b68292/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            <FaLinkedin size={30} style={{ marginRight: '10px' }} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
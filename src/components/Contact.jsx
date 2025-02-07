import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';  

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn!</p>
        <div className="contact-links">
          <a href="mailto:pradhansamyam71@gmail.com" className="contact-link">
            <FaEnvelope size={30} style={{ marginRight: '10px' }} /> 
            Email: pradhansamyam71@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="contact-link">
            LinkedIn:<FaLinkedin size={30} style={{ marginRight: '10px' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

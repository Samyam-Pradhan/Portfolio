import "../assets/About.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Importing Icons

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <p>
          I'm Samyam Pradhan, a passionate Web Developer specializing in building
          responsive and dynamic web applications. I love solving problems and
          constantly learning new technologies to improve my skills.
        </p>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://github.com/Samyam-Pradhan" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/samyam-pradhan-b59b68292/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/__itssamyam/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import '../assets/Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="https://www.instagram.com/__itssamyam/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
                <a href="https://github.com/Samyam-Pradhan" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} />
                </a>
                <a href="https://www.linkedin.com/in/samyam-pradhan-b59b68292/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} />
                </a>
            </div>
            
            <p className="copyright">
                Samyam Pradhan @ 2025 All Rights Reserved
            </p>
        </footer>
    );
};

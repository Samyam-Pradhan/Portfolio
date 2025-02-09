import { useState } from "react";
import "../assets/Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav id="desktop-nav">
                <div className="logo">Samyam Pradhan</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>

            <nav id="hamburger-nav">
                <div className="logo">Samyam Pradhan</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span className={isOpen ? "open" : ""}></span>
                        <span className={isOpen ? "open" : ""}></span>
                        <span className={isOpen ? "open" : ""}></span>
                     
                    </div>

                    <ul className={`menu-links ${isOpen ? "open" : ""}`}>
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

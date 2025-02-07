import profile from "../images/samyam.jpg";
import "../assets/Hero.css";

const Hero = () => {
  return (
    <section id="profile">
      <div className="section-img">
        <img src={profile} alt="Hero Background" />
      </div>
      <div className="section-text">
        <p>Hello, I'm</p>
        <h1>Samyam Pradhan</h1>
        <p>Web Developer</p>
        <div className="btn-container">
          <button className="btn">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

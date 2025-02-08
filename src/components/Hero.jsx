import "../assets/Hero.css";

const Hero = () => {
  return (
    <section id="profile">
      <div className="section-img">
      <img src="\samyam.jpg" alt="Project 1" />
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

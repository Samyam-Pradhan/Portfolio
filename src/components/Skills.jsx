import "../assets/Skills.css";
import { FaJs, FaReact, FaNodeJs } from "react-icons/fa"; 
import { SiMongodb, SiExpress, SiC, SiCplusplus } from "react-icons/si"; 

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-flex">
          <div className="skill"><SiC className="skill-icon" /></div>
          <div className="skill"><SiCplusplus className="skill-icon" /></div>
          <div className="skill"><FaJs className="skill-icon" /></div>
          <div className="skill"><FaReact className="skill-icon" /></div>
          <div className="skill"><FaNodeJs className="skill-icon" /></div>
          <div className="skill"><SiExpress className="skill-icon" /></div>
          <div className="skill"><SiMongodb className="skill-icon" /></div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import "../assets/Skills.css";
import { FaJs, FaReact, FaNodeJs, FaHtml5 } from "react-icons/fa"; 
import { FaAws } from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiC, SiCplusplus, SiGit, SiPostman, 
  SiDocker, SiNginx,SiMysql
} from "react-icons/si"; 
import { IoLogoCss3 } from "react-icons/io";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>

        {/* Frontend and Backend in same row */}
        <div className="skills-row">
          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-flex">
              <div className="skill"><FaHtml5 className="skill-icon" /><p>HTML5</p></div>
              <div className="skill"><IoLogoCss3 className="skill-icon" /><p>CSS3</p></div>
              <div className="skill"><FaJs className="skill-icon" /><p>JavaScript</p></div>
              <div className="skill"><FaReact className="skill-icon" /><p>React</p></div>
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-flex">
              <div className="skill"><FaNodeJs className="skill-icon" /><p>Node.js</p></div>
              <div className="skill"><SiExpress className="skill-icon" /><p>Express</p></div>
              <div className="skill"><SiC className="skill-icon" /><p>C</p></div>
              <div className="skill"><SiCplusplus className="skill-icon" /><p>C++</p></div>
              <div className="skill"><SiMongodb className="skill-icon" /><p>MongoDB</p></div>
              <div className="skill"><SiMysql className="skill-icon" /><p>MySql</p></div>

            </div>
          </div>
        </div>

        {/* Tools & Technologies below */}
        <div className="skills-category">
          <h3>Tools & Technologies</h3>
          <div className="skills-flex">
            <div className="skill"><SiGit className="skill-icon" /><p>Git</p></div>
            <div className="skill"><SiPostman className="skill-icon" /><p>Postman</p></div>
            <div className="skill"><SiDocker className="skill-icon" /><p>Docker</p></div>
            <div className="skill"><SiNginx className="skill-icon" /><p>Nginx</p></div>
            <div className="skill"><FaAws className="skill-icon" /><p>AWS</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

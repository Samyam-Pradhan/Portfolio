import "../assets/Projects.css";

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <h2>My Projects</h2>
        <div className="projects-cards">
          <div className="project-card">
            <img src="/Project1.png" alt="Project 1" />
            <div className="project-info">
              <h3>Project 1</h3>
              <p>Real Time Face Mask Detection System Using CNN</p>
            </div>
          </div>
          <div className="project-card">
            <img src="/Project2.png" alt="Project 2" />
            <div className="project-info">
              <h3>Project 2</h3>
              <p>Role Based Authentication.</p>
            </div>
          </div>
          <div className="project-card">
            <img src="/Project3.png" alt="Project 3" />
            <div className="project-info">
              <h3>Project 3</h3>
              <p>Admin Panel using React and Express.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

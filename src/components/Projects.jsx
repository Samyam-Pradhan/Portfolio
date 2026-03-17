import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Face Mask Detection System",
    description: "Real Time Face Mask Detection web app built using React and FastAPI.",
    tags: ["Python", "FastApi", "CNN"],
    color: "from-emerald-500/20 to-teal-600/10",
    github: "https://github.com/Samyam-Pradhan/Face-Mask-Detection-System",
  },
  {
    id: 2,
    title: "JobNest",
    description: "A modern job portal website made with Python django",
    tags: ["React", "Django", "PostgresSQL"],
    color: "from-violet-500/20 to-purple-600/10",
    github: "https://github.com/Samyam-Pradhan/jobnest",
  },
  {
    id: 3,
    title: "Weather App",
    description: "A weather app showcasing DevOps practices including Docker, CI/CD automation, and deployment workflows.",
    tags: ["JavaScript", "Docker", "GitHub Actions"],
    color: "from-sky-500/20 to-blue-600/10",
    github: "https://github.com/Samyam-Pradhan/Weather-App",
  },
  {
    id: 4,
    title: "BookStore",
    description: "Online Bookstore web application made with mern stack",
    tags: ["React", "Node", "MongoDB"],
    color: "from-amber-500/20 to-orange-600/10",
    github: "https://github.com/Samyam-Pradhan/Bookstore",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id}>
              <div className="group relative bg-card border border-border rounded-lg p-8 h-full transition-colors duration-300 overflow-hidden">
                {/* Gradient background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} 
                />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-display px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Code link with arrow appearing on hover */}
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-display font-semibold text-sm self-start group/code"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code 
                    <span className="text-lg opacity-0 group-hover/code:opacity-100 transition-opacity duration-300">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
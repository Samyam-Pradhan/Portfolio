import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "EcoChain",
    category: "Blockchain dApp",
    description: "Carbon tracking platform built with React and Solidity smart contracts.",
    tags: ["React", "Solidity", "Web3"],
    color: "from-emerald-500/20 to-teal-600/10",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Portfolio V4",
    category: "Design System",
    description: "Modern portfolio with dark mode, custom theming, and smooth animations.",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "from-violet-500/20 to-purple-600/10",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "NeoWeather",
    category: "PWA",
    description: "Progressive web app with live radar, 7-day forecast, and location tracking.",
    tags: ["React", "PWA", "Chart.js"],
    color: "from-sky-500/20 to-blue-600/10",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "TaskFlow",
    category: "Productivity",
    description: "Kanban board with drag-n-drop functionality and real-time sync.",
    tags: ["React", "DnD", "Redux"],
    color: "from-amber-500/20 to-orange-600/10",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative bg-card border border-border rounded-lg p-8 h-full hover:border-primary/40 transition-colors duration-300 cursor-pointer overflow-hidden">
                {/* Gradient overlay on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm font-body">
                      {project.category}
                    </span>
                    <div className="flex gap-3">
                      <a 
                        href={project.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View code on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.demo}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-xs font-display px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="#" 
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display font-semibold tracking-wide transition-colors"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
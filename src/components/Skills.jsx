import { 
  Globe, 
  Database, 
  Wrench
} from "lucide-react";
import { 
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiFastapi, 
  SiPostgresql,
  SiDjango,
  SiMongodb,
  SiJenkins
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "React", icon: FaReact },
    ],
    color: "from-blue-500/20 to-cyan-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Django", icon: SiDjango },
      { name: "FastApi", icon: SiFastapi },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    color: "from-green-500/20 to-emerald-500/10",
    borderColor: "border-green-500/20",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "Docker", icon: FaDocker },
      { name: "Jenkins", icon: SiJenkins },
      { name: "AWS", icon: FaAws },
    ],
    color: "from-purple-500/20 to-pink-500/10",
    borderColor: "border-purple-500/20",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Toolbox</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <div className={`h-full bg-card border ${category.borderColor} rounded-xl p-8`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-secondary-foreground border border-border">
                        <skill.icon className="w-4 h-4 text-primary/70" />
                        <span className="text-sm font-display">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
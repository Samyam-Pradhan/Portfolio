import { motion } from "framer-motion";

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "Figma",
  "Git",
];

const stats = [
  { number: "50+", label: "Projects" },
  { number: "5+", label: "Years" },
  { number: "30+", label: "Clients" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Building the <span className="text-gradient">future</span> of the web
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                I'm a full-stack developer with 5+ years of experience crafting
                digital products that users love. My approach combines clean
                code with thoughtful design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sketching interface
                ideas.
              </p>
            </div>
          </motion.div>

          {/* Right - Skills & Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-display text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Technologies
            </p>
            
            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="font-display text-sm px-5 py-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                >
                  <p className="font-display text-3xl font-bold text-primary">
                    {stat.number}
                  </p>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
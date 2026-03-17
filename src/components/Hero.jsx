import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground font-body text-lg mb-4 tracking-widest uppercase"
        >
          Creative Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8"
        >
          Alex <span className="text-gradient">Morgan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft digital experiences that blend design precision with technical excellence. Focused on creating impactful web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#work"
            onClick={(e) => handleNavClick(e, "work")}
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/85 font-display font-semibold tracking-wide transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display font-semibold tracking-wide transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
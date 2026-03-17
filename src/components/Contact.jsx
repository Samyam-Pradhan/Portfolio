import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:alex.m@reactfolio.dev" },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Drop me a line 
            and let's create something amazing.
          </p>

          {/* Email CTA Button */}
          <a
            href="mailto:alex.m@reactfolio.dev"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/85 font-display font-semibold tracking-wide transition-colors mb-12"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socials.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Alternative: If you want to keep the form instead of just the email CTA */}
          {/* Uncomment this section if you prefer to keep the form */}

          {/* <div className="mt-16 text-left border-t border-border pt-12">
            <h3 className="font-display text-2xl font-semibold mb-6 text-center">
              Or send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors font-body"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors font-body"
                />
              </div>
              <textarea
                placeholder="Your message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors font-body"
              />
              <button
                type="submit"
                className="w-full h-12 px-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/85 font-display font-semibold tracking-wide transition-colors"
              >
                Send Message
              </button>
            </form>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
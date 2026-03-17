import { Mail, Github, Linkedin,} from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/Samyam-Pradhan" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/samyam-pradhan-b59b68292/" },
  { icon: Mail, label: "Email", href: "pradhansamyam71@gmail.com" },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div>
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
           <a
            href="mailto:alex.m@reactfolio.dev"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-display font-semibold tracking-wide transition-colors mb-12"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a> 
          <div className="flex justify-center gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
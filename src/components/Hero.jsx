const Hero = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground font-body text-lg mb-4 tracking-widest uppercase">
          Software Developer
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight mb-8 whitespace-nowrap">
          <span className="text-white">Samyam</span>{' '}
          <span style={{ color: '#E2A936' }}>Pradhan</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          I build innovative and efficient software solutions, focusing on creating impactful, user-friendly web applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/PradhanSamyamCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md border-2 border-[#E2A936] text-black font-display font-semibold tracking-wide transition-colors hover:opacity-90"
            style={{ backgroundColor: '#E2A936' }}
          >
            View CV
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md border-2 font-display font-semibold tracking-wide transition-colors"
            style={{ 
              borderColor: '#E4AC38',
              color: '#E4AC38',
              backgroundColor: 'black'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E4AC38';
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.borderColor = '#E4AC38';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'black';
              e.currentTarget.style.color = '#E4AC38';
              e.currentTarget.style.borderColor = '#E4AC38';
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
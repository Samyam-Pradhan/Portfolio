import { useState } from "react";

const NAV_ITEMS = ["home", "work", "skills", "about", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        background: "hsl(var(--background) / 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(var(--border))",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="section-container">
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem 0",
            position: "relative",
          }}
        >
          {/* Logo */}
          <div
            className="font-display"
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              background: "linear-gradient(to right, hsl(var(--primary)), #fbbf24)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SP
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              display: "none", // overridden by CSS media query
            }}
          >
            <i
              className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
              style={{ color: "hsl(var(--foreground))" }}
            />
          </button>

          {/* Nav links */}
          <ul
            className={`nav-list${menuOpen ? " open" : ""}`}
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="nav-link"
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
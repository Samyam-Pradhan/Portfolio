import { useState } from "react";

const NAV_ITEMS = ["home", "work", "skills", "contact"];
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
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              display: "none", 
            }}
          >
            <i
              className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
              style={{ color: "hsl(var(--foreground))" }}
            />
          </button>
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
                  style={{
                    textDecoration: "none",
                    fontWeight: 500,
                    fontSize: "1rem",
                    fontFamily: "var(--font-body)",
                    padding: "0.5rem 0",
                    textTransform: "capitalize",
                    color: "hsl(var(--foreground))",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => e.target.style.color = "hsl(var(--primary))"}
                  onMouseLeave={(e) => e.target.style.color = "hsl(var(--foreground))"}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .hamburger {
            display: block !important;
          }
          .nav-list {
            display: none !important;
          }
          .nav-list.open {
            display: flex !important;
            flex-direction: column;
            position: absolute;
            top: 70px;
            left: 1rem;
            right: 1rem;
            background: hsl(var(--card));
            border: 1px solid hsl(var(--border));
            border-radius: var(--radius);
            padding: 1rem;
            gap: 1rem;
            z-index: 99;
          }
        }
        @media (min-width: 769px) {
          .hamburger {
            display: none !important;
          }
          .nav-list {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
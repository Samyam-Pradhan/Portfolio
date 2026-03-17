const Footer = () => {
  return (
    <footer
      className="font-body"
      style={{
        background: "hsl(var(--sidebar-background))",
        borderTop: "1px solid hsl(var(--border))",
        padding: "2rem 0",
        textAlign: "center",
        color: "hsl(var(--muted-foreground))",
      }}
    >
      <p>
        © 2025 PORTFOLIO — SAMYAM PRADHAN{" "}
      </p>
    </footer>
  );
};

export default Footer;
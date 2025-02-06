const rok = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: "grey" }}>
      <div className="footer-text">&copy;Made by Pisky {rok}</div>
    </footer>
  );
}

export default Footer;

import React from "react";

const rok = new Date().getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-text">&copy;Made by Pisky {rok}</div>
    </footer>
  );
}

export default Footer;

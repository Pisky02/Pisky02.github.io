function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="header" className="header">
      <button
        className="scroll-button"
        onClick={() => scrollToSection("basic-info")}
      >
        zakladni info
      </button>
      <button
        className="scroll-button"
        onClick={() => scrollToSection("gallery")}
      >
        fotky
      </button>
    </header>
  );
}

export default Header;

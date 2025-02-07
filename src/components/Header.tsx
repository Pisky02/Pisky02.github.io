function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="header" className="header">
      <div className="home">
        <div className="buttons">
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
        </div>
        <img src="homeImage.png" className="home-image"></img>
      </div>
    </header>
  );
}

export default Header;

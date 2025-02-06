import bgImage from "/coupleImage.png";

function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header id="header" className="header">
      <div
        className="home"
        style={{
          height: "100vh",
          width: "auto",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
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
    </header>
  );
}

export default Header;

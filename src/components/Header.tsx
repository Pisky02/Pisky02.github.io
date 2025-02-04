function Header() {
  const scrollToContact = () => {
    /**
     * Najdu vysku headeru
     * najdu contact section
     * nejdu margin nad contact section
     * zjistim kde je contact info na strance
     * vypocitam kam musim az musim scrollnout
     * */
    const header = document.getElementById("header");
    if (header) {
      const headerHeight = header.offsetHeight;

      const contactSection = document.getElementById("gallery"); ///CHANGE
      if (contactSection) {
        const contactSectionStyle = window.getComputedStyle(contactSection);
        const marginTop = parseFloat(contactSectionStyle.marginTop);

        const contactSectionPosition =
          contactSection.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: contactSectionPosition - headerHeight - marginTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header id="header" className="header">
      <button className="contact-button" onClick={scrollToContact}>
        fotky
      </button>
    </header>
  );
}

export default Header;

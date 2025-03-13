import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      //console.log("ScrollY:", currentScrollY); // Debugging log

      if (currentScrollY === 0) {
        setIsVisible(true); // Always visible at top of the page
        if (timeoutId) clearTimeout(timeoutId); // Clear timeout at the top
        return;
      }

      if (currentScrollY > lastScrollY && !isHovered) {
        setIsVisible(false); // Hide on scroll down
      } else if (currentScrollY < lastScrollY && !isHovered) {
        setIsVisible(true); // Show on scroll up
        if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
        const newTimeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 1000); // Hide after 1 second
        setTimeoutId(newTimeoutId);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHovered, timeoutId]);

  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
    if (hovering) {
      setIsVisible(true); // Keep it visible on hover
      if (timeoutId) clearTimeout(timeoutId); // Clear timeout on hover
    } else {
      // When hover ends, hide the navbar if not at the top of the page
      if (window.scrollY !== 0) {
        if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
        const newTimeoutId = setTimeout(() => {
          setIsVisible(false);
        }, 1000); // Hide after 1 second
        setTimeoutId(newTimeoutId);
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full">
      <nav
        className={`bg-gray-100 text-white p-4 transition-transform duration-300 ${
          isVisible || isHovered ? "translate-y-0" : "-translate-y-full"
        }`}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <ul className="flex justify-center space-x-4">
          <li>
            <button onClick={() => scrollToSection("basic-info")}>Úvod</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("rsvp")}>RSVP</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("our-story")}>
              Náš příběh
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("more-info")}>Info</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("gifts")}>Dary</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Kontakty</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("gallery")}>Foto</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

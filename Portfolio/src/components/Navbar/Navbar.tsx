import "./Navbar.css";
import logo from "../../assets/nobg_logo.png";
import  { useEffect } from 'react';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
     const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.slice(1); // Use optional chaining
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  }, []);

  return (
    <div className="navbar">
      <div>
        <a href="#" onClick={() => scrollToSection("hello")}>
          <img className="logo" src={logo} alt="" />
        </a>
      </div>
      <div className="links">
        <a
          className="navlinkitem"
          onClick={() => scrollToSection("about_us")}
          href="#about_us"
        >
          ABOUT US
        </a>
        <a
          className="navlinkitem"
          onClick={() => scrollToSection("projects")}
          href="#projects"
        >
          OUR PROJECTS
        </a>
      </div>
      <div>
        <a
          className="contact"
          onClick={() => scrollToSection("contact")}
          href="#contact"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Navbar;

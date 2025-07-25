import "../App.css";
import githubIcon from "../icons/github.png";
import linkedinIcon from "../icons/linkedin.png";
import { Link } from "react-router-dom";

function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="heading">
      <div className="nav-buttons">
        <button className="nav-btn" onClick={() => scrollToSection("about-me")}>
          About
        </button>
        <button
          className="nav-btn"
          onClick={() => scrollToSection("technologies")}
        >
          Technologies
        </button>
        <button className="nav-btn" onClick={() => scrollToSection("projects")}>
          Projects
        </button>
        <button
          className="nav-btn"
          onClick={() => scrollToSection("projects-no-image")}
        >
          Extra Projects
        </button>
        <Link to="/career" className="nav-btn">
          Career
        </Link>
        <Link to="/goals" className="nav-btn">
          Goals
        </Link>
        <button
          className="nav-btn"
          onClick={() => scrollToSection("email-form")}
        >
          Contact
        </button>
      </div>

      <div className="heading-text">
        <h1>Hi, I'm Ted 👋</h1>
        <p>
          A third-year Software Engineering student at York University. <br />
          Passionate about building impactful software solutions and learning
          new technologies.
        </p>
      </div>

      <button
        className="scroll-btn"
        onClick={() => scrollToSection("about-me")}
      >
        Learn more
      </button>

      <div className="heading-links">
        <a href="https://www.linkedin.com/in/ted-lee-/">
          <img src={linkedinIcon} alt="linkedin" />
        </a>
        <a href="https://github.com/Cpoing">
          <img src={githubIcon} alt="github" />
        </a>
      </div>
    </div>
  );
}

export default Header;

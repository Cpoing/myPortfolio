import "../App.css";
import githubIcon from "../icons/github.png";
import linkedinIcon from "../icons/linkedin.png";

function Header() {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me");
    aboutMeSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="heading">
      <div className="heading-text">
        <h1>Hi, i'm Ted 👋</h1>
        <p>
          {" "}
          A third-year Software Engineering student at York University.{" "}
          <br></br>
          Passionate about building impactful software solutions and learning
          new technologies.{" "}
        </p>
      </div>

      <button className="scroll-btn" onClick={scrollToAboutMe}>
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

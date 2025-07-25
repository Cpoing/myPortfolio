import React from "react"; // Ensure you import React
import { FaGithub } from "react-icons/fa"; // Import GitHub icon from react-icons
import { FaLink } from "react-icons/fa"; // Import Link icon from react-icons
import ratemyhall_ss from "../images/ratemyhall_ss.png"; // Example images
import lofi_ss from "../images/lofi_ss.png";
import blog_ss from "../images/blog_ss.png";

const projects = [
  {
    name: "RateMyHall",
    description:
      "RateMyHall is a platform where students can rate and review their lecture halls, providing insights for future students and helping improve the overall learning environment.",
    image: ratemyhall_ss,
    link: "https://ratemyhall.com",
  },
  {
    name: "Blog App",
    description:
      "A minimalist blogging platform where users can explore others' thoughts or write about their own through personalized posts. This app includes secure user authentication, image upload, and an extensive text editor that includes a wide range of tools.",
    image: blog_ss,
    github: "https://github.com/Cpoing/BlogSphere",
  },
  {
    name: "Lofi web player",
    description:
      "This website is designed to keep users focused while doing work by eliminating distractions. On platforms such as Youtube, there can be many distractions from other videos or ads whereas this website is only lofi. This app includes features such as ambient sounds e.g. rain to keep one as focused as possible.",
    image: lofi_ss,
    github: "https://github.com/Cpoing/Lofi-web",
  },
];

function Projects() {
  return (
    <div id="projects" className="Projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`Project ${index % 2 === 1 ? "Project-left" : "Project-right"}`}
        >
          <div className="Project-content">
            <h3>
              {project.name}{" "}
              {project.name === "RateMyHall" ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink style={{ color: "#333", marginLeft: "10px" }} />
                </a>
              ) : (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub style={{ color: "#333", marginLeft: "10px" }} />
                </a>
              )}
            </h3>
            <p>{project.description}</p>
          </div>
          <div className="Project-image">
            <img src={project.image} alt={`${project.name} screenshot`} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

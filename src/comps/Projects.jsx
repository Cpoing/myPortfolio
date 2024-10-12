import ratemyhall_ss from "../images/ratemyhall_ss.png"; // Example images
import lofi_ss from "../images/lofi_ss.png";
import blog_ss from "../images/blog_ss.png";

const projects = [
  {
    name: "RateMyHall",
    description:
      "RateMyHall is a platform where students can rate and review their lecture halls, providing insights for future students and helping improve the overall learning environment.",
    image: ratemyhall_ss,
  },
  {
    name: "Blog App",
    description: "",
    image: blog_ss,
  },
  {
    name: "Lofi web player",
    description: "",
    image: lofi_ss,
  },
];

function Projects() {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`Project ${index % 2 === 0 ? "Project-left" : "Project-right"}`}
        >
          <div className="Project-content">
            <h3>{project.name}</h3>
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

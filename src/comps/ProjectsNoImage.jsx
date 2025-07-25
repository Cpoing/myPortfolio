import { FaGithub } from "react-icons/fa"; // Importing GitHub icon

const projectsNoImage = [
  {
    name: "TaskMaster",
    description:
      "A productivity app that helps users manage tasks efficiently, featuring a Pomodoro timer and a points system for motivation.",
    githubLink: "https://github.com/Cpoing/2311-productivity-app",
  },
  {
    name: "Jira API clone",
    description:
      "A clone of Jira's backend API using Go, includes a wide range of project management capabilities. Users can post, get, and delete projects along with smaller tasks with secure authentication.",
    githubLink: "https://github.com/Cpoing/Golang-api",
  },
  {
    name: "Spotify Clone",
    description:
      "A music streaming platform that takes data from Shazam API to list all the top songs with their lyrics for users to listen to",
    githubLink: "https://github.com/Cpoing/music-player",
  },
];

function ProjectsNoImage() {
  return (
    <div id="projects-no-image" className="ProjectsNoImage">
      {projectsNoImage.map((project, index) => (
        <div
          key={index}
          className={`ProjectNoImage ${index % 2 === 0 ? "ProjectNoImage-left" : "ProjectNoImage-right"}`}
        >
          <div className="ProjectNoImage-content">
            <h4 className="ProjectNoImage-name">
              {project.name}{" "}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                &nbsp;
                <FaGithub
                  style={{
                    color: "#333",
                    marginLeft: "10px",
                  }}
                />
              </a>{" "}
            </h4>

            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectsNoImage;

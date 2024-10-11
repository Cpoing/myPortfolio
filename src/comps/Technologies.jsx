import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaJava,
  FaJs,
  FaDocker,
  FaLinux,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGoland,
  SiCplusplus,
  SiC,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiNeovim,
  SiFigma,
  SiJsonwebtokens,
} from "react-icons/si";
import { DiIntellij, DiBootstrap } from "react-icons/di";
import { GiCircuitry } from "react-icons/gi";
import { FiCpu } from "react-icons/fi";
import { IoShield } from "react-icons/io5";

function Technologies() {
  const techList = [
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "RISC-V", icon: <GiCircuitry /> },
    { name: "Verilog", icon: <FiCpu /> },
    { name: "Golang", icon: <SiGoland /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
  ];

  const webDevList = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <FaNodeJs /> },
    { name: "Bootstrap", icon: <DiBootstrap /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "JWT", icon: <SiJsonwebtokens /> },
    { name: "Bcrypt", icon: <IoShield /> },
  ];

  const devToolsList = [
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "Neovim", icon: <SiNeovim /> },
    { name: "Git", icon: <FaGithub /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "IntelliJ", icon: <DiIntellij /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <div className="Technologies">
      <h2>Programming Languages</h2>
      <ul className="Technologies-list">
        {techList.map((tech, index) => (
          <li key={index} className="Technologies-item">
            {tech.icon}
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>

      <h2>Web Development</h2>
      <ul className="Technologies-list">
        {webDevList.map((tech, index) => (
          <li key={index} className="Technologies-item">
            {tech.icon}
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>

      <h2>Developer Tools</h2>
      <ul className="Technologies-list">
        {devToolsList.map((tech, index) => (
          <li key={index} className="Technologies-item">
            {tech.icon}
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Technologies;

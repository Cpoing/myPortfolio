import "./App.css";
import Header from "./comps/Header.jsx";
import AboutMe from "./comps/AboutMe.jsx";
import Technologies from "./comps/Technologies.jsx";
import Projects from "./comps/Projects.jsx";
import ProjectsNoImage from "./comps/ProjectsNoImage.jsx";
import EmailMe from "./comps/EmailMe.jsx";

function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Technologies />
      <Projects />
      <ProjectsNoImage />
      <EmailMe />
    </div>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./comps/Header.jsx";
import AboutMe from "./comps/AboutMe.jsx";
import Technologies from "./comps/Technologies.jsx";
import Projects from "./comps/Projects.jsx";
import ProjectsNoImage from "./comps/ProjectsNoImage.jsx";
import EmailMe from "./comps/EmailMe.jsx";
import Goals from "./comps/Goals.jsx";
import Career from "./comps/Career.jsx";
import WhyMe from "./comps/WhyMe.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <AboutMe />
              <WhyMe />
              <Technologies />
              <Projects />
              <ProjectsNoImage />
              <EmailMe />
            </>
          }
        />

        {/* Goals route only shows Goals component */}
        <Route path="/goals" element={<Goals />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App;

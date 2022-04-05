import "./App.css";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
          <Home />
          <div className="aboutMe-container">
            <AboutMe />
          </div>
          <div className="skills-container">
            <Skills />
          </div>
          <div className="projects-container">
            <Projects />
          </div>
          <div className="contact-container">
            <Contact />
          </div>
      </div>
    </ParallaxProvider>
  );
}

export default App;

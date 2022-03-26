import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Radium, { StyleRoot } from "radium";
import { fadeInDown } from "react-animations";

function App() {
  const styles = {
    fadeInDown: {
      animation: "x 2s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
  };
  return (
    <div className="App">
      <header></header>
      <body>
        {/* <div className="navbar-container">
          <Navbar />
        </div> */}
        <Home />
        <div className="aboutMe-container">
          <AboutMe />
        </div>
        <div className="projects-container">
          <Projects />
        </div>
        <div className="contact-container">
          <Contact />
        </div>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

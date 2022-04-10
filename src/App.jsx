import "./App.css";
import Navbar from "./components/Navbar";
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
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;

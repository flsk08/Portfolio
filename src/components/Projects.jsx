import React from "react";
import Fade from "react-reveal/Fade";
import ProjectDetails from "./ProjectDetails";
import { projects } from "../data.js";

export default function Projects() {

  return (
    <div className="projects-container-wrap">
      <div className="title">
        <Fade up>
          <h2>Projects</h2>
        </Fade>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
            <ProjectDetails
              key={index}
              img={project.img}
              title={project.title}
              description={project.description}
              tools={project.tools}
              link={project.link}
              github={project.github}
            />
        ))}
      </div>
    </div>
  );
}

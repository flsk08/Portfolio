import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Fade from "react-reveal/Fade";
import ReactTooltip from "react-tooltip";


export default function ProjectDetails({
  img,
  title,
  description,
  tools,
  link,
  github,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <Fade up>
        <div className="project-set">
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="projects-gif-container" onClick={handleClick}>
              <img
                data-tip="Click to flip"
                className="gif"
                src={img}
                alt="recipe-blog"
              />
              <ReactTooltip />
            </div>
            <div className="project-backside" onClick={handleClick}>
              <div className="project-info">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">
                  Description:
                  <br />
                  {description}
                </p>
                <p className="project-tools">
                  Tools:
                  <br />
                  {tools}
                </p>
              </div>
              <div className="project-links">
                <div className="deployment">
                  <a href={link} target="_blank" rel="noreferrer">
                    Deployment
                  </a>
                </div>
                <div className="github">
                  <a href={github} target="_blank" rel="noreferrer">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </Fade>
    </>
  );
}

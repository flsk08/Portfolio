import React, { useState, useEffect } from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

export default function Skills() {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    const getSkills = async () => {
      try {
        const resp = await axios.get(
          "http://localhost:3000/skills_and_tools"
          // "https://portfolio-yth.herokuapp.com/skills_and_tools"
        );
        console.log(resp.data);
        setSkillsData(resp.data);
      } catch (err) {
        console.error("Error:", err);
      }
    };
    getSkills();
  }, []);
  return (
    <>
      <div className="skills-container-wrap" id="skills_and_tools">
        <div className="title">
          <Fade up>
            <h2>Skills & Tools</h2>
          </Fade>
        </div>
        <div className="skills-container">
          {skillsData &&
            skillsData.map((skill) => (
              <Fade up>
                <div key={skill.id} className="skill-set">
                  <div className="icons">
                    <img src={skill.icon} alt="icons" />
                  </div>
                  <div className="skills">
                    <p>&nbsp;{skill.skill}</p>
                  </div>
                </div>
              </Fade>
            ))}
        </div>
      </div>
    </>
  );
}

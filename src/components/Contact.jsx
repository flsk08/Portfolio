import React from "react";
import Fade from "react-reveal/Fade";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <div className="contact-container-wrap">
      <div className="title">
        <Fade up>
          <h2>Contact</h2>
        </Fade>
      </div>
      <div className="contact-container">
        <Fade up>
          <p>
            If you have an opportunity for me to deepen my skills and expand my
            knowledge, feel free to contact me!
          </p>
        </Fade>
        <div className="contact-links">
          <Fade up>
            <a href="mailto:contact.yth08@gmail.com">
              <EmailIcon sx={{ color: "#07547a", fontSize: "40px" }} />
            </a>
            <a href="https://www.linkedin.com/in/yen-thi-ho/">
              <LinkedInIcon sx={{ color: "#07547a", fontSize: "40px" }} />
            </a>
            <a href="https://github.com/flsk08">
              <GitHubIcon sx={{ color: "#07547a", fontSize: "38px" }} />
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}

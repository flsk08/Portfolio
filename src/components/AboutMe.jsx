import React from "react";
import Fade from "react-reveal/Fade";
import { Grid } from "@mui/material";

import Picture from "../images/Profilbild.jpeg";

export default function AboutMe() {
  return (
    <>
      <Grid container className="about-container-wrapper" id="aboutme">
        <div className="about-container">
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              justifyContent: "center",
              // paddingLeft: "150px",
            }}
            xl={8}
            lg={7}
            md={7}
            sm={12}
            xs={12}
          >
            <Fade up>
              <h2>About Me</h2>
              <p>
                After majoring in Korean Studies and English Studies, I began my
                career as a recruiter and account manager.
                <br />
                I soon realized that I needed a career change that would allow
                me to be more creative. Most importantly, I wanted to do
                something where it is possible for me to continously learn and
                grow. I am eager to learn new things and I am always looking for new
                challenges.
                <br /> <br />
                Due to my huge interest in the latest technologies and
                innovations, I decided to pursue a career in the tech industry.
                Therefore, I participated in a bootcamp at WBS Coding School to
                become a Full-Stack Web & App Developer. Coding gives me exactly
                what I am looking for.
              </p>
            </Fade>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            xl={4}
            lg={5}
            md={5}
            sm={12}
            xs={12}
          >
            <Fade up>
              <img className="about-img" src={Picture} alt="aboutme" />
            </Fade>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

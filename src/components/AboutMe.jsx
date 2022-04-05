import React from "react";
import Navbar from "./Navbar";
import Picture from "../images/LittleOne.jpg";

import Fade from "react-reveal/Fade";
import { Grid } from "@mui/material";

export default function AboutMe() {
  return (
    <>
      <div className="navbar-container-about">
        <Fade right>
          <Navbar />
        </Fade>
      </div>

      <Grid container className="about-container">
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "160px",
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
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
      </Grid>
    </>
  );
}

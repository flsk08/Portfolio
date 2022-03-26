import React from "react";
import { fadeInDown, fadeInUp } from "react-animations";
import Radium, {StyleRoot} from "radium";

import Navbar from "./Navbar";

export default function Home() {
  const styles = {
    fadeInDown: {
      animation: "10s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
    fadeInUp: {
      animation: "2s",
      animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
    }
  };
  return (
    <>
      <StyleRoot>
        <div className="wrapper-home">
          <div className="navLink navbar-container" style={styles.fadeInDown}>
            <Navbar />
          </div>
          <h1>Hi, I'm Yen-Thi</h1>
          <p style={styles.fadeInUp}>
            A junior full-stack web & app developer
            <br />
            with a passion for the back-end?
          </p>
        </div>
      </StyleRoot>
    </>
  );
}

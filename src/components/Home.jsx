import React from "react";
import { fadeInDown, fadeInUp, fadeIn } from "react-animations";
import Radium, {StyleRoot} from "radium";

import Navbar from "./Navbar";

export default function Home() {
  const styles = {
    fadeInDown: {
      animation: "10s",
      animationName: Radium.keyframes(fadeInDown, "fadeInDown"),
    },
    fadeInUp: {
      animation: "7s",
      animationName: Radium.keyframes(fadeInUp, "fadeInUp"),
    },
    fadeIn: {
      animation: "5s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    }
  };
  return (
    <>
      <StyleRoot>
        <div className="wrapper-home" style={styles.fadeIn}>
          <div className="navbar-container-home" style={styles.fadeInDown}>
            <Navbar />
          </div>
          <h1>Hi, I am Yen-Thi</h1>
          <p style={styles.fadeInUp}>
            A junior full-stack web & app developer
            <br />
            based in Southern Germany
          </p>
        </div>
      </StyleRoot>
    </>
  );
}

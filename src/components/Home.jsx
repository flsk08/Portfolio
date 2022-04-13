import React from "react";
import { fadeInUp, fadeIn } from "react-animations";
import Radium, {StyleRoot} from "radium";

export default function Home() {
  const styles = {

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
        <div className="wrapper-home" style={styles.fadeIn} id="home">
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

import React from 'react'
import Navbar from './Navbar'
export default function Home() {
  return (
    <>
      <div className="wrapper-home">
        <div className="navLink navbar-container">
          <Navbar />
        </div>
        <h1>Hi, I'm Yen-Thi</h1>
        <p>A junior full-stack web & app developer 
          <br />
          with a passion for the back-end?
        </p>
      </div>
    </>
  );
}

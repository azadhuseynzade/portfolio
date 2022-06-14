import React from "react";
import "../styles/introduction.css";
function Introduction() {
  return (
    <div className="mainIntroDiv">
      <h6 className="hi">Hi, my name is</h6>
      <h1 className="myName">Azad Huseynzade</h1>
      <h2 className="build">I build things for the web.</h2>
      <p className="textSide">
        I'm a Junior React Developer . The projects that I have been working on
        are websites built from scratch and used modern libraries and frameworks
        such as React
      </p>
      <a href="https://www.tech.edu.az/">
        <button className="checkButton">Check out my course !</button>
      </a>
    </div>
  );
}

export default Introduction;

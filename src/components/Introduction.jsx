import React from "react";
import "../styles/introduction.css";
function Introduction() {
  return (
    <div className="mainIntroDiv">
      <h6 className="hi">Hi, my name is</h6>
      <h1 className="myName">Azad Huseynzade</h1>
      <h2 className="build">I build things for the web.</h2>
      <p className="textSide">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <button className="checkButton">Check out my course !</button>
    </div>
  );
}

export default Introduction;

import React from "react";
import "../styles/projects.css";
import { RiGithubFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import Tello from "../images/project-tello.png";
import Bookcontent from "../images/Book-content - Google Chrome 6_9_2022 7_00_30 PM.png";
function Projects() {
  return (
    <div className="mainProjectsDiv">
      <div className="tittle-03">
        <div>
          <span className="work-03">03.</span>
          <span className="built-03">Some Things I’ve Built</span>
        </div>
        <div className="aboutMeLine3"></div>
      </div>
      <div className="allProjects">
        <div className="imageSide">
          <img className="tello" src={Tello} alt="tello" />
        </div>
        <div className="descriptionSide">
          <p className="featured">Featured Project</p>
          <h4 className="theme">Halcyon Theme</h4>
          <div className="lineThreeCounts">
            <p className="firstLine">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom,
            </p>
            <p className="secondLine">
              iTerm, and more. Available on Visual Studio Marketplace,
            </p>
            <p className="thirdLine">
              Package Control, Atom Package Manager, and npm.
            </p>
          </div>
          <span className="tools">VS Code Sublime Text Atom iTerm2 Hyper</span>
          <div className="icons">
            <RiGithubFill className="github" />
            <FiExternalLink className="link" />
          </div>
        </div>
      </div>
      <div className="allProjects2">
        <div className="imageSide">
          <img className="bookContent" src={Bookcontent} alt="tello" />
        </div>
        <div className="descriptionSide">
          <p className="featured">Featured Project</p>
          <h4 className="theme">Spotify Profile</h4>
          <div className="lineThreeCounts">
            <p className="firstLine">
              A minimal, dark blue theme for VS Code, Sublime Text, Atom,
            </p>
            <p className="secondLine">
              iTerm, and more. Available on Visual Studio Marketplace,
            </p>
            <p className="thirdLine">
              Package Control, Atom Package Manager, and npm.
            </p>
          </div>
          <span className="tools">VS Code Sublime Text Atom iTerm2 Hyper</span>
          <div className="icons">
            <RiGithubFill className="github" />
            <FiExternalLink className="link" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

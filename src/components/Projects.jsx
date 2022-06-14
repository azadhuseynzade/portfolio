import React from "react";
import "../styles/projects.css";
import { RiGithubFill } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import Tello from "../images/project-tello.png";
import Bookcontent from "../images/Book-content - Google Chrome 6_9_2022 7_00_30 PM.png";
function Projects() {
  return (
    <div className="mainProjectsDiv" id="work">
      <div className="tittle-03">
        <div>
          <span className="work-03">03.</span>
          <span className="built-03">Some Things I’ve Built</span>
        </div>
        <div className="aboutMeLine3"></div>
      </div>
      <div className="allProjects">
        <div className="imageSide">
          <a href="https://tello-e-commerce.netlify.app/">
            <img className="tello" src={Tello} alt="tello" />
          </a>
        </div>
        <div className="descriptionSide">
          <p className="featured">E-Commerce Project</p>
          <h4 className="theme">Tello</h4>
          <div className="lineThreeCounts">
            <p className="firstLine">
              Tello project built with ReactJS.I used CommerceJS for creating
            </p>
            <p className="secondLine">
              API.Some technologies which are used in this project:HTML,
            </p>
            <p className="thirdLine">
              SASS,ReactJS,Redux,Material-UI and Styled-components
            </p>
          </div>
          <span className="tools">VS Code Pagination SwiperJS CommerceJS</span>
          <div className="icons">
            <a href="https://github.com/AZADHUSEYNZADE/frontend-final-project">
              <RiGithubFill className="github" />
            </a>
            <a href="https://github.com/AZADHUSEYNZADE/frontend-final-project">
              <FiExternalLink className="link" />
            </a>
          </div>
        </div>
      </div>
      <div className="allProjects2">
        <div className="imageSide">
          <a href="https://github.com/AZADHUSEYNZADE/HTML-CSS-Final-Project-Booknetic">
            <img className="bookContent" src={Bookcontent} alt="tello" />
          </a>
        </div>
        <div className="descriptionSide">
          <p className="featured">Book-shop Project</p>
          <h4 className="theme">Booknetic</h4>
          <div className="lineThreeCounts">
            <p className="firstLine">
              Booknetic project bulit with HTML and BootStrap.This is a ful-
            </p>
            <p className="secondLine">
              ly responsive website.It has four parts:Features,Resources,
            </p>
            <p className="thirdLine">Demo and Buy Now.</p>
          </div>
          <span className="tools">VS Code HTML BootStrap Responsive</span>
          <div className="icons">
            <a href="https://github.com/AZADHUSEYNZADE/HTML-CSS-Final-Project-Booknetic">
              <RiGithubFill className="github" />
            </a>
            <a href="https://github.com/AZADHUSEYNZADE/HTML-CSS-Final-Project-Booknetic">
              <FiExternalLink className="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

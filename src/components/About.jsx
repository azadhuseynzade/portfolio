import React from "react";
import "../styles/about.css";
import Me from "../images/Me.JPG";
import { IoMdArrowDroprightCircle } from "react-icons/io";
function About() {
  return (
    <div id="about">
      <div className="mainAboutMeDiv">
        <div>
          <span className="about-01">01.</span>
          <span className="aboutMe">About Me</span>
        </div>
        <div className="aboutMeLine"></div>
      </div>
      <div className="pictureSideMainDiv">
        <div>
          <p className="leftText">
            Hello! My name is Azad. I am a hardworking and ambitious individual
            with a great passion for Technology. Eager to be challenged in order
            to grow and further improve my IT skills.
          </p>
          <p className="leftText">
            I enjoy creating things that live on the internet. My interest in
            web development started back in 2021 when I decided to try editing
            custom Tumblr themes — turns out hacking together a custom reblog
            button taught me a lot about HTML & CSS!
          </p>
          <p className="leftText">
            Self-directed and energetic with superior performance in both
            autonomous or collaborative environments working independently and
            collaborating with others on group projects.
          </p>
          <p className="leftText">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="mainToolsDiv">
            <ul>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                HTML
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                CSS
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                SASS
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                BootStrap
              </li>
            </ul>
            <ul>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                JavaScript (ES6+)
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                TypeScript
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                React
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                Redux
              </li>
            </ul>
          </div>
        </div>

        <div className="imgDiv">
          <img className="me" src={Me} alt="me" />
        </div>
      </div>
    </div>
  );
}

export default About;

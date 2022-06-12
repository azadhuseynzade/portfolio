import React from "react";
import "../styles/about.css";
import Me from "../images/Me.JPG";
import { IoMdArrowDroprightCircle } from "react-icons/io";
function About() {
  return (
    <div>
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
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="leftText">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className="leftText">
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p className="leftText">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="mainToolsDiv">
            <ul>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                JavaScript (ES6+)
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                React
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                Node.js
              </li>
            </ul>
            <ul>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                TypeScript
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                Eleventy
              </li>
              <li>
                <IoMdArrowDroprightCircle className="skillIcon" />
                WordPress
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

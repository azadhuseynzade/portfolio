import React, { useState, useEffect } from "react";
import "../styles/other-projects.css";
import { BsFolder2 } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import githubProjects from "../github-projects";
function OtherProjects() {
  const [projects, setProjects] = useState(githubProjects);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    setProjects(projects);
  }, []);

  const handleClick = () => {
    if (visible === 3) {
      setVisible((prevValue) => {
        return (prevValue += 3);
      });
    } else {
      setVisible((prevValue) => {
        return 3;
      });
    }
  };

  return (
    <div className="mainOtherProjectsDiv">
      <h1 className="otherh1">Other Noteworthy Projects</h1>
      <p className="archive">view the archive</p>
      <div className="container">
        {projects.slice(0, visible).map((project) => {
          return (
            <div className="box">
              <div className="folderAndLink">
                <BsFolder2 className="folderIcon" />
                <AiOutlineLink className="linkIcon" />
              </div>
              <h6 className="titleOtherProj">{project.title}</h6>
              <p className="descOtherProj">{project.desc}</p>
              <p className="toolsOtherProj">{project.tools}</p>
            </div>
          );
        })}
      </div>
      <button className="loadBtn" onClick={handleClick}>
        {visible === 3 ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}

export default OtherProjects;

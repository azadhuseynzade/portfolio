import React, { useState, useEffect } from "react";
import data from "../data";
import "../styles/work.css";
import { MdOutlineDoubleArrow } from "react-icons/md";
function Work() {
  const [workers, setWorkers] = useState(data);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setWorkers(data);
  }, []);
  const { duties } = workers[value];
  return (
    <div className="mainDiv" id="experience">
      <div className="workTitleDiv">
        <div>
          <span className="work-02">02.</span>
          <span className="whereWorked">Where I’ve Worked</span>
        </div>

        <div className="aboutMeLine"></div>
      </div>
      <div className="mainWorkDiv">
        <div className="leftSideBtn">
          {workers.map((work, index) => {
            return (
              <div className="btn">
                <MdOutlineDoubleArrow className="arrow" />
                <button onClick={() => setValue(index)}>
                  {work.workPlace}
                </button>
              </div>
            );
          })}
        </div>
        <div className="rightSide">
          {duties.map((item) => {
            return (
              <div className="dutySide">
                <p cla className="workExperience">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;

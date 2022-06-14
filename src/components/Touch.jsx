import React from "react";
import "../styles/touch.css";
import { AiFillStar } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";
function Touch() {
  return (
    <div className="mainTouchDiv">
      <p className="next">04. What’s Next?</p>
      <h1 className="touch">Get In Touch</h1>
      <p className="touchFirstLine">
        I’m currently looking for any new opportunities, my inbox is
      </p>
      <p className="touchSecondLine">
        always open. If you have a question or just want to say hi, I’ll try
      </p>
      <p className="touchThirdLine"> to get back to you!</p>
      <a
        href="https://mail.google.com/mail/u/0/#inbox"
        style={{ textDecoration: "none" }}
      >
        <button className="touchBtn">Say Hello</button>
      </a>
      <p className="designed">Designed & Built by Azad Huseynzade</p>
      <div className="lastPartTouch">
        <AiFillStar className="star" />
        <span>300</span>
        <BiGitBranch className="branch" />
        <span>150</span>
      </div>
    </div>
  );
}

export default Touch;

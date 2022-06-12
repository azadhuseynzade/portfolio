import React from "react";
import "../styles/fixed.css";
import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { GrLinkedin } from "react-icons/gr";
import { FiFacebook } from "react-icons/fi";
function Fixed() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="mainFixedDiv">
        <div className="leftSideFixed">
          <AiFillGithub className="ghb" />
          <GrLinkedin className="lnkdn" />
          <AiOutlineInstagram className="instagram" />
          <AiOutlineWhatsApp className="wp" />
          <FiFacebook className="fb" />
          <div className="fixedLine"></div>
        </div>
      </div>
      <div className="mainRightSide">
        <div className="rightSideFixed">
          <p className="reversedText">azadhuseynzade202@gmail.com</p>
          <div className="fixedLine2"></div>
        </div>
      </div>
    </div>
  );
}

export default Fixed;

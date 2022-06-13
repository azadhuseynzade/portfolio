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
          <a href="https://github.com/AZADHUSEYNZADE">
            <AiFillGithub className="ghb" />
          </a>
          <a href="https://www.linkedin.com/in/azad-huseynzade-8bb95a217/">
            <GrLinkedin className="lnkdn" />
          </a>
          <a href="https://www.instagram.com/h.azadd/">
            <AiOutlineInstagram className="instagram" />
          </a>
          <a href="https://web.whatsapp.com/">
            <AiOutlineWhatsApp className="wp" />
          </a>
          <a href="https://www.facebook.com/azad.huseynzade.73">
            <FiFacebook className="fb" />
          </a>
          <div className="fixedLine"></div>
        </div>
      </div>
      <div className="mainRightSide">
        <div className="rightSideFixed">
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <p className="reversedText">azadhuseynzade202@gmail.com</p>
          </a>
          <div className="fixedLine2"></div>
        </div>
      </div>
    </div>
  );
}

export default Fixed;

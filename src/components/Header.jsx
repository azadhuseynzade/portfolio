import React, { useState } from "react";
import "../styles/header.css";
import Logo from "../images/logo-2.webp";
import CV from "../images/Azad-Huseynzade-CV.pdf";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img className="logoImg" src={Logo} alt="logo" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home" className="home">
          <span>01.</span> About
        </a>
        <a href="/about">
          <span>02.</span> Experience
        </a>
        <a href="/service">
          {" "}
          <span>03.</span> Work
        </a>
        <a href="/contact">
          {" "}
          <span>04.</span> Contact
        </a>
        <a href={CV} download className="resume">
          Resume
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;

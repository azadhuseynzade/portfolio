import React, { useState } from "react";
import "../styles/header.css";
import Logo from "../images/logo-2.webp";
import { Anchor } from "antd";
import CV from "../images/Azad-Huseynzade-CV.pdf";
const { Link } = Anchor;
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img className="logoImg" src={Logo} alt="logo" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Anchor affix={false} className="myAnchortag" targetOffset="65">
          <button
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link className="myLink" href="#about" title="01.About" />
          </button>
          <button
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href="#experience" title="02.Experience" />
          </button>
          <button
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href="#work" title="03.Work" />
          </button>
          <button
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href="#contact" title="04.Contact" />
          </button>
        </Anchor>
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

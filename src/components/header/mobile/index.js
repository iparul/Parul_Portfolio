import React from "react";
import "./mobile.css";
import image from "./close.png";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <img
          className="menu-icon"
          src={image}
          alt=""
          style={{ width: "20px" }}
        />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#about">About</a>
        </div>
        <div className="mobile-option">
          <a href="#tools">Tools</a>
        </div>
        <div className="mobile-option">
          <a href="#experience">Experience</a>
        </div>
        <div className="mobile-option">
          <a href="#project">Project</a>
        </div>
        <div className="mobile-option">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;

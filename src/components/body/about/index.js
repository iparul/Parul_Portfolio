import React from "react";
import "./about.css";
import image from "../../../assets/coding.png";
import SocialContact from "../../common/social-contact";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋, my name is
          <br />
          <span className="info-name">Parul Gupta</span>, a 22 year old web
          developer . I am a Computer Science Engineer,currently working with
          awesome folks at Nss Pvt. Ltd.
        </div>
        <div className="about-photo">
          <img src={image} className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;

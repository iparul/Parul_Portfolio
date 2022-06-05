import React, { useState } from "react";
import Separator from "../../common/separator";
import SocialContact from "../../common/social-contact";
import "./contact.css";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <p className="download-text">Download my Resume</p>
          <a
            download
            href={require("../../../assets/Parul_Resume(n).pdf").default}
          >
            <div onClick={() => setIsOpen(!isOpen)}>
              {isOpen === false && (
                <img src="https://akshaysaini.in/img/dwnld.png" />
              )}
            </div>
            <div onClick={() => setIsOpen(!isOpen)}>
              {isOpen === true && (
                <img src="https://akshaysaini.in/img/dwnld.gif" />
              )}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;

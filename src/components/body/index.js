import React from "react";
import About from "./about/index";
import "./body.css";
import Contact from "./contact/index";
import Experience from "./experience/index";
import Projects from "./projects/index";
import Tools from "./tools/index";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;

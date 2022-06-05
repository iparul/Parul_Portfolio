import React from "react";
import Separator from "../../common/separator";
import { SkillsData } from "../../data/skills";
import SkillCard from "./skill-card";
import "./tools.css";

function Tools() {
  const data = SkillsData;
  return (
    <div className="skills">
      <Separator />
      <label className="section-title">Skills</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-list">
              {item.list.map((skill) => {
                return <SkillCard skill={skill} />;
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tools;

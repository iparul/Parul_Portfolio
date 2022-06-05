import React from "react";
import Separator from "../../common/separator";
import { WorkData } from "../../data/work";
import "./experience.css";
import WorkCard from "./work-card";

function Experience() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Experience;

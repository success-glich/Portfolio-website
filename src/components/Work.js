import "./WorkCardStyles.css";

import React from 'react';
import WorkCard from "./WorkCard";

import ProjectCardData from "./workCardData";
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectCardData.map(data=>(
                 <WorkCard title={data.title} text={data.text} view={data.view} imgsrc = {data.imgsrc} source ={data.source}ww/>

            ))}
        </div>
    </div>
  )
}

export default Work
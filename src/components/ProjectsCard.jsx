import "./projectscard.css";
import React from "react";

export default function ProjectsCard(props) {
  return (
    <div>
    <div className="project-card">
      <img className="pic" src={props.proImg} alt="weather" />
      <h3 className="title"> {props.title}</h3>
      <p>
      {props.desc}
      </p>
      <p className="links">
      <a href={props.codeUrl} target="_blank" rel="noreferrer" className="code">  View Code </a>
      </p>
    </div>
  </div>
  );
}

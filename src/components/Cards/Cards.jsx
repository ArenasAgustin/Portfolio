import React, { useState } from "react";
import Card from "../Card/Card";
import { projects } from "../../data/projects";
import "./Cards.scss";

export default function Cards() {
  const [counter, setCounter] = useState(4);
  const [projectsArray, setProjectsArray] = useState(projects.slice(0, 4));
  const [seeMore, setSeeMore] = useState(true);

  const handleClick = async () => {
    let newCounter = counter + 4;

    if (seeMore) {
      if (newCounter < projects.length)
        setProjectsArray(projects.slice(0, newCounter));
      else {
        setProjectsArray(projects);
        setSeeMore(false);
      }

      setCounter(newCounter);
    } else {
      setProjectsArray(projects.slice(0, 4));

      setSeeMore(true);
    }
  };

  return (
    <div className="projects">
      <h2 className="projects-title">PROYECTOS</h2>

      <div className="cards">
        {projectsArray.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            description={project.description}
            deploy={project.deploy}
            github={project.github}
            title={project.title}
          />
        ))}
      </div>

      <div className="see-more-div">
        <a className="see-more" onClick={handleClick}>
          <p className="see-more-txt">{seeMore ? "Ver más" : "Ver menos"}</p>
        </a>
      </div>
    </div>
  );
}

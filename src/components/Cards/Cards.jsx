import React, { useState } from "react";
import Card from "../Card/Card";
import { projects } from "../../data/projects";
import './Cards.css'

export default function Cards() {
    const [projectsArray, setProjectsArray] = useState(projects.slice(0, 4));
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        setProjectsArray(projects);
        setShowButton(false);
    }

    return (
        <div className="products">
            <h2 className="products-title">PROYECTOS</h2>

            <div className="cards">
                {
                    projectsArray.map((project, index) => (
                        <Card
                            key={index}
                            image={project.image}
                            description={project.description}
                            deploy={project.deploy}
                            github={project.github}
                            title={project.title}
                        />
                    ))
                }
            </div>

            {
                showButton
                    ? <div className="see-more-div">
                        <a className="see-more" onClick={handleClick}>
                            <p className="see-more-txt">
                                Ver más
                            </p>
                        </a>
                    </div>

                    : null
            }
        </div>

    );
}

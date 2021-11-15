import React, { useState } from "react";
import Card from "../Card/Card";
import { proyects } from "../../data/proyects";
import './Cards.css'

export default function Cards() {
    const [proyectsArray, setProyectsArray] = useState(proyects.slice(0, 4));
    const [showButton, setShowButton] = useState(true);

    const handleClick = () => {
        setProyectsArray(proyects);
        setShowButton(false);
    }

    return (
        <div className="products">
            <h2 className="products-title">PROYECTOS</h2>

            <div className="cards">
                {
                    proyectsArray.map(proyecto => (
                        <Card
                            key={proyecto._id}
                            image={proyecto.image}
                            description={proyecto.description}
                            deploy={proyecto.deploy}
                            github={proyecto.github}
                            title={proyecto.title}
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

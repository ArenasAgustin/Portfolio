import React from "react";
import Card from "../Card/Card";
import { proyects } from "../../data/proyects";
import './Cards.css'

export default function Cards() {

    return (
        <div className="products">
            <h2 className="products-title">PROYECTOS</h2>

            <div className="cards">
                {
                    proyects.map(proyecto => (
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
        </div>

    );
}

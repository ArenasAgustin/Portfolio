import React, { useState } from "react";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import { proyects } from "../../data/proyects";
import './Cards.css'

export default function Cards() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
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
                        showModal={showModal}
                        setShowModal={openModal}
                    />
                ))
            }


            <Modal
                showModal={showModal}
                setShowModal={openModal}
            />
        </div>
    );
}

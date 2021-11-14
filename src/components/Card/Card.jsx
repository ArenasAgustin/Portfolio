import React from "react";
import './Card.css';

export default function Card({ title, image, description, deploy, github }) {
    return (
        <>
            <div className='card'>
                <div className="card-txt">
                    <h2 className='card-title'>
                        <span>&lt; </span> {title} <span> &#47;&gt;</span>
                    </h2>

                    <p className="card-description">{description?.txt}</p>

                    <div className="card-technologies">
                        {
                            description?.technologies.map((tech, index) => (
                                <span key={index} className='tech'>{tech}</span>
                            ))
                        }
                    </div>

                    <div className="card-links">
                        <a href={deploy} target='_blank' rel="noreferrer" className="deploy-link">
                            <p className="deploy-link-deploy">Deploy</p>
                        </a>

                        <a href={github} target='_blank' rel="noreferrer" className="deploy-link-github">Github</a>
                    </div>
                </div>

                <div>
                    <img src={image} alt={title} className='img-card' />
                </div>
            </div>
        </>

    );
}
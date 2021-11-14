import React from "react";
import Cv from '../../assets/resume.pdf';
import './About.css';

export default function About() {
    return (
        <div className="about" id='about'>
            <div className='about-container'>

            </div>
            <div className="about-card">
                <h1>Sobre mi</h1>

                <p className="about-txt">
                    Programador y web developer, imaginativo, curioso y capaz de resolver diversos problemas. Soy un programador dispuesto a ayudar a mis colegas.
                </p>
                <p className="about-txt">
                    Tengo interés por el estudio de diferentes tecnologías. En la actualidad estoy aprendiendo por mi cuenta el uso de Typescript y React Native. También disfruto con la música y el dibujo.
                </p>
                <a download href={Cv} className="about-btn">Ver resumen</a>
            </div>
        </div>
    )
}
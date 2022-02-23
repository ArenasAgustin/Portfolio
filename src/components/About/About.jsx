import React from "react";
import Cv from '../../assets/CV Agustin Arenas - Full Stack Web Developer.pdf';
import Profile from '../../assets/profile.jpg';
import './About.scss';

export default function About() {
    return (
        <div className="about" id='about'>
            <h1 className='about-title'>SOBRE MI</h1>

            <div className='about-container'>
                <div className='about-image'>
                    <img src={Profile} alt='profile' />
                </div>

                <div className="about-card">
                    <p className="about-txt">
                        Programador y web developer, imaginativo, curioso y capaz de resolver diversos problemas. Soy un programador dispuesto a ayudar a mis colegas.
                    </p>
                    <p className="about-txt">
                        Tengo interés por el estudio de diferentes tecnologías. En la actualidad estoy aprendiendo por mi cuenta el uso de Typescript y React Native. También disfruto con la música y el dibujo.
                    </p>

                    <a download href={Cv} className="about-btn-a">
                        <p className="btn-about">Ver resumen</p>
                    </a>
                </div>
            </div>
        </div>
    )
}
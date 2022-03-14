import React from "react";
import "./Intro.scss";

export default function Intro() {
  return (
    <div className="introduction" id="home">
      <div className="introduction-title">
        <h1>
          Hola, soy{" "}
          <span className="introduction-title-name">Agustin Arenas</span>
        </h1>
        <h1>Soy Full Stack Web Developer dedicado al Front-end</h1>

        <a rel="noreferrer" className="div-btn" href="#about">
          <p className="btn-intro">Conocer más</p>
        </a>
      </div>
    </div>
  );
}

import React from "react";
import Cv from "../../assets/CV Agustin Arenas - Full Stack Web Developer.pdf";
import Profile from "../../assets/profile.jpg";
import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <h1 className="about-title">SOBRE MI</h1>

      <div className="about-container">
        <div className="about-image">
          <img src={Profile} alt="profile" />
        </div>

        <div className="about-card">
          <p className="about-txt">
            Programador y web developer, imaginativo, curioso y capaz de
            resolver diversos problemas. Soy un programador dispuesto a ayudar a
            mis colegas.
          </p>
          <p className="about-txt">
            Tengo interés por el estudio de diferentes tecnologías. También
            disfruto con la música y el dibujo.
          </p>

          <a download href={Cv} className="about-btn-a">
            <p className="btn-about">Ver resumen</p>
          </a>
        </div>
      </div>

      <div className="about-container">
        <div className="about-technology">
          <span className="about-technology__txt">JavaScript</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">TypeScript</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">React</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Redux</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Node.js</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Css</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Sass</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Less</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Html</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">PostgresSQL</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Sequelize</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">MongoDB</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Mongoose</span>

          <img
            src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
            className="about-technology__img mongoose"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Express</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">JSON</span>

          <img
            src="https://cdn.worldvectorlogo.com/logos/json.svg"
            className="about-technology__img"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Git</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            className="about-technology__img"
          />
        </div>
      </div>
    </div>
  );
}

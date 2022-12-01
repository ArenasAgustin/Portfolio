import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills({ isDark }) {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <div
      className={`about ${isDark ? "dark" : ""}`}
      id="about"
      data-aos="fade-up"
    >
      <h1 className="about-title" data-aos="flip-left">
        SOBRE MI
      </h1>

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
            alt="javascript"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">TypeScript</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            className="about-technology__img"
            alt="typescript"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">React</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            className="about-technology__img"
            alt="react"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Redux</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            className="about-technology__img"
            alt="redux"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Node.js</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            className="about-technology__img"
            alt="nodejs"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Css</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            className="about-technology__img"
            alt="css"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Sass</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            className="about-technology__img"
            alt="sass"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Less</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg"
            className="about-technology__img"
            alt="less"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Html</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            className="about-technology__img"
            alt="html"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">PostgresSQL</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            className="about-technology__img"
            alt="postgresql"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Sequelize</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"
            className="about-technology__img"
            alt="sequelize"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">MongoDB</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
            className="about-technology__img"
            alt="mongodb"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Mongoose</span>

          <img
            src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png"
            className="about-technology__img mongoose"
            alt="mongoose"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Express</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            className="about-technology__img"
            alt="express"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">JSON</span>

          <img
            src="https://cdn.worldvectorlogo.com/logos/json.svg"
            className="about-technology__img"
            alt="json"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">Git</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            className="about-technology__img"
            alt="git"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">GitHub</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            className="about-technology__img"
            alt="github"
          />
        </div>

        <div className="about-technology">
          <span className="about-technology__txt">GitLab</span>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
            className="about-technology__img"
            alt="gitlab"
          />
        </div>
      </div>
    </div>
  );
}

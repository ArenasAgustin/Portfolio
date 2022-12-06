import Cv from "../../assets/CV - Agustin Arenas - Full Stack Web Developer.pdf";
import Profile from "../../assets/profile.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

export default function About() {
  useEffect(() => Aos.init({ duration: 1500 }), []);

  return (
    <div className="about" id="about" data-aos="fade-up">
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

          <Button
            download={true}
            href={Cv}
            className="btn-cv"
            txt="Ver resumen"
          />
        </div>
      </div>
    </div>
  );
}

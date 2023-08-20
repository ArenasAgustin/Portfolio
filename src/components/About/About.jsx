import Cv from "../../assets/CV - Agustin Arenas - Full Stack Web Developer.pdf";
import Profile from "../../assets/profile.png";
import ProfileWebp from "../../assets/profile.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

export default function About({ isDark = false }) {
  useEffect(() => {
    Aos.init({ duration: 1500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div
      className={`about ${isDark ? "about--dark" : ""}`}
      id="about"
      data-aos="fade-up"
    >
      <h1
        className={`about__title ${isDark ? "about__title--dark" : ""}`}
        data-aos="flip-left"
      >
        SOBRE MI
      </h1>

      <div className="about__container">
        <div className="about__container-image">
          <picture>
            <source
              className="about__container-img"
              srcSet={ProfileWebp}
              type="image/webp"
            />
            <img className="about__container-img" src={Profile} alt="profile" />
          </picture>
        </div>

        <div className="about__container-card">
          <p className="about-txt">
            Programador y web developer, imaginativo, curioso y capaz de
            resolver diversos problemas. Soy un programador dispuesto a ayudar a
            mis colegas.
          </p>
          <p className="about__container-txt">
            Tengo interés por el estudio de diferentes tecnologías. También
            disfruto con la música y el dibujo.
          </p>

          <Button
            download={true}
            href={Cv}
            className={`btn__link--cv ${isDark ? "btn__link--cv-dark" : ""}`}
            txt="Ver resumen"
            isDark={isDark}
          />
        </div>
      </div>
    </div>
  );
}

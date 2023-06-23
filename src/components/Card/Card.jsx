import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";

export default function Card({
  title,
  image,
  description,
  deploy,
  github,
  isDark = false,
}) {
  useEffect(() => Aos.init({ duration: 1500 }), []);

  const imageSrc = `${process.env.PUBLIC_URL}/assets/images/${image}`;

  return (
    <>
      <div className="card">
        <div className="card__txt" data-aos="fade-up-right">
          <h2 className="card__txt-title">
            <span>&lt; </span> {title} <span> &#47;&gt;</span>
          </h2>

          <p className="card__txt-description">{description?.txt}</p>

          <div className="card__txt-technologies">
            {description?.technologies.map((tech, index) => (
              <span key={index} className={`card__txt-technologies-tech ${isDark ? "card__txt-technologies-tech--dark" : ""}`}>
                {tech}
              </span>
            ))}
          </div>

          <div className="card__txt-links">
            <Button
              href={deploy}
              target="_blank"
              rel="noreferrer"
              txt="Deploy"
              className={`btn__link--margin-right ${
                deploy ? "" : "btn__link--no-link"
              }`}
              isDark={isDark}
            />

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={`card__txt-links-github ${
                github ? "" : "card__txt-links-github--no-link"
              }`}
            >
              Github
            </a>
          </div>
        </div>

        <div className="card__img" data-aos="fade-up-left">
          <picture className="card__img-picture">
            <source
              srcSet={`${imageSrc}.webp`}
              type="image/webp"
              alt={title}
              className="card__img-card"
            />
            <img
              src={`${imageSrc}.png`}
              alt={title}
              className="card__img-card"
            />
          </picture>
        </div>
      </div>
    </>
  );
}

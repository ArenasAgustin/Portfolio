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
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-txt" data-aos="fade-up-right">
          <h2 className="card-title">
            <span>&lt; </span> {title} <span> &#47;&gt;</span>
          </h2>

          <p className="card-description">{description?.txt}</p>

          <div className="card-technologies">
            {description?.technologies.map((tech, index) => (
              <span key={index} className="tech">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-links">
            <Button
              href={deploy}
              target="_blank"
              rel="noreferrer"
              txt="Deploy"
              className={`margin-right ${deploy ? "" : "no-link"}`}
            />

            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className={`deploy-link-github ${github ? "" : "no-link-github"}`}
            >
              Github
            </a>
          </div>
        </div>

        <div className="img-div-card" data-aos="fade-up-left">
          <img src={image} alt={title} className="img-card" />
        </div>
      </div>
    </>
  );
}

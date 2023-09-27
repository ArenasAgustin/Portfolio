import { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Card({
  title,
  image,
  description,
  technologies,
  deploy,
  github,
  isDark = false,
}) {
  useEffect(() => {
    Aos.init({ duration: 1500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  const imageSrc = `${process.env.PUBLIC_URL}/assets/images/${image}`;

  return (
    <>
      <div className="card">
        <div className="card__txt" data-aos="fade-up-right">
          <h2 className="card__txt-title">
            <span>&lt; </span> {title} <span> &#47;&gt;</span>
          </h2>

          <p className="card__txt-description">{description}</p>

          <div className="card__txt-technologies">
            {technologies?.map((tech, index) => (
              <span
                key={index}
                className={`card__txt-technologies-tech ${
                  isDark ? "card__txt-technologies-tech--dark" : ""
                }`}
              >
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

            <Button
              href={github}
              target="_blank"
              rel="noreferrer"
              txt="Github"
              className={`btn__link--margin-right ${
                github ? "" : "btn__link--no-link"
              }`}
              isDark={isDark}
            />
          </div>
        </div>

        <div className="card__img" data-aos="fade-up-left">
          <picture className="card__img-picture">
            <Suspense fallback={renderLoader(isDark)}>
              <img
                src={`${imageSrc}-300.jpg`}
                srcSet={`${imageSrc}-300.jpg 320w, ${imageSrc}-800.jpg 854w, ${imageSrc}.jpg 1366w`}
                sizes={`(min-width: 920px) 720px, calc(84.33vw - 39px)`}
                alt={title}
                className="card__img-card"
                loading="lazy"
              />
            </Suspense>
          </picture>
        </div>
      </div>
    </>
  );
}

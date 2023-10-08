import { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import Image from "next/image";

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

  const imageSrc = `./images/${image}`;

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
          <Suspense fallback={renderLoader(isDark)}>
            <picture className="card__img-picture">
              <source
                srcSet={`${require(`${imageSrc}-300.jpg`)} 320w, ${require(`${imageSrc}-800.jpg`)} 854w, ${require(`${imageSrc}-300.jpg`)} 1366w`}
                media="(min-width: 1200px) 740px, (min-width: 768px) 700px, calc(100vw - 36px)"
                type="image/jpeg"
              />
              <Image
                src={require(`${imageSrc}.jpg`)}
                alt={title}
                className="card__img-card"
                loading="lazy"
                width="100%"
                height="100%"
              />
            </picture>
          </Suspense>
        </div>
      </div>
    </>
  );
}

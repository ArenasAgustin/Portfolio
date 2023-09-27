// import Cv from "../../assets/CV - Agustin Arenas - Full Stack Web Developer.pdf";
import Profile from "../../assets/profile.webp";
import { Suspense, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function About({ isDark = false }) {
  const { t } = useTranslation("global");

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
      <h2
        className={`about__title ${isDark ? "about__title--dark" : ""}`}
        data-aos="flip-left"
      >
        {t("about.title")}
      </h2>

      <div className="about__container">
        <div className="about__container-image">
          <picture>
            <Suspense fallback={renderLoader(isDark)}>
              <Image
                className="about__container-img"
                src={Profile}
                alt="profile"
                loading="lazy"
                width="100%"
                height="100%"
              />
            </Suspense>
          </picture>
        </div>

        <div className="about__container-card">
          <p className="about-txt">{t("about.description1")}</p>
          <p className="about__container-txt">{t("about.description2")}</p>

          {/* <Button
            download={true}
            href={Cv}
            className={`btn__link--cv ${isDark ? "btn__link--cv-dark" : ""}`}
            txt={t("about.btn")}
            isDark={isDark}
          /> */}
        </div>
      </div>
    </div>
  );
}

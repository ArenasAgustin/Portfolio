import { useEffect } from "react";
import { experience as experienceArray } from "../../data/experience";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Experience({ isDark = false }) {
  const { t } = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 1500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className={`experience ${isDark ? "experience--dark" : ""}`}>
      <h2
        className={`experience__title ${
          isDark ? "experience__title--dark" : ""
        }`}
        data-aos="flip-left"
      >
        {t("experience.title")}
      </h2>

      <div className="experience__container">
        <div className="experience__cards">
          {experienceArray.map((experience, index) => (
            <div
              className="experience__display"
              data-aos="fade-right"
              key={index}
            >
              <div
                className={`common__circle common__circle--invert ${
                  isDark
                    ? "common__circle--dark common__circle--dark-invert"
                    : ""
                }`}
              ></div>
              <div
                className={`common__line common__line--invert ${
                  isDark ? "common__line--dark common__line--dark-invert" : ""
                }`}
              ></div>

              <div className="experience__card">
                <h4 className="experience__card-title">
                  {t(`experience.${experience}.position`)}
                </h4>

                <p className="experience__card-institution">
                  {t(`experience.${experience}.business`)}
                </p>

                <p className="experience__card-duration">
                  {t(`experience.${experience}.start`)} -{" "}
                  {t(`experience.${experience}.end`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect } from "react";
import { education as educationArray } from "../../data/education";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

export default function Education({ isDark = false }) {
  const { t } = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 1500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className="education">
      <h2
        className={`education__title ${isDark ? "education__title--dark" : ""}`}
        data-aos="flip-left"
      >
        {t("education.title")}
      </h2>

      <div className="education__cards">
        {educationArray.map((education, index) => (
          <div className="education__display" data-aos="fade-right" key={index}>
            <div
              className={`common__circle ${
                isDark ? "common__circle--dark " : ""
              }`}
            ></div>
            <div
              className={`common__line ${isDark ? "common__line--dark " : ""}`}
            ></div>

            <div
              className={`education__card ${
                isDark ? "education__card--dark" : ""
              }`}
            >
              <h4 className="education__card-title">{education.title}</h4>

              <p className="education__card-institution">
                {education.institution}
              </p>

              <p className="education__card-duration">
                {education.start} - {education.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

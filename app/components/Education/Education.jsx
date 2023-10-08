import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { getEducation } from "@/app/api";
import Loader from "../Loader/Loader";

export default function Education({ isDark = false }) {
  const [educationArray, setEducationArray] = useState([]);
  const { t } = useTranslation("global");

  const getEducationFromApi = async () => {
    const response = await getEducation();
    setEducationArray(response.education);
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    getEducationFromApi();

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
        {educationArray?.length ? (
          educationArray.map((education, index) => (
            <div
              className="education__display"
              data-aos="fade-right"
              key={index}
            >
              <div
                className={`common__circle ${
                  isDark ? "common__circle--dark " : ""
                }`}
              ></div>
              <div
                className={`common__line ${
                  isDark ? "common__line--dark " : ""
                }`}
              ></div>

              <div
                className={`education__card ${
                  isDark ? "education__card--dark" : ""
                }`}
              >
                <p className="education__card-title">
                  {t(`education.${education}.title`)}
                </p>

                <p className="education__card-institution">
                  {t(`education.${education}.institution`)}
                </p>

                <p className="education__card-duration">
                  {t(`education.${education}.start`)} -{" "}
                  {t(`education.${education}.end`)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <Loader isDark={isDark} />
        )}
      </div>
    </div>
  );
}

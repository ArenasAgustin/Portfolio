import { Suspense, useEffect, useState } from "react";
import { skills } from "../../data/skills";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader/Loader";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const renderLoader = (isDark = false) => <Loader isDark={isDark} />;

export default function Skills({ isDark = false }) {
  const [skillsArray, setSkillsArray] = useState(skills.frontEnd);
  const [selectedCategory, setSelectedCategory] = useState("frontEnd");

  const { t } = useTranslation("global");

  const handleSelectCategory = (category) => setSelectedCategory(category);

  useEffect(() => {
    Aos.init({ duration: 1500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  useEffect(() => {
    setSkillsArray(skills[selectedCategory]);

    return () => {
      setSkillsArray(skills[selectedCategory]);
    };
  }, [selectedCategory]);

  return (
    <div
      className={`skills ${isDark ? "skills--dark" : ""}`}
      data-aos="fade-up"
    >
      <h1
        className={`skills__title ${isDark ? "skills__title--dark" : ""}`}
        data-aos="flip-left"
      >
        {t("skills.title")}
      </h1>

      <div className="skills__container">
        <div className="skills__categories">
          <button
            className={`skills__category ${
              selectedCategory === "frontEnd" && "skills__category--selected"
            } ${isDark ? "skills__category--dark" : ""}`}
            onClick={() => handleSelectCategory("frontEnd")}
          >
            {t("skills.Frontend")}
          </button>

          <button
            className={`skills__category ${
              selectedCategory === "backEnd" && "skills__category--selected"
            } ${isDark ? "skills__category--dark" : ""}`}
            onClick={() => handleSelectCategory("backEnd")}
          >
            {t("skills.Backend")}
          </button>

          <button
            className={`skills__category ${
              selectedCategory === "tools" && "skills__category--selected"
            } ${isDark ? "skills__category--dark" : ""}`}
            onClick={() => handleSelectCategory("tools")}
          >
            {t("skills.Tools")}
          </button>
        </div>

        <div className="skills__list">
          {skillsArray.map((skill, index) => (
            <div className="skills__skill" key={index}>
              <div className="skills__skill-img">
                <Suspense fallback={renderLoader(isDark)}>
                  <Image
                    src={require(`./icons/${skill.image}`)}
                    alt={skill.technology}
                    className="skills__skill-img-element"
                    loading="lazy"
                    width="100px"
                    height="100px"
                  />
                </Suspense>
              </div>

              <div className="skills__skill-technology">
                {skill.technology}{" "}
              </div>

              <div className={skill.level}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
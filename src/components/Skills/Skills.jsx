import { useEffect, useState } from "react";
import { skills } from "../../data/skills";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills({ isDark = false }) {
  const [skillsArray, setSkillsArray] = useState(skills.frontEnd);
  const [selectedCategory, setSelectedCategory] = useState("frontEnd");

  const handleSelectCategory = (category) => setSelectedCategory(category);

  useEffect(() => Aos.init({ duration: 1500 }), []);

  useEffect(() => setSkillsArray(skills[selectedCategory]), [selectedCategory]);

  return (
    <div
      className={`skills ${isDark ? "skills--dark" : ""}`}
      data-aos="fade-up"
    >
      <h1 className={`skills__title ${isDark ? "skills__title--dark" : ""}`} data-aos="flip-left">
        Habilidades
      </h1>

      <div className="skills__level">
        <span>Nivel de experiencia:</span>

        <span className="skills__level-item skills__level-item-circle--beginner">
          Principiante <div className="skills__level-item-circle"></div>
        </span>

        <span className="skills__level-item skills__level-item-circle--intermediate">
          Intermedio <div className="skills__level-item-circle"></div>
        </span>

        <span className="skills__level-item skills__level-item-circle--advanced">
          Avanzado <div className="skills__level-item-circle"></div>
        </span>
      </div>

      <div className="skills__container">
        <div className="skills__categories">
          <button
            className={`skills__category ${
              selectedCategory === "frontEnd" && "skills__category--selected"
            } ${isDark ? "skills__category--dark" : ""}`}
            onClick={() => handleSelectCategory("frontEnd")}
          >
            Front End
          </button>

          <button
            className={`skills__category ${
              selectedCategory === "backEnd" && "skills__category--selected"
            } ${isDark ? "skills__category--dark" : ""}`}
            onClick={() => handleSelectCategory("backEnd")}
          >
            Back End y Database
          </button>

          <button
            className={`skills__category ${
              selectedCategory === "tools" && "skills__category--selected"
            } ${isDark ? "skills__category--dark" : ""}`}
            onClick={() => handleSelectCategory("tools")}
          >
            Herramientas y Extras
          </button>
        </div>

        <div className="skills__list">
          {skillsArray.map((skill, index) => (
            <div className="skills__skill" key={index}>
              <div className="skills__skill-img">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icons/${skill.image}`}
                  alt={skill.technology}
                  className="skills__skill-img-element"
                />
              </div>

              <div className="skills__skill-technology">
                {skill.technology}{" "}
                <div
                  className={`skills__level-item-circle ${skill.expLevel}`}
                ></div>
              </div>

              <div className={skill.level}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { skills } from "../../data/skills";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  const [skillsArray, setSkillsArray] = useState(skills.frontEnd);
  const [selectedCategory, setSelectedCategory] = useState("frontEnd");

  const handleSelectCategory = (category) => setSelectedCategory(category);

  useEffect(() => Aos.init({ duration: 1500 }), []);

  useEffect(() => setSkillsArray(skills[selectedCategory]), [selectedCategory]);

  return (
    <div className="skills" data-aos="fade-up">
      <h1 className="skills-title" data-aos="flip-left">
        Habilidades
      </h1>

      <div className="skills-container">
        <div className="skills-categories">
          <button
            className={`skills-category ${
              selectedCategory === "frontEnd" && "selected"
            }`}
            onClick={() => handleSelectCategory("frontEnd")}
          >
            Front End
          </button>

          <button
            className={`skills-category ${
              selectedCategory === "backEnd" && "selected"
            }`}
            onClick={() => handleSelectCategory("backEnd")}
          >
            Back End y Database
          </button>

          <button
            className={`skills-category ${
              selectedCategory === "tools" && "selected"
            }`}
            onClick={() => handleSelectCategory("tools")}
          >
            Herramientas y Extras
          </button>
        </div>

        <div className="skills-list">
          {skillsArray.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skills-img_container">
                <img
                  src={skill.image}
                  alt={skill.technology}
                  className="skill-img"
                />
              </div>

              <p className="skill-technology">{skill.technology}</p>

              <div className={skill.level}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

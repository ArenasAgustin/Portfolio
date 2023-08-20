import { useEffect, useState } from "react";
import { skills } from "../../data/skills";
import { projects } from "../../data/projects";
import Aos from "aos";
import "aos/dist/aos.css";
import { experience } from "../../data/experience";

const ADVANCED = "skills__level-item-circle--advanced";
const INTERMEDIATE = "skills__level-item-circle--intermediate";
const BEGINNER = "skills__level-item-circle--beginner";

export default function Skills({ isDark = false }) {
  const [skillsArray, setSkillsArray] = useState(skills.frontEnd);
  const [selectedCategory, setSelectedCategory] = useState("frontEnd");
  const [skillMap, setSkillMap] = useState({});
  const [max, setMax] = useState(1);

  const setDefaultSkillMap = () => {
    const skillMap = {};
    let max = 1;

    Object.keys(skills)?.forEach((category) => {
      skills[category]?.forEach((skill) => {
        skillMap[skill?.technology] = 1;
      });
    });

    projects?.forEach((project) => {
      project?.description?.technologies?.forEach((technology) => {
        if (skillMap[technology]) skillMap[technology] += 1;
        else skillMap[technology] = 1;

        if (skillMap[technology] > max) max = skillMap[technology];
      });
    });

    experience?.forEach((job) => {
      job?.description?.technologies?.forEach((technology) => {
        if (skillMap[technology]) skillMap[technology] += 1;
        else skillMap[technology] = 1;

        if (skillMap[technology] > max) max = skillMap[technology];
      });
    });

    setSkillMap(skillMap);
    setMax(max);
  };

  const handleSelectCategory = (category) => setSelectedCategory(category);

  const getSkillLevel = (technology) => {
    const level = skillMap[technology] / max;

    if (level <= 0.15) return BEGINNER;
    else if (level <= 0.3) return INTERMEDIATE;
    else return ADVANCED;
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
    setDefaultSkillMap();

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
                  className={`skills__level-item-circle ${getSkillLevel(
                    skill.technology
                  )}`}
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

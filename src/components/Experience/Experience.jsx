import { useEffect } from "react";
import { experience as experienceArray } from "../../data/experience";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => Aos.init({ duration: 1500 }), []);

  return (
    <div className="experience">
      <h2 className="experience-title" data-aos="flip-left">
        Experiencia
      </h2>

      <div className="experience-container">
        <div className="experience-cards">
          {experienceArray.map((experience, index) => (
            <div className="experience-display" data-aos="fade-right">
              <div className="circle"></div>
              <div className="line"></div>

              <div className="experience-card" key={index}>
                <h4 className="card-title">{experience.position}</h4>

                <p className="card-institution">{experience.position}</p>

                <p className="card-duration">
                  {experience.start} - {experience.end}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

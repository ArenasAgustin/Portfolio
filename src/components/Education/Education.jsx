import { useEffect } from "react";
import { education as educationArray } from "../../data/education";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education() {
  useEffect(() => Aos.init({ duration: 1500 }), []);

  return (
    <div className="education">
      <h2 className="education-title" data-aos="flip-left">
        Educación
      </h2>

      <div className="education-cards">
        {educationArray.map((education, index) => (
          <div className="education-display" data-aos="fade-right" key={index}>
            <div className="circle"></div>
            <div className="line"></div>

            <div className="education-card">
              <h4 className="card-title">{education.title}</h4>

              <p className="card-institution">{education.institution}</p>

              <p className="card-duration">
                {education.start} - {education.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

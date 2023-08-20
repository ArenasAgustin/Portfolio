import { lazy, Suspense, useState } from "react";
import { projects } from "../../data/projects";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "../Button/Button";
import Loader from "../Loader/Loader";

const Card = lazy(() => import("../Card/Card"));

const renderLoader = () => <Loader />;

export default function Cards({ isDark = false }) {
  const [counter, setCounter] = useState(4);
  const [projectsArray, setProjectsArray] = useState(projects.slice(0, 4));
  const [seeMore, setSeeMore] = useState(true);

  const handleClick = async () => {
    let newCounter = counter + 4;

    if (seeMore) {
      if (newCounter < projects.length)
        setProjectsArray(projects.slice(0, newCounter));
      else {
        setProjectsArray(projects);
        setSeeMore(false);
      }

      setCounter(newCounter);
    } else {
      setProjectsArray(projects.slice(0, 4));

      setSeeMore(true);
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });

    return () => {
      Aos.refresh();
    };
  }, []);

  return (
    <div className="projects">
      <h2
        className={`projects__title ${isDark ? "projects__title--dark" : ""}`}
        data-aos="flip-left"
      >
        PROYECTOS
      </h2>

      <div className="projects__cards">
        {projectsArray?.length &&
          projectsArray?.map((project, index) => (
            <Suspense fallback={renderLoader()} key={index}>
              <Card
                image={project.image}
                description={project.description}
                deploy={project.deploy}
                github={project.github}
                title={project.title}
                isDark={isDark}
              />
            </Suspense>
          ))}
      </div>

      {projectsArray?.length && (
        <div className="projects__see-more">
          <Button
            className="btn__link--see-more"
            onClick={handleClick}
            txt={seeMore ? "Ver más" : "Ver menos"}
            isDark={isDark}
          />
        </div>
      )}
    </div>
  );
}

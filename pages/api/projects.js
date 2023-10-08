import tecnologies from "./data/tecnologies.json";
import projects from "./data/projects.json";

const setTecnologies = (projectsArray) => {
  return projectsArray.map((project) => {
    return {
      ...project,
      technologies: project.technologies.map((technology) => {
        return tecnologies[technology];
      }),
    };
  });
};

export default function handler(_, res) {
  try {
    let projectsJson = setTecnologies(projects);
    res.status(200).json({ projects: projectsJson });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

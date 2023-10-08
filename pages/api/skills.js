import tecnologies from "./data/tecnologies.json";
import skills from "./data/skills.json";

const setTecnologies = (skillsArray) => {
  return skillsArray.map((skill) => {
    return {
      ...skill,
      technology: tecnologies[skill.technology],
    };
  });
};

export default function handler(_, res) {
  try {
    let skillsJson = {
      frontEnd: setTecnologies(skills.frontEnd),
      backEnd: setTecnologies(skills.backEnd),
      tools: setTecnologies(skills.tools),
    };
    res.status(200).json({ skills: skillsJson });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

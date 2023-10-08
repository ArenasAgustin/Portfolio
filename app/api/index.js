const getFuction = async (endpoint) => {
  const res = await fetch(`/api/${endpoint}`);
  const data = await res.json();
  return data;
};

export const getEducation = async () => {
  return getFuction("education");
};

export const getExperience = async () => {
  return getFuction("experience");
};

export const getTecnologies = async () => {
  return getFuction("tecnologies");
};

export const getSkills = async () => {
  return getFuction("skills");
};

export const getProjects = async () => {
  return getFuction("projects");
};

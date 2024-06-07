import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [dataProjects, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/projects.json");
        const ProjectsData = await response.json();

        setData(ProjectsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(dataProjects);
  console.log(project);
  return <article></article>;
}

ProjectCard.propTypes = {
  project: PropTypes.array.isRequired,
};

export default ProjectCard;

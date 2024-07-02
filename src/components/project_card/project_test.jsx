import { useEffect, useState } from "react";

import Modal from "../modal_projects/modal_projects";

function ProjectTest() {
  const [dataProjects, setData] = useState([]);
  const [dataLogos, setLogos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/database.json");
        const ProjectsData = await response.json();
        setData(ProjectsData.projects);
        setLogos(ProjectsData.logos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section>
      <h2>My projects</h2>
      <div className="Cards">
        {dataProjects &&
          dataProjects.map((project, index) => (
            <Modal key={index} project={project} dataLogos={dataLogos}></Modal>
          ))}
      </div>
    </section>
  );
}

export default ProjectTest;

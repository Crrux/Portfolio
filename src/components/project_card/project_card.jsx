import { Suspense, useEffect, useState } from "react";

import Modal from "../modal_projects/modal_projects";
import Loading from "../loading/loading";
 
function ProjectCard() {
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
    <section className="Projects" id="Projects">
      <h2>My projects</h2>
      <div className="Projects_Cards">
        {dataProjects &&
          dataProjects.map((project, index) => (
            <Suspense fallback={<Loading />} key={index}>
              <Modal project={project} dataLogos={dataLogos}></Modal>
            </Suspense>
          ))}
      </div>
    </section>
  );
}

export default ProjectCard;

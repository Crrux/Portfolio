import { useEffect, useState } from "react";

function ProjectCard() {
  const [dataProjects, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/database.json");
        const ProjectsData = await response.json();

        setData(ProjectsData);
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
        {dataProjects.projects &&
          dataProjects.projects.map((project, index) => (
            <a
              href={project.lienGithub}
              target="_blank"
              key={index}
              className="Cards_Container"
            >
              <article>
                <h3>{project.name}</h3>

                <img src={project.imageURL} alt={`Image of ${project.name}`} />
              </article>
            </a>
          ))}
      </div>
    </section>
  );
}

export default ProjectCard;

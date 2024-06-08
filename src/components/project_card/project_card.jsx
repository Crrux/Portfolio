import { useEffect, useState } from "react";

function ProjectCard() {
  const [dataProjects, setData] = useState([]);
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/database.json");
        const ProjectsData = await response.json();
        setData(ProjectsData);
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
                <div className="Cards_Container_Info">
                  <div className="Cards_Container_Info_Image">
                    <img
                      src={project.imageURL}
                      alt={`Image of ${project.name}`}
                    />
                  </div>
                  <div className="Cards_Container_Info_Description">
                    <p>{project.description}</p>
                    <div className="Cards_Container_Info_Description_imgcontainer">
                      {project.used.map((logoName, index) => {
                        const logo = logos.find((l) => l.title === logoName);
                        return (
                          <img
                            key={index}
                            className="logo"
                            src={logo.URL}
                            alt={logo.alt}
                            title={logo.title}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </article>
            </a>
          ))}
      </div>
    </section>
  );
}

export default ProjectCard;

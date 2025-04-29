import photo from '/assets/photo.webp'
import Logosvg from '../../components/logosvg/logosvg'
import { Suspense, useState, useEffect } from 'react'
import Loading from '../../components/loading/loading'
import Modal from "../../components/modal_projects/modal_projects";

import { useTranslation } from 'react-i18next';


function Home() {
  const [dataProjects, setData] = useState([]);
  const [dataLogos, setLogos] = useState([]);
  const { t } = useTranslation();

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
    <main className='Home'>
      <div className='Home_Presentation_Container'>
        <section className='Home_Container'>
          <div className='Home_Presentation'>
            <Suspense fallback={<Loading />}>
              <img
                src={photo}
                alt='Mountain landscape with Arthur and a dog'
                className='Home_Presentation_Photo'
              />
            </Suspense>

            <div className='Home_Presentation_Text'>
              <h1>{t('welcome')}</h1>
              <p>
                {t('presentation.intro')}
              </p>
              <p>
                {t('presentation.experience')}
              </p>
              <p>
                {t('presentation.contact')}.
              </p>
            </div>
          </div>
          <div className='Home_Language'>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>{t('sections.language')}</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg
                  logos={['HTML', 'CSS', 'Javascript', 'SASS', 'TypeScript', 'Python']}
                />
              </p>
            </div>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>{t('sections.frameworks')}</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg logos={['ExpressJS', 'React', 'NestJS', 'Django']} />
              </p>
            </div>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>{t('sections.tools')}</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg
                  logos={['Git', 'Github', 'mySQL', 'MongoDB', 'NodeJS', 'PostgreSQL']}
                />
              </p>
            </div>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>{t('sections.interests')}</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg logos={['NextJS', "Flask", "TensorFlow"]} />
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="Projects" id="Projects">
        <h2>{t('projects.title')}</h2>
        <div className="Projects_Cards">
          {dataProjects &&
            dataProjects.map((project, index) => (
              <Modal project={project} dataLogos={dataLogos} key={index}></Modal>
            ))}
        </div>
      </section>
    </main>
  )
}

export default Home

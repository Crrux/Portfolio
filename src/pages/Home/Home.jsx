import photo from '/assets/photo.webp'
import Logosvg from '../../components/logosvg/logosvg'
import { Suspense, useState, useEffect } from 'react'
import Loading from '../../components/loading/loading'
import Modal from "../../components/modal_projects/modal_projects";

function Home() {
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
              <h1>Welcome.</h1>
              <p>
                My name is Mursch Arthur and i&apos;m a fullstack web developper
                based in France.
              </p>
              <p>
                Junior web developer eager to learn and do projects that can
                give me the opportunity to take on new challenges and learn.
              </p>
              <p>
                📩 Are you looking for a passionate and versatile developer for
                your next project? Don&apos;t hesitate to contact me to discuss
                your requirements.
              </p>
            </div>
          </div>
          <div className='Home_Language'>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>Language :</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg
                  logos={['HTML', 'CSS', 'Javascript', 'SASS', 'TypeScript']}
                />
              </p>
            </div>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>Frameworks :</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg logos={['ExpressJS', 'React', 'NestJS']} />
              </p>
            </div>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>Side:</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg
                  logos={['Git', 'Github', 'mySQL', 'MongoDB', 'NodeJS']}
                />
              </p>
            </div>
            <div className='Home_Language_pcontainer'>
              <p className='Home_Language_pcontainer_1'>Interested in:</p>
              <p className='Home_Language_pcontainer_2'>
                <Logosvg logos={['NextJS']} />
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="Projects" id="Projects">
        <h2>My projects</h2>
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

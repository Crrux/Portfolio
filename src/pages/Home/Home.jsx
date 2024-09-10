import photo from '/assets/photo.webp'
import Logosvg from '../../components/logosvg/logosvg'
import ProjectCard from '../../components/project_card/project_card'
import { Suspense } from 'react'
import Loading from '../../components/loading/loading'

function Home() {
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
                <Logosvg logos={['ExpressJS', 'React']} />
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
                <Logosvg logos={['NestJS', 'NextJS']} />
              </p>
            </div>
          </div>
        </section>
      </div>
      <ProjectCard />
    </main>
  )
}

export default Home

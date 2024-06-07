import photo from "/assets/photo.jpg";
import Logosvg from "../../components/logosvg/logosvg";

function Home() {
  return (
    <main className="Home">
      <section className="Home_Container">
        <div className="Home_Presentation">
          <img src={photo} className="Home_Presentation_Photo" />
          <div>
            <h1>Welcome.</h1>
            <p>
              My name is Mursch Arthur and i&apos;m a fullstack web developper
              based in France.
            </p>
            <p>
              Junior web developer eager to learn and do projects that can give
              me the opportunity to take on new challenges and learn.
            </p>
            <p>
              📩 Are you looking for a passionate and versatile developer for
              your next project? Don&apos;t hesitate to contact me to discuss
              your requirements.
            </p>
          </div>
        </div>
        <div className="Home_Language">
          <div className="Home_Language_pcontainer">
            <p>
              Language :
              <Logosvg logos={["HTML", "CSS", "Javascript", "SASS"]} />
            </p>
          </div>
          <div className="Home_Language_pcontainer">
            <p>
              Frameworks : <Logosvg logos={["ExpressJS", "React"]} />
            </p>
          </div>
          <div className="Home_Language_pcontainer">
            <p>
              Side: <Logosvg logos={["Git", "Github", "MongoDB", "NodeJS"]} />
            </p>
          </div>
          <div className="Home_Language_pcontainer">
            <p>
              Interested in:
              <Logosvg logos={["mySQL", "NestJS", "NextJS", "Typescript"]} />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;

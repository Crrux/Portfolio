import reactLogo from "/assets/react_logo.svg";
import htmlLogo from "/assets/html_logo.svg";
import javascriptLogo from "/assets/javascript_logo.svg";
import cssLogo from "/assets/css_logo.svg";
import sassLogo from "/assets/sass_logo.svg";
import gitLogo from "/assets/git_logo.svg";
import githubLogo from "/assets/github-icon.svg";
import typescript from "/assets/typescript_logo.svg";
import nextjs from "/assets/nextjs_logo.svg";
import nestjs from "/assets/nestjs_logo.svg";
import mysql from "/assets/mysql_logo.svg";
import expressjs from "/assets/express_logo.svg";

import mongodbLogo from "/assets/mongodb_logo.svg";
import nodejsLogo from "/assets/nodejs_logo.svg";
import photo from "/assets/photo.jpg";

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
          </div>
        </div>
        <div className="Home_Language">
          <table>
            <thead>
              <tr>
                <th scope="col">Language learnt</th>
                <th scope="col">Frameworks</th>
                <th scope="col">Side</th>
                <th scope="col">Interested in</th>
              </tr>
            </thead>
            <tr>
              <td>
                <img
                  src={htmlLogo}
                  className="logo html"
                  alt="HTML logo"
                  title="HTML"
                />
              </td>
              <td>
                <img
                  src={reactLogo}
                  className="logo react"
                  alt="React logo"
                  title="React"
                />
              </td>
              <td>
                <img
                  src={gitLogo}
                  className="logo git"
                  alt="git logo"
                  title="Git"
                />
              </td>
              <td>
                <img
                  src={mysql}
                  className="logo mysql"
                  alt="mySQL logo"
                  title="mySQL"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={cssLogo}
                  className="logo css"
                  alt="CSS logo"
                  title="CSS"
                />
              </td>
              <td>
                <img
                  src={expressjs}
                  className="logo expressjs"
                  alt="ExpressJS logo"
                  title="ExpressJS"
                />
              </td>
              <td>
                <img
                  src={githubLogo}
                  className="logo github"
                  alt="github logo"
                  title="Github"
                />
              </td>
              <td>
                <img
                  src={nestjs}
                  className="logo nestjs"
                  alt="nestJS logo"
                  title="nestJS"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={javascriptLogo}
                  className="logo javascript"
                  alt="Javascript logo"
                  title="Javascript"
                />
              </td>
              <td></td>
              <td>
                <img
                  src={mongodbLogo}
                  className="logo mongo"
                  alt="mongo logo"
                  title="MongoDB"
                />
              </td>
              <td>
                <img
                  src={nextjs}
                  className="logo nextJS"
                  alt="NextJS logo"
                  title="NextJS"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={sassLogo}
                  className="logo sass"
                  alt="Sass logo"
                  title="SASS"
                />
              </td>
              <td></td>
              <td>
                <img
                  src={nodejsLogo}
                  className="logo nodejs"
                  alt="NodeJS logo"
                  title="NodeJS"
                />
              </td>
              <td>
                <img
                  src={typescript}
                  className="logo typescript"
                  alt="typescript logo"
                  title="Typescript"
                />
              </td>
            </tr>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Home;

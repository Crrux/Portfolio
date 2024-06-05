import reactLogo from "/assets/react_logo.svg";
import htmlLogo from "/assets/html_logo.svg";
import javascriptLogo from "/assets/javascript_logo.svg";
import cssLogo from "/assets/css_logo.svg";
import sassLogo from "/assets/sass_logo.svg";
import gitLogo from "/assets/git_logo.svg";
import githubLogo from "/assets/github_logo.svg";
import githubIcon from "/assets/github-icon.svg";
import mongodbLogo from "/assets/mongodb_logo.svg";
import nodejsLogo from "/assets/nodejs_logo.svg";
import photo from "/assets/photo.jpg";

import ProgressBar from "../../components/progress_bar/progressbar";

function Home() {
  return (
    <main className="Home">
      <section>
        <div className="Home_Presentation">
          <img src={photo} className="Home_Presentation_Photo" />
          <div>
            <div className="Home_Presentation_Header">
              <a href="https://github.com/Crrux">
                <img
                  src={githubIcon}
                  className="Home_Presentation_Header_GithubLogo"
                />
              </a>
            </div>
            <h1>Welcome.</h1>
            <p>
              My name is Mursch Arthur and i&apos;m a fullstack web developper
              based in France.
            </p>
          </div>
        </div>
      </section>
      <section className="Home_Knowledge">
        <div className="Progress HomeHTMLProgress">
          <img src={htmlLogo} className="logo html" alt="HTML logo" />
          <ProgressBar progress="80" color="f44336"></ProgressBar>
        </div>
        <div className="Progress HomeCSSProgress">
          <img src={cssLogo} className="logo css" alt="CSS logo" />
          <ProgressBar progress="80" color="1c5d8e"></ProgressBar>
        </div>
        <div className="Progress HomeJavascriptProgress">
          <img
            src={javascriptLogo}
            className="logo javascript"
            alt="Javascript logo"
          />
          <ProgressBar progress="70" color="eed959"></ProgressBar>
        </div>
        <div className="Progress HomeReactProgress">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <ProgressBar progress="60" color="61dafbaa"></ProgressBar>
        </div>
        <div className="Progress HomeSassProgress">
          <img src={sassLogo} className="logo sass" alt="Sass logo" />
          <ProgressBar progress="80" color="C90076"></ProgressBar>
        </div>

        <div className="lngKnown">
          <img src={gitLogo} className="logo git" alt="git logo" />
          <img src={githubLogo} className="logo github" alt="github logo" />
          <img src={mongodbLogo} className="logo mongo" alt="mongo logo" />
          <img src={nodejsLogo} className="logo nodejs" alt="NodeJS logo" />
        </div>
      </section>
    </main>
  );
}

export default Home;

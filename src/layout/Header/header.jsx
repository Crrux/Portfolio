import githubIcon from "/assets/svg/github-icon.svg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <p>MURSCH Arthur</p>
      <nav className="Header_nav">
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <a
          href="https://github.com/Crrux"
          target="_blank"
          className="Header_nav_link_GithubLogo"
        >
          <img src={githubIcon} className="Header_nav_GithubLogo" />
        </a>
      </nav>
    </header>
  );
}

export default Header;

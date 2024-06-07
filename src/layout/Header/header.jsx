import githubIcon from "/assets/svg/github-icon.svg";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="Header">
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <a href="https://github.com/Crrux" target="_blank">
        <img src={githubIcon} className="Header_GithubLogo" />
      </a>
    </header>
  );
}

export default Header;

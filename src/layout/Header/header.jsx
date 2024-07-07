import githubIcon from "/assets/svg/github-icon.svg";

import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="Header">
      <p>MURSCH Arthur</p>
      <nav className="Header_nav">
        <Link
          to={"/"}
          className={location.pathname === "/" ? "activeLink" : ""}
        >
          Home
        </Link>
        {location.pathname === "/" ? <a href="#Projects">Projects</a> : ""}
        <Link
          to={"/contact"}
          className={location.pathname === "/contact" ? "activeLink" : ""}
        >
          Contact
        </Link>
        <a
          href="https://github.com/Crrux"
          target="_blank"
          rel="noopener noreferrer"
          className="Header_nav_link_GithubLogo"
        >
          <img
            src={githubIcon}
            className="Header_nav_GithubLogo"
            alt="Github Logo"
          />
        </a>
      </nav>
    </header>
  );
}

export default Header;

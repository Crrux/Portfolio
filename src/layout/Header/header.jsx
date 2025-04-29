import githubIcon from "/assets/svg/github-icon.svg";
import { useTranslation } from 'react-i18next';

import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header className="Header">
      <h1>Portfolio Mursch Arthur</h1>
      <nav className="Header_nav">
        <Link
          to={"/"}
          className={location.pathname === "/" ? "activeLink" : ""}
        >
          {t("header.home")}
        </Link>
        {location.pathname === "/" ? <a href="#Projects">{t("header.projects")}</a> : ""}
        <Link
          to={"/contact"}
          className={location.pathname === "/contact" ? "activeLink" : ""}
        >
          {t("header.contact")}
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

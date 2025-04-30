import githubIcon from "/assets/svg/github-icon.svg";
import { useTranslation } from 'react-i18next';

import { Link, useLocation } from "react-router-dom";

import lgelogo from "/assets/svg/language.svg";
import { useState } from "react";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  return (
    <header className="Header">
      <h1>Portfolio Mursch Arthur</h1>
      <div>
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
        <div className="Header_langage_container">
          <button
            id="langage"
            type="button"
            onClick={() => setIsActive(!isActive)}
            onMouseOver={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
          >
            <img src={lgelogo} alt="Language Selector" />
          </button>
          <div className={`Header_langage ${isActive || isVisible ? "active" : ""}`}
            onMouseOver={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}>
            <button
              className="Header_langage_button"
              onClick={() => {
                i18n.changeLanguage("en")
                setIsActive(false)
                setIsVisible(false)
              }}
            >
              🇬🇧
            </button>
            <button
              className="Header_langage_button"
              onClick={() => {
                i18n.changeLanguage("fr")
                setIsActive(false)
                setIsVisible(false)
              }}

            >
              🇫🇷
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}

export default Header;

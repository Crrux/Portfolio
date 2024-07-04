import githubIcon from "/assets/svg/github-icon.svg";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
  const location = useLocation();
  const navigate = useNavigate();
  const disconnect = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

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
        <Link
          to={"/test"}
          className={location.pathname === "/test" ? "activeLink" : ""}
        >
          Test
        </Link>
        <>
          {!user ? (
            // <Link to={"/login"}>Login</Link>
            ""
          ) : (
            <span
              tabIndex={0}
              role="button"
              onKeyUp={disconnect}
              onClick={disconnect}
            >
              Logout
            </span>
          )}
        </>
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

Header.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Header;

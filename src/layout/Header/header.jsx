import githubIcon from "/assets/svg/github-icon.svg";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Header({ user, setUser }) {
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
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/test"}>Test</Link>
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
          className="Header_nav_link_GithubLogo"
        >
          <img src={githubIcon} className="Header_nav_GithubLogo" />
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

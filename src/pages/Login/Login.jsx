import PropTypes from "prop-types";
import { useState } from "react";
import { storeInLocalStorage } from "../../lib/common";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_ROUTES } from "../../utils/constants";
// import { APP_ROUTES } from "../../utils/constants";
// import { useUser } from "../../lib/customHooks";

function Login({ user, setUser }) {
  const navigate = useNavigate();
  //   const { user, authenticated } = useUser();
  //     if (user || authenticated) {
  //       navigate(APP_ROUTES.DASHBOARD);
  //     }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState({
    error: false,
    message: "",
  });
  if (user) {
    navigate("/");
  }
  const signIn = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "post",
        url: API_ROUTES.SIGN_IN,
        data: {
          email,
          password,
        },
      });
      if (!response?.data?.token) {
        setNotification({ error: true, message: "Une erreur est survenue" });
        console.log("Something went wrong during signing in: ", response);
      } else {
        storeInLocalStorage(
          response.data.token,
          response.data.userId,
          response.data.valid
        );
        setUser(response.data);
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      setNotification({ error: true, message: err.message });
      console.log("Some error occured during signing in: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="login">
      <div>
        <div>
          {notification.message.length > 0 && <p>{notification.message}</p>}
        </div>
        <div>
          <label htmlFor={email}>
            <p>Adresse email</p>
            <input
              className=""
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label htmlFor="password">
            <p>Mot de passe</p>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div>
            <button type="submit" onClick={signIn}>
              {isLoading ? <div className="" /> : null}
              <span>Se connecter</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

Login.propTypes = {
  user: PropTypes.shape({
    userId: PropTypes.string,
    token: PropTypes.string,
  }),
  setUser: PropTypes.func.isRequired,
};

export default Login;

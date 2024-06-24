import PropTypes from "prop-types";
import { useState } from "react";
import { storeInLocalStorage } from "../../lib/common";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_ROUTES } from "../../utils/constants";
// import { APP_ROUTES } from "../../utils/constants";
// import { useUser } from "../../lib/customHooks";

function SignUp({ setUser }) {
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
  const valid = false;
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
        storeInLocalStorage(response.data.token, response.data.userId);
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

  const signUp = async () => {
    try {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: API_ROUTES.SIGN_UP,
        data: {
          email,
          password,
          valid,
        },
      });
      if (!response?.data) {
        console.log("Something went wrong during signing up: ", response);
        return;
      }
      setNotification({
        error: false,
        message: "Votre compte a bien été créé, vous pouvez vous connecter",
      });
    } catch (err) {
      setNotification({ error: true, message: err.message });
      console.log("Some error occured during signing up: ", err);
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
            <button type="submit" onClick={signUp}>
              {isLoading ? <div /> : null}
              <span>{"Creer compte"}</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

SignUp.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SignUp;

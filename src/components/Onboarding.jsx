import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_LOGIN_TOKEN, SET_SCREEN_MODE } from "../redux/types";
import axios from "axios";

const login = async (params) => {
  try {
    const url = `http://localhost:6001/login`;

    //const params = { email: "dzd@zd.com", password: "password" };
    const result = await axios.post(url, params);

    return result;
  } catch (error) {
    console.log("Error from API", error);
  }
};

// const register = (e) => {
//   e.preventDefault();
//   console.log("register called");
//   dispatch({ type: SET_SCREEN_MODE, payload: 5 });
// };

const Onboarding = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [invalidCreds, setinvalidCreds] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <form className="loginForm">
        <h3>Sign In</h3>
        <input
          onInput={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Enter Username"
        />
        <input
          onInput={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        {invalidCreds === 1 && <p>Incorrect username and/or password </p>}

        <button
          onClick={async (e) => {
            e.preventDefault();
            const result = await login({ email: userName, password });

            if (result.data.status === 0) {
              setinvalidCreds(1);
            } else {
              dispatch({
                type: ADD_LOGIN_TOKEN,
                payload: result.data.token,
              });
            }
            // setUserName("");
          }}
        >
          Login
        </button>
        <p>Don't have an account?</p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();

            dispatch({ type: SET_SCREEN_MODE, payload: 5 });
          }}
        >
          Register now
        </a>
      </form>
    </>
  );
};

export default Onboarding;

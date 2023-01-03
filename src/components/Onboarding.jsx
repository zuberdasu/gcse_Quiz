import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_LOGIN_TOKEN, SET_SCREEN_MODE } from "../redux/types";
import axios from "axios";
import { validate } from "../validation";

const login = async (params) => {
  try {
    //const url = `http://localhost:6001/login`;
    const url = `https://api.zuberdasu.co.uk/login`;

    //const params = { email: "dzd@zd.com", password: "password" };
    const result = await axios.post(url, params);

    return result;
  } catch (error) {
    console.log("Error from API", error);
  }
};

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

            const vResult = validate(1, { userName, password });

            if (vResult === true) {
              const lResult = await login({ email: userName, password });

              if (lResult.data.status === 0) {
                setinvalidCreds(1);
              } else {
                dispatch({
                  type: ADD_LOGIN_TOKEN,
                  payload: lResult.data.token,
                });
              }
              // setUserName("");
            } else {
              setinvalidCreds(1);
            }
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

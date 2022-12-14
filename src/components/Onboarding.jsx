import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../redux/types";
import axios from "axios";

const login = async (params) => {
  try {
    const url = `http://localhost:6001/login`;
    console.log(params);

    //const params = { email: "dzd@zd.com", password: "password" };
    const result = await axios.post(url, params);
    console.log("12", result.data);

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
          onClick={async () => {
            //const result = login({ email: userName, password });
            const result1 = await login({ email: userName, password });
            console.log(result1);
            if (result1.data.status === 0) {
              console.log("0 returned");
            } else {
              console.log("1 returned");
            }

            dispatch({
              type: ADD_USER,
              payload: { userName, password },
            });

            // if (result === 0) {
            //   setinvalidCreds(1);
            // } else {
            //   dispatch({
            //     type: ADD_USER,
            //     payload: { userName, password },
            //   });
            // }
            // setUserName("");
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Onboarding;

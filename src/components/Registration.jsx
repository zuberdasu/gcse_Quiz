import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_LOGIN_TOKEN, SET_SCREEN_MODE } from "../redux/types";
import axios from "axios";

const register = async (params) => {
  try {
    const url = `http://localhost:6001/create`;

    const result = await axios.post(url, params);

    return result;
  } catch (error) {
    console.log("Error from API", error);
  }
};

const login = async (params) => {
  try {
    const url = `http://localhost:6001/login`;

    const result = await axios.post(url, params);

    return result;
  } catch (error) {
    console.log("Error from API", error);
  }
};

const Registration = () => {
  const [firstName, setFirstName] = useState();
  const [surname, setSurname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailUsed, setEmailUsed] = useState(0);

  const dispatch = useDispatch();

  return (
    <>
      <form className="registrationForm">
        <h3>Sign up</h3>
        <input
          onInput={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Enter First Name"
        />
        <input
          onInput={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Enter Surname"
        />
        <input
          onInput={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter Email"
        />
        <input
          onInput={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        {emailUsed === 1 && <p>An account with this email already exists</p>}

        <button
          onClick={async (e) => {
            e.preventDefault();
            const result = await register({
              first_name: firstName,
              surname,
              email,
              password,
            });

            if (result.data.status === 0) {
              setEmailUsed(1);
            } else {
              const result = await login({ email, password });

              if (result.data.status === 0) {
                console.log("incorrect login result");
              } else {
                dispatch({
                  type: ADD_LOGIN_TOKEN,
                  payload: result.data.token,
                });
              }
            }
          }}
        >
          Sign Up
        </button>

        <p>Already have an account?</p>
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();

            dispatch({ type: SET_SCREEN_MODE, payload: 1 });
          }}
        >
          Login
        </a>
      </form>
    </>
  );
};

export default Registration;

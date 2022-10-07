import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../redux/types";

const Onboarding = () => {
  const [userName, setUserName] = useState();
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
          onInput={(e) => setUserName(e.target.value)}
          type="password"
          placeholder="Enter Password"
        />
        <button
          onClick={() => {
            dispatch({ type: ADD_USER, payload: userName });
            setUserName("");
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Onboarding;

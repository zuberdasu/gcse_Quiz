import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../redux/types";

const Onboarding = () => {
  const [userName, setUserName] = useState();
  const dispatch = useDispatch();

  return (
    <>
      <h1>Onboarding</h1>
      <input onInput={(e) => setUserName(e.target.value)} type="text" />
      <button
        onClick={() => {
          dispatch({ type: ADD_USER, payload: userName });
          setUserName("");
        }}
      >
        Login
      </button>
    </>
  );
};

export default Onboarding;

import React, { Component } from "react";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { SET_TOPIC } from "../redux/types";

const Topics = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Select a topic</h1>
      <nav>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "architecture" })}
        >
          Systems Architecture
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "memory" })}
        >
          Memory and Storage
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "networks" })}
        >
          Computer networks
        </button>
      </nav>

      <Navigation></Navigation>
    </>
  );
};

export default Topics;

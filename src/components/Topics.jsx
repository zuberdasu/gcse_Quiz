import React, { Component } from "react";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { SET_TOPIC } from "../redux/types";

const Topics = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Select a topic</h1>
      <nav class="topicNav">
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
          Computer Networks
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "security" })}
        >
          Network Security
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "systems" })}
        >
          Systems Software
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "impacts" })}
        >
          Impacts of Digital Technology
        </button>
      </nav>

      <Navigation></Navigation>
    </>
  );
};

export default Topics;

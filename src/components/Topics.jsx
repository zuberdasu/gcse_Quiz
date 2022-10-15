import React, { Component } from "react";
import Navigation from "./Navigation";
import { useDispatch } from "react-redux";
import { SET_TOPIC } from "../redux/types";

const Topics = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Select a topic</h1>
      <h2>Computer Systems</h2>
      <nav className="topicNav">
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
      <h2>Computational Thinking, Algorithms and Programming</h2>

      <nav className="topicNav">
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "algorithms" })}
        >
          Algorithms
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "programming" })}
        >
          Programming Fundamentals
        </button>
        <button
          onClick={() =>
            dispatch({ type: SET_TOPIC, payload: "robustPrograms" })
          }
        >
          Producing Robust Programs
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "boolean" })}
        >
          Boolean Logic
        </button>
        <button
          onClick={() => dispatch({ type: SET_TOPIC, payload: "languages" })}
        >
          Programming Languages
        </button>
      </nav>

      <Navigation></Navigation>
    </>
  );
};

export default Topics;

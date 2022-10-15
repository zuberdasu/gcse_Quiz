import React, { Component } from "react";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { SEND_RESULTS } from "../redux/types";

const Questions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic);
  const questions = useSelector((state) => state.topics);
  let topicQuestions = {};

  switch (selectedTopic) {
    case "architecture":
      topicQuestions = questions[0].architecture;
      break;
    case "memory":
      topicQuestions = questions[0].memory;
      break;
    case "networks":
      topicQuestions = questions[0].networks;
      break;
    case "security":
      topicQuestions = questions[0].security;
      break;
    case "systems":
      topicQuestions = questions[0].systems;
      break;
    case "impacts":
      topicQuestions = questions[0].impacts;
      break;
    case "algorithms":
      topicQuestions = questions[0].algorithms;
      break;
    case "programming":
      topicQuestions = questions[0].programming;
      break;
    case "robustPrograms":
      topicQuestions = questions[0].robustPrograms;
      break;
    case "boolean":
      topicQuestions = questions[0].boolean;
      break;
    case "languages":
      topicQuestions = questions[0].languages;
      break;

    default:
      break;
  }
  //const questions = useSelector((state) => state.topics[0].selectedTopic);
  const dispatch = useDispatch();

  const checkAnswers = (e) => {
    console.log(e.target.elements);
    e.preventDefault();
    let incorrectQuestions = [];
    let correctQuestions = [];

    let score = 0;
    for (let index = 0; index < e.target.elements.length; index++) {
      if (e.target.elements[index].checked) {
        const questionArrayIndex = e.target.elements[index].name;
        const selectedOption = e.target.elements[index].value;
        const correctOption =
          topicQuestions[e.target.elements[index].name].correct;
        if (selectedOption == correctOption) {
          score += 1;
          correctQuestions.push(questionArrayIndex);
        } else {
          incorrectQuestions.push(questionArrayIndex);
        }
      }
    }

    const results = {
      score: score,
      incorrectQuestions: incorrectQuestions,
      correctQuestions: correctQuestions,
    };
    dispatch({ type: SEND_RESULTS, payload: results });
  };
  return (
    <>
      <Navigation></Navigation>
      <form onSubmit={checkAnswers} className="quizForm">
        {topicQuestions.map((question, questionIndex) => {
          return (
            <div className="questionContainer">
              <h3>{question.question}</h3>
              {question.answers.map((answer, index) => {
                return (
                  <>
                    <label>
                      <input
                        type="radio"
                        name={questionIndex}
                        value={index}
                      ></input>
                      <i></i>
                      {answer}
                    </label>
                  </>
                );
              })}
            </div>
          );
        })}
        <button>Submit Answers</button>
      </form>
    </>
  );
};

export default Questions;

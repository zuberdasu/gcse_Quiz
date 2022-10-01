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

    default:
      break;
  }
  //const questions = useSelector((state) => state.topics[0].selectedTopic);
  const dispatch = useDispatch();

  const checkAnswers = (e) => {
    e.preventDefault();
    let incorrectQuestions = [];
    let score = 0;
    for (let index = 0; index < e.target.elements.length; index++) {
      if (e.target.elements[index].checked) {
        const questionArrayIndex = e.target.elements[index].name;
        const selectedOption = e.target.elements[index].value;
        const correctOption =
          topicQuestions[e.target.elements[index].name].correct;
        if (selectedOption == correctOption) {
          score += 1;
        } else {
          incorrectQuestions.push(questionArrayIndex);
        }
      }
    }

    const results = { score: score, incorrectQuestions: incorrectQuestions };
    dispatch({ type: SEND_RESULTS, payload: results });
  };
  return (
    <>
      <form onSubmit={checkAnswers}>
        {topicQuestions.map((question, questionIndex) => {
          return (
            <>
              <h3>{question.question}</h3>
              {question.answers.map((answer, index) => {
                return (
                  <>
                    <label>{answer}</label>
                    <input
                      type="radio"
                      name={questionIndex}
                      value={index}
                    ></input>
                  </>
                );
              })}
            </>
          );
        })}
        <button>Submit Answers</button>
      </form>
    </>
  );
};

export default Questions;

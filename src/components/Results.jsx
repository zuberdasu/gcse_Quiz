import React, { Component } from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const Results = () => {
  const results = useSelector((state) => state.results);

  const selectedTopic = useSelector((state) => state.selectedTopic);

  const questions = useSelector((state) => state.topics);

  let topicQuestions = {};

  switch (selectedTopic) {
    case "architecture":
      console.log("architecture");
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

  const filtered = topicQuestions.filter((question, index) => {
    console.log(question, index);
    console.log(results.incorrectQuestions);
    if (results.incorrectQuestions.includes(String(index))) {
      return true;
    }
  });

  return (
    <>
      <h1>You scored {`${results.score}`}</h1>
      <h3>Questions not answered correctly</h3>

      {filtered.map((question, questionIndex) => {
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
                    disabled="{true}"
                  ></input>
                </>
              );
            })}
          </>
        );
      })}

      <Navigation></Navigation>
    </>
  );
};

export default Results;

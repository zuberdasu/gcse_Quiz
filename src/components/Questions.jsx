import React, { Component } from "react";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { SEND_RESULTS } from "../redux/types";

const Questions = () => {
  const questions = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  console.log(questions);

  const checkAnswers = (e) => {
    e.preventDefault();
    let incorrectQuestions = [];
    let score = 0;
    for (let index = 0; index < e.target.elements.length; index++) {
      if (e.target.elements[index].checked) {
        //console.log(e.target.elements[index].name);
        //console.log(e.target.elements[index].value);
        //console.log(e.target.elements[index].checked);
        //console.log(questions[e.target.elements[index].name].correct);

        // console.log(typeof e.target.elements[index].value);
        // console.log(typeof questions[e.target.elements[index].name].correct);
        const questionArrayIndex = e.target.elements[index].name;
        const selectedOption = e.target.elements[index].value;
        const correctOption = questions[e.target.elements[index].name].correct;
        if (selectedOption == correctOption) {
          score += 1;
          console.log("correct");
        } else {
          console.log("incorrect");
          incorrectQuestions.push(questionArrayIndex);
        }
      }
    }
    console.log(score);
    console.log(incorrectQuestions);

    const results = { score: score, incorrectQuestions: incorrectQuestions };
    console.log(results);
    dispatch({ type: SEND_RESULTS, payload: results });
  };
  return (
    <>
      <form onSubmit={checkAnswers}>
        {questions.map((question, questionIndex) => {
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

import React, { useRef } from "react";
import Navigation from "./Navigation";
import Timer from "./Timer";
import { useSelector, useDispatch } from "react-redux";
import { SEND_RESULTS } from "../redux/types";

const Questions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic);
  const questions = useSelector((state) => state.topics);
  const questionsFormRef = useRef(null);

  let topicQuestions = [];
  let keys = [];
  let values = [];

  for (let i = 0; i < questions.length; i++) {
    keys = Object.keys(questions[i]);
    if (keys[0] === selectedTopic) {
      values = Object.values(questions[i]);
      topicQuestions = values[0];
    }
  }

  const dispatch = useDispatch();

  const checkAnswersOnExpire = () => {
    let incorrectQuestions = [];
    let correctQuestions = [];

    let score = 0;
    for (
      let index = 0;
      index < questionsFormRef.current.elements.length;
      index++
    ) {
      if (questionsFormRef.current.elements[index].checked) {
        const questionArrayIndex =
          questionsFormRef.current.elements[index].name;
        const selectedOption = questionsFormRef.current.elements[index].value;
        const correctOption =
          topicQuestions[questionsFormRef.current.elements[index].name].correct;
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

  const checkAnswers = (e) => {
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
      <div className="stickyTop">
        <Navigation></Navigation>
        <Timer checkAnswersOnExpire={checkAnswersOnExpire}></Timer>
      </div>
      <form onSubmit={checkAnswers} className="quizForm" ref={questionsFormRef}>
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

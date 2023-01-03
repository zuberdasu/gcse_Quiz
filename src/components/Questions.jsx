import React, { useRef, useState } from "react";
import Navigation from "./Navigation";
import Timer from "./Timer";
import { useSelector, useDispatch } from "react-redux";
import { SEND_RESULTS } from "../redux/types";
import { getItem } from "../localStorage";
import axios from "axios";

const readMaxScore = async (params) => {
  try {
    //const url = `http://localhost:6001/readScores`;
    const url = `https://api.zuberdasu.co.uk/readScores`;
    const result = await axios.post(url, params);

    return result;
  } catch (error) {
    console.log("Error from API", error);
  }
};

const Questions = () => {
  const selectedTopic = useSelector((state) => state.selectedTopic);
  const questions = useSelector((state) => state.topics);
  const questionsFormRef = useRef(null);
  const [maxScore, setMaxScore] = useState();

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

  const token = getItem("token").token;
  const params = {
    token,
    topic: selectedTopic,
  };

  readMaxScore(params).then(
    (result) => {
      if (result.data.status === 1) {
        setMaxScore(result.data.score[0]);
      }
    },
    (error) => {
      console.log(error);
    }
  );

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
      <h2>
        {`${selectedTopic}`.charAt(0).toUpperCase() +
          `${selectedTopic}`.slice(1)}
      </h2>

      {maxScore && <h3>Previous best score: {`${maxScore}`}</h3>}
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

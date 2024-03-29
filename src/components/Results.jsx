import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const results = useSelector((state) => state.results);

  const selectedTopic = useSelector((state) => state.selectedTopic);

  const questions = useSelector((state) => state.topics);

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

  const filteredIncorrect = topicQuestions.filter((question, index) => {
    if (results.incorrectQuestions.includes(String(index))) {
      return true;
    }
  });

  const filteredCorrect = topicQuestions.filter((question, index) => {
    if (results.correctQuestions.includes(String(index))) {
      return true;
    }
  });

  let filteredUnanswered = topicQuestions.filter((question, index) => {
    if (
      !results.correctQuestions.includes(String(index)) &&
      !results.incorrectQuestions.includes(String(index))
    ) {
      return true;
    }
  });

  return (
    <>
      <Navigation></Navigation>
      <h1>You scored {`${results.score}`} out of 10</h1>
      {filteredIncorrect.length !== 0 && (
        <h3>Questions not answered correctly</h3>
      )}

      {filteredIncorrect.map((question, questionIndex) => {
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
                      disabled="true"
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

      {filteredCorrect.length !== 0 && <h3>Questions answered correctly</h3>}

      {filteredCorrect.map((question, questionIndex) => {
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
                      disabled="true"
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

      {filteredUnanswered.length !== 0 && <h3>Questions not answered</h3>}

      {filteredUnanswered.map((question, questionIndex) => {
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
                      disabled="true"
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
    </>
  );
};

export default Results;

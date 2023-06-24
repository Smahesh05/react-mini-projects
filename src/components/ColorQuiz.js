import React, { useEffect, useState } from "react";

import "./ColorQuiz.css";

const ColorQuiz = () => {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(undefined);

  const getRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomColor}`;
  };

  const Result = {
    correct: "correct",
    wrong: "wrong",
  };

  const pickColor = () => {
    const actualColor = getRandomColor();
    setColor(actualColor);
    setAnswers(
      [actualColor, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
    setResult(undefined);
  };

  useEffect(() => {
    pickColor();
  }, []);

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === color) {
      setResult(Result.correct);
      setTimeout(pickColor, 1000);
    } else {
      setResult(Result.wrong);
    }
  };

  return (
    <div className="App">
      <div className="color-picker__app">
        <h1>ColorQuiz</h1>
        <div>
          <div className="guess__me" style={{ background: color }}></div>
          {answers.map((answer) => (
            <button key={answer} onClick={() => handleAnswerClick(answer)}>
              {answer}
            </button>
          ))}
          {result === Result.correct && (
            <p className="correct">Correct answer!</p>
          )}
          {result === Result.wrong && <p className="wrong">Wrong answer!</p>}
        </div>
      </div>
    </div>
  );
};

export default ColorQuiz;

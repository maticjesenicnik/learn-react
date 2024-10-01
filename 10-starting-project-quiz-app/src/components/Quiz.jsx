import { useState } from "react";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const activeQuestion = QUESTIONS[activeQuestionIndex];

  const handleSelectAnswer = selectedAnswer => {
    setUserAnswers(prevAnswer => {
      return [...prevAnswer, selectedAnswer];
    });
  };

  return (
    <div id="quiz">
      <div id="question">
        <h2>{activeQuestion.text}</h2>
        <ul id="answers">
          {activeQuestion.answers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

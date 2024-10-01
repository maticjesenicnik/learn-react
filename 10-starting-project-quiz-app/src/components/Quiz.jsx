import { useState } from "react";
import QuizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = selectedAnswer => {
    setUserAnswers(prevAnswer => {
      return [...prevAnswer, selectedAnswer];
    });
  };

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={QuizCompleteImage} alt="A trophy showcasing the quiz is complete" />
        <h2>Quiz completed!</h2>
      </div>
    );
  }

  const activeQuestion = QUESTIONS[activeQuestionIndex];
  const shuffledAnswers = [...activeQuestion.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <h2>{activeQuestion.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer, index) => (
            <li key={index} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

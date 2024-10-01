import { useState } from "react";
import QuizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

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

  return (
    <div id="quiz">
      <Question question={activeQuestion} onSelect={handleSelectAnswer} />
    </div>
  );
}

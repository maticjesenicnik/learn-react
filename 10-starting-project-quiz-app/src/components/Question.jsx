import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ question, onSelect, onSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectAnswer = answer => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: question.answers[0] == answer,
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkip} />
      <h2>{question.text}</h2>
      <Answers answers={question.answers} selectedAnswer={answer.selectedAnswer} onSelect={handleSelectAnswer} answerState={answerState} />
    </div>
  );
}

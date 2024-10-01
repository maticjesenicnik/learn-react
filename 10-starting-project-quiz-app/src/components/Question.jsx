import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ question, onSelect, onSkip }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

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
      <QuestionTimer key={timer} timeout={timer} onTimeout={answer.selectedAnswer === "" ? onSkip : null} mode={answerState} />
      <h2>{question.text}</h2>
      <Answers answers={question.answers} selectedAnswer={answer.selectedAnswer} onSelect={handleSelectAnswer} answerState={answerState} />
    </div>
  );
}

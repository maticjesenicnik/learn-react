import { useCallback, useRef, useState } from "react";
import QuizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
import Question from "./Question";

export default function Quiz() {
  const shuffledAnswers = useRef();
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(
    selectedAnswer => {
      setAnswerState("answered");
      setUserAnswers(prevAnswer => {
        return [...prevAnswer, selectedAnswer];
      });

      setTimeout(() => {
        setAnswerState(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0] ? "correct" : "wrong");

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

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
      <Question
        key={activeQuestionIndex}
        question={activeQuestion}
        onSelect={handleSelectAnswer}
        onSkip={handleSkipAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
      />
    </div>
  );
}

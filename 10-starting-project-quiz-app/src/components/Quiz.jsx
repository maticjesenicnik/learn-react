import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const isQuizComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(selectedAnswer => {
    setUserAnswers(prevAnswer => {
      return [...prevAnswer, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question key={activeQuestionIndex} question={QUESTIONS[activeQuestionIndex]} onSelect={handleSelectAnswer} onSkip={handleSkipAnswer} selectedAnswer={userAnswers[userAnswers.length - 1]} />
    </div>
  );
}

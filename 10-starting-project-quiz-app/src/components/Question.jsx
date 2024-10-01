import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ question, onSelect, onSkip, selectedAnswer, answerState }) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkip} />
      <h2>{question.text}</h2>
      <Answers answers={question.answers} selectedAnswer={selectedAnswer} onSelect={onSelect} answerState={answerState} />
    </div>
  );
}

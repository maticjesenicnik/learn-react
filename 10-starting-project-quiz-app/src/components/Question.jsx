import QuestionTimer from "./QuestionTimer";

export default function Question({ question, onSelect, onSkip }) {
  const shuffledAnswers = [...question.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="question">
      <QuestionTimer key={question.text} timeout={10000} onTimeout={onSkip} />
      <h2>{question.text}</h2>
      <ul id="answers">
        {shuffledAnswers.map((answer, index) => (
          <li key={index} className="answer">
            <button onClick={() => onSelect(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

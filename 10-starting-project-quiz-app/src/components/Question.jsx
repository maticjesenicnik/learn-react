export default function Question({ question, onSelect }) {
  const shuffledAnswers = [...question.answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="question">
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

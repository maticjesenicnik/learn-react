import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        let buttonCss = "";

        if (answerState === "" && isSelected) {
          buttonCss = "selected";
        } else if ((answerState === "correct" || answerState === "wrong") && isSelected) {
          buttonCss = answerState;
        }

        return (
          <li key={index} className="answer">
            <button onClick={() => onSelect(answer)} className={buttonCss}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

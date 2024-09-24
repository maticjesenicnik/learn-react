import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
  }

  const handleTimerStart = () => {
    timer.current = setInterval(() => {
      setTimeRemaining(prev => prev - 10);
    }, 10);
  };

  const handleTimerStop = () => {
    clearInterval(timer.current);
    dialog.current.open();
  };

  const handleTimerReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal ref={dialog} result="lost" targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleTimerReset} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} {targetTime > 1 ? "seconds" : "second"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleTimerStop : handleTimerStart}>{timerIsActive ? "Stop" : "Start"} Challenge</button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>{timerIsActive ? "Timer is running..." : "Timer inactive"}</p>
      </section>
    </>
  );
}

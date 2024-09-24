import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleTimerStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  };

  const handleTimerStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} {targetTime > 1 ? "seconds" : "second"}
      </p>
      <p>
        <button onClick={timerStarted ? handleTimerStop : handleTimerStart}>{timerStarted ? "Stop" : "Start"} Challenge</button>
      </p>
      <p className={timerStarted ? "active" : undefined}>{timerStarted ? "Timer is running..." : "Timer inactive"}</p>
    </section>
  );
}

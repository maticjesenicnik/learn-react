import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    let startTime, rafId;

    const loop = currentTime => {
      const deltaTime = currentTime - startTime || 0;
      setRemainingTime(prevRemainingTime => prevRemainingTime - deltaTime);
      startTime = currentTime;
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}

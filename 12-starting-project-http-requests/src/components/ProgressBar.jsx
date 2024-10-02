import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

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

  return <progress value={remainingTime} max={timer} />;
}

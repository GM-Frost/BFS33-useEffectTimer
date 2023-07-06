import { useEffect, useState } from "react";

function Timer({ title }) {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setElapsedTime(elapsedTime + 1);
    }, 1000);
  }, [elapsedTime]);

  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <p className="timer">{elapsedTime} seconds</p>
      </div>
    </>
  );
}

export default Timer;

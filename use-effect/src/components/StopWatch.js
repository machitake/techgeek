import { useState, useEffect } from "react";

export default function StopWatch() {
  const [counter, setCounter] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => setCounter(counter => Math.round((counter + 0.01) * 100) / 100), 10);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  function start() {
    setIsRunning(true);
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setIsRunning(false);
    setCounter(0);
  }


  return (
    <div className="container">
      <h1>{counter}</h1>
      <div className="stop-watch-buttons">
        <button className="start" onClick={start}>スタート</button>
        <button className="stop" onClick={stop}>ストップ</button>
      <button className="reset" onClick={reset}>リセット</button>
      </div>
    </div>
  );
}
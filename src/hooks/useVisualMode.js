import { useState } from 'react';

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    const updatedHistory = replace
      ? [...history.slice(0, history.length - 1), newMode]
      : [...history, newMode];

    setHistory(updatedHistory);
  }

  const back = () => {
    if (history.length > 1) {
      setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    }
  };

  return { mode: history[history.length - 1], transition, back };
};

export default useVisualMode;

/* As seen here, the `useVisualMode` function can take an initial argument to set the mode state. We then return an object `{ mode }`, which can also be written as `{ mode: mode }`. This lets our tests (and components) access the current value of the mode from the hook. */
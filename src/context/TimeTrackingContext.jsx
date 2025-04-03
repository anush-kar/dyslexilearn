import React, { createContext, useState, useEffect, useRef } from "react";

const TimeTrackingContext = createContext();

const TimeTrackingProvider = ({ children }) => {
  const [totalTimeSpent, setTotalTimeSpent] = useState(3605);
  const timeRef = useRef(totalTimeSpent);

  useEffect(() => {
    timeRef.current = totalTimeSpent;
  }, [totalTimeSpent]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalTimeSpent((prev) => prev + 1);
    }, 1000);

    const handleUnload = () => {
      fetch("/api/update-total-time", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalTime: timeRef.current }),
      });
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  return (
    <TimeTrackingContext.Provider value={totalTimeSpent}>
      {children}
    </TimeTrackingContext.Provider>
  );
};

// Ensure named exports are stable
export { TimeTrackingContext, TimeTrackingProvider };
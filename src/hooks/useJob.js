import { useContext } from "react";
import { JobContext } from "../context/JobContext";

// 🚀 Custom hook to access Job Context cleanly
export const useJobs = () => {
  const context = useContext(JobContext);

  if (!context) {
    throw new Error("useJobs must be used inside a JobProvider");
  }

  return context;
};

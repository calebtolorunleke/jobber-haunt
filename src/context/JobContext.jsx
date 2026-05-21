import { createContext, useContext, useEffect, useState } from "react";

export const JobContext = createContext();

export const useJobs = () => {
  return useContext(JobContext);
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobberhaunt-jobs"));

    if (storedJobs && storedJobs.length > 0) {
      setJobs(storedJobs);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("jobberhaunt-jobs", JSON.stringify(jobs));
  }, [jobs]);

  const addJob = (job) => {
    const newJob = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().split("T")[0],
      status: "Applied",
      ...job,
    };

    setJobs((prev) => [newJob, ...prev]);
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  const updateJobStatus = (id, status) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, status } : job)),
    );
  };

  const updateJob = (id, updatedData) => {
    setJobs((prev) =>
      prev.map((job) => (job.id === id ? { ...job, ...updatedData } : job)),
    );
  };

  const stats = {
    total: jobs.length,
    applied: jobs.filter((j) => j.status === "Applied").length,
    interview: jobs.filter((j) => j.status === "Interview").length,
    offer: jobs.filter((j) => j.status === "Offer").length,
    rejected: jobs.filter((j) => j.status === "Rejected").length,
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        addJob,
        deleteJob,
        updateJobStatus,
        updateJob,
        stats,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

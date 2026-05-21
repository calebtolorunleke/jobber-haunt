import { useState } from "react";
import { useJobs } from "../hooks/useJob";

import JobForm from "../components/forms/JobForm";
import JobCard from "../components/ui/JobCard";

const Jobs = () => {
  const { jobs, addJob, deleteJob } = useJobs();
  const [filter, setFilter] = useState("All");

  // 🔍 FILTER LOGIC
  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Jobs
          </h1>
          <p className="text-sm text-gray-500">
            Track and manage your job applications
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-2">

          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-2xl text-sm font-medium transition ${
                filter === f
                  ? "bg-indigo-500 text-white shadow"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}

        </div>
      </div>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* FORM SECTION */}
        <div className="lg:col-span-1">
          <JobForm onAddJob={addJob} />
        </div>

        {/* JOB LIST */}
        <div className="lg:col-span-2 space-y-4">

          {filteredJobs.length === 0 ? (
            <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
              <p className="text-gray-500">
                No jobs found for this filter
              </p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onDelete={deleteJob}
              />
            ))
          )}

        </div>

      </div>
    </div>
  );
};

export default Jobs;
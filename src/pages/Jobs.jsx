import { useState } from "react";
import { useJobs } from "../hooks/useJob";
import JobForm from "../components/forms/JobForm";
import JobCard from "../components/ui/JobCard";
import { motion } from "framer-motion";

const Jobs = () => {
  const { jobs, addJob, deleteJob } = useJobs();
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

  const filteredJobs =
    filter === "All"
      ? jobs
      : jobs.filter((job) => job.status === filter);

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Jobs
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Manage your applications as a structured pipeline
          </p>
        </div>

        {/* SEGMENTED FILTER */}
        <div className="flex bg-white/70 border border-gray-200 rounded-2xl p-1 backdrop-blur-xl shadow-sm">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm rounded-xl transition font-medium ${
                filter === f
                  ? "bg-indigo-500 text-white shadow"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* FORM (STICKY ON DESKTOP) */}
        <div className="lg:col-span-1">
          <div className="lg:sticky lg:top-6">
            <JobForm onAddJob={addJob} />
          </div>
        </div>

        {/* JOB FEED */}
        <div className="lg:col-span-2 space-y-4">

          {filteredJobs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-12 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                No applications found
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Try changing the filter or add a new job to get started.
              </p>
            </motion.div>
          ) : (
            <div className="space-y-3">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <JobCard job={job} onDelete={deleteJob} />
                </motion.div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default Jobs;
import { useJobs } from "../hooks/useJob";
import StatCard from "../components/ui/StatCard";
import JobCard from "../components/ui/JobCard";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { jobs, stats, deleteJob } = useJobs();

  const recentJobs = jobs.slice(0, 3);

  const interviewRate = stats.total
    ? Math.round((stats.interview / stats.total) * 100)
    : 0;

  const offerRate = stats.total
    ? Math.round((stats.offer / stats.total) * 100)
    : 0;

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Your job search operating system
        </p>
      </div>

      {/* KPI GRID */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <StatCard title="Total" value={stats.total} icon="💼" color="indigo" />
        <StatCard title="Applied" value={stats.applied} icon="📤" color="blue" />
        <StatCard title="Interview" value={stats.interview} icon="🎯" color="yellow" />
        <StatCard title="Offers" value={stats.offer} icon="🏆" color="green" />
        <StatCard title="Rejected" value={stats.rejected} icon="❌" color="red" />
      </motion.div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: INTELLIGENCE PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-1 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 shadow-sm"
        >

          <h2 className="text-lg font-semibold text-gray-900">
            Insights
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            System-generated overview of your progress
          </p>

          {/* METRICS */}
          <div className="mt-6 space-y-4 text-sm text-gray-600">

            <div className="flex justify-between">
              <span>Total Applications</span>
              <span className="font-semibold text-gray-900">{stats.total}</span>
            </div>

            <div className="flex justify-between">
              <span>Interview Rate</span>
              <span className="font-semibold text-gray-900">{interviewRate}%</span>
            </div>

            <div className="flex justify-between">
              <span>Offer Rate</span>
              <span className="font-semibold text-gray-900">{offerRate}%</span>
            </div>

          </div>

          {/* PROGRESS BARS */}
          <div className="mt-8 space-y-5">

            {/* INTERVIEW */}
            <div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Interview Conversion</span>
                <span>{interviewRate}%</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-2 bg-yellow-500 rounded-full transition-all"
                  style={{ width: `${interviewRate}%` }}
                />
              </div>
            </div>

            {/* OFFER */}
            <div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Offer Conversion</span>
                <span>{offerRate}%</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-2 bg-green-500 rounded-full transition-all"
                  style={{ width: `${offerRate}%` }}
                />
              </div>
            </div>

          </div>

        </motion.div>

        {/* RIGHT: RECENT JOBS */}
        <div className="lg:col-span-2 space-y-4">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Applications
            </h2>

            <span className="text-xs text-gray-500">
              Latest activity stream
            </span>
          </div>

          {/* JOB LIST */}
          <div className="space-y-3">

            {recentJobs.length === 0 ? (
              <div className="bg-white/70 border border-gray-200 rounded-2xl p-12 text-center text-gray-500">
                No applications yet. Start by adding your first job.
              </div>
            ) : (
              recentJobs.map((job) => (
                <JobCard key={job.id} job={job} onDelete={deleteJob} />
              ))
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
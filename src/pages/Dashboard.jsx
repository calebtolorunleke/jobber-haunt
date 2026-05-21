import { useJobs } from "../hooks/useJob";
import StatCard from "../components/ui/StatCard";
import JobCard from "../components/ui/JobCard";

const Dashboard = () => {
  const { jobs, stats, deleteJob } = useJobs();

  // 🧠 recent jobs (latest 3)
  const recentJobs = jobs.slice(0, 3);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Overview of your job search activity
        </p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

        <StatCard
          title="Total"
          value={stats.total}
          icon="💼"
          color="indigo"
        />

        <StatCard
          title="Applied"
          value={stats.applied}
          icon="📤"
          color="blue"
        />

        <StatCard
          title="Interview"
          value={stats.interview}
          icon="🎯"
          color="yellow"
        />

        <StatCard
          title="Offer"
          value={stats.offer}
          icon="🏆"
          color="green"
        />

        <StatCard
          title="Rejected"
          value={stats.rejected}
          icon="❌"
          color="red"
        />

      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT: INSIGHTS PANEL */}
        <div className="lg:col-span-1 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Quick Insights
          </h2>

          <div className="space-y-3 text-sm text-gray-600">

            <p>
              📊 You have{" "}
              <span className="font-semibold text-gray-800">
                {stats.total}
              </span>{" "}
              total applications.
            </p>

            <p>
              🎯{" "}
              <span className="font-semibold text-gray-800">
                {stats.interview}
              </span>{" "}
              interviews scheduled.
            </p>

            <p>
              🏆{" "}
              <span className="font-semibold text-gray-800">
                {stats.offer}
              </span>{" "}
              offers received.
            </p>

            <p>
              ❌{" "}
              <span className="font-semibold text-gray-800">
                {stats.rejected}
              </span>{" "}
              rejections so far.
            </p>

          </div>

          {/* PROGRESS BARS */}
          <div className="mt-6 space-y-3">

            <div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Interview Rate</span>
                <span>
                  {stats.total
                    ? Math.round((stats.interview / stats.total) * 100)
                    : 0}
                  %
                </span>
              </div>

              <div className="h-2 bg-yellow-100 rounded-full mt-1">
                <div
                  className="h-2 bg-yellow-500 rounded-full"
                  style={{
                    width: `${
                      stats.total
                        ? (stats.interview / stats.total) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT: RECENT JOBS */}
        <div className="lg:col-span-2 space-y-4">

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Applications
            </h2>

            <span className="text-sm text-gray-500">
              Latest 3 entries
            </span>
          </div>

          {recentJobs.length === 0 ? (
            <div className="bg-white/70 border border-gray-200 rounded-2xl p-10 text-center text-gray-500">
              No jobs added yet
            </div>
          ) : (
            recentJobs.map((job) => (
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

export default Dashboard;
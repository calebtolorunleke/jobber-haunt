import { useJobs } from "../hooks/useJob";
import StatCard from "../components/ui/StatCard";
import { motion } from "framer-motion";

const Analytics = () => {
  const { stats } = useJobs();

  const total = stats.total || 1;

  const metrics = [
    {
      label: "Applied",
      value: stats.applied,
      color: "bg-blue-500",
      percent: (stats.applied / total) * 100,
    },
    {
      label: "Interview",
      value: stats.interview,
      color: "bg-yellow-500",
      percent: (stats.interview / total) * 100,
    },
    {
      label: "Offers",
      value: stats.offer,
      color: "bg-green-500",
      percent: (stats.offer / total) * 100,
    },
    {
      label: "Rejected",
      value: stats.rejected,
      color: "bg-red-500",
      percent: (stats.rejected / total) * 100,
    },
  ];

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Analytics
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Understand how your job search is performing
        </p>
      </div>

      {/* KPI CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
      >
        <StatCard title="Total" value={stats.total} icon="💼" color="indigo" />
        <StatCard title="Applied" value={stats.applied} icon="📤" color="blue" />
        <StatCard title="Interview" value={stats.interview} icon="🎯" color="yellow" />
        <StatCard title="Offers" value={stats.offer} icon="🏆" color="green" />
        <StatCard title="Rejected" value={stats.rejected} icon="❌" color="red" />
      </motion.div>

      {/* MAIN ANALYTICS PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm"
      >
        <h2 className="text-lg font-semibold text-gray-900">
          Funnel Overview
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Conversion across your job pipeline
        </p>

        {/* PROGRESS METRICS */}
        <div className="mt-8 space-y-5">

          {metrics.map((m, i) => (
            <div key={i} className="space-y-2">

              <div className="flex justify-between text-sm text-gray-600">
                <span>{m.label}</span>
                <span className="font-medium">{m.value}</span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.percent || 0}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`h-2 rounded-full ${m.color}`}
                />
              </div>

            </div>
          ))}

        </div>
      </motion.div>

    </div>
  );
};

export default Analytics;
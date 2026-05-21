import { useJobs } from "../hooks/useJob";
import StatCard from "../components/ui/StatCard";

const Analytics = () => {
  const { stats } = useJobs();

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        <p className="text-sm text-gray-500">
          Overview of your job search performance
        </p>
      </div>

      {/* KPI GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard
          title="Total Applications"
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
          title="Interviews"
          value={stats.interview}
          icon="🎯"
          color="yellow"
        />

        <StatCard title="Offers" value={stats.offer} icon="🏆" color="green" />

        <StatCard
          title="Rejected"
          value={stats.rejected}
          icon="❌"
          color="red"
        />
      </div>

      {/* CHART PLACEHOLDER */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">
          Application Funnel
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Chart visualization coming next (we’ll add Recharts or Chart.js here)
        </p>

        {/* FAKE VISUAL BARS (for now - makes UI feel real) */}
        <div className="mt-6 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Applied</span>
              <span>{stats.applied}</span>
            </div>
            <div className="h-2 bg-blue-100 rounded-full mt-1">
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{
                  width: `${(stats.applied / stats.total) * 100 || 0}%`,
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Interview</span>
              <span>{stats.interview}</span>
            </div>
            <div className="h-2 bg-yellow-100 rounded-full mt-1">
              <div
                className="h-2 bg-yellow-500 rounded-full"
                style={{
                  width: `${(stats.interview / stats.total) * 100 || 0}%`,
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Offers</span>
              <span>{stats.offer}</span>
            </div>
            <div className="h-2 bg-green-100 rounded-full mt-1">
              <div
                className="h-2 bg-green-500 rounded-full"
                style={{ width: `${(stats.offer / stats.total) * 100 || 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

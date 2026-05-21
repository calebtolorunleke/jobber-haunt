import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium ${
      isActive
        ? "bg-indigo-500 text-white shadow-lg"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <aside className="w-[260px] h-screen bg-white/70 backdrop-blur-xl border-r border-gray-200 flex flex-col p-6">

      {/* BRAND */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          JobberHaunt
        </h1>

        <p className="text-xs text-gray-500 mt-1">
          Track your job hunt like a system
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">

        <NavLink to="/" className={linkClass}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/jobs" className={linkClass}>
          💼 Jobs
        </NavLink>

        <NavLink to="/analytics" className={linkClass}>
          📈 Analytics
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          ⚙️ Settings
        </NavLink>

      </nav>

      {/* FOOTER SECTION */}
      <div className="mt-auto">

        <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100">

          <p className="text-sm font-semibold text-indigo-600">
            Stay consistent 🚀
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Your job pipeline compounds over time.
          </p>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
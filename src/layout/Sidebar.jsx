import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
      isActive
        ? "bg-indigo-500 text-white shadow-lg"
        : "text-gray-600 hover:bg-white hover:shadow-sm"
    }`;

  return (
    <aside className="w-[260px] h-screen bg-white/70 backdrop-blur-xl border-r border-gray-200 p-6 flex flex-col">
      {/* BRAND */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-800">JobberHaunt</h1>
        <p className="text-xs text-gray-500">Track your job hunt like a pro</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkStyle}>
          📊 Dashboard
        </NavLink>

        <NavLink to="/jobs" className={linkStyle}>
          💼 Jobs
        </NavLink>

        <NavLink to="/analytics" className={linkStyle}>
          📈 Analytics
        </NavLink>

        <NavLink to="/settings" className={linkStyle}>
          ⚙️ Settings
        </NavLink>
      </nav>

      {/* FOOTER */}
      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="bg-indigo-50 rounded-2xl p-4">
          <p className="text-sm font-semibold text-indigo-600">
            Stay consistent 🚀
          </p>

          <p className="text-xs text-gray-500 mt-1">
            Your job hunt pipeline matters.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

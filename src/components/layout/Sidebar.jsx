import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `group relative flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 font-medium overflow-hidden ${
      isActive
        ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[270px] h-screen bg-white/70 backdrop-blur-xl border-r border-gray-200 flex flex-col p-6"
    >
      {/* BRAND */}
      <div className="mb-10">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg">
            J
          </div>

          <h1 className="text-xl font-bold text-gray-800 tracking-tight">
            JobberHaunt
          </h1>
        </div>

        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Track, optimize, and win your job search system
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2">

        <NavLink to="/" className={linkClass}>
          <span>📊</span> Dashboard
        </NavLink>

        <NavLink to="/jobs" className={linkClass}>
          <span>💼</span> Jobs
        </NavLink>

        <NavLink to="/analytics" className={linkClass}>
          <span>📈</span> Analytics
        </NavLink>

        <NavLink to="/settings" className={linkClass}>
          <span>⚙️</span> Settings
        </NavLink>

      </nav>

      {/* SPACER */}
      <div className="flex-1" />

      {/* PRO TIP CARD */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-white/40 to-purple-500/10 border border-white/20 shadow-sm backdrop-blur-xl"
      >
        <p className="text-sm font-semibold text-indigo-600">
          Stay consistent 🚀
        </p>

        <p className="text-xs text-gray-500 mt-1 leading-relaxed">
          Every application is a data point. Improve your system weekly.
        </p>
      </motion.div>
    </motion.aside>
  );
};

export default Sidebar;
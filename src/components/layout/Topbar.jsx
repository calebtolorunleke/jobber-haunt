import { useState } from "react";
import { motion } from "framer-motion";

const Topbar = () => {
  const [query, setQuery] = useState("");

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-16 px-6 flex items-center justify-between bg-white/70 backdrop-blur-xl border-b border-gray-200"
    >

      {/* LEFT: PAGE IDENTITY ONLY */}
      <div className="flex flex-col">
        <h2 className="text-sm font-semibold text-gray-900">
          Dashboard
        </h2>

        <p className="text-xs text-gray-500">
          Job tracking system
        </p>
      </div>

      {/* CENTER: OPTIONAL SEARCH (ONLY IF NEEDED) */}
      <div className="hidden md:flex">
        <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2 rounded-xl text-sm focus-within:ring-2 focus-within:ring-indigo-400 transition">
          <span className="text-gray-400">🔍</span>

          <input
            type="text"
            placeholder="Search jobs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none w-[180px]"
          />
        </div>
      </div>

      {/* RIGHT: ONLY ONE ACTION */}
      <div className="flex items-center gap-3">

        {/* PRIMARY ACTION */}
        <button className="px-4 py-2 text-sm bg-black text-white rounded-xl hover:scale-[1.03] transition">
          New Job
        </button>

        {/* AVATAR ONLY */}
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-bold shadow-md">
          J
        </div>

      </div>

    </motion.header>
  );
};

export default Topbar;

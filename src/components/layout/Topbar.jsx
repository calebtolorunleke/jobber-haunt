import { useState } from "react";

const Topbar = () => {
  const [query, setQuery] = useState("");

  return (
    <header className="h-20 px-6 flex items-center justify-between bg-white/70 backdrop-blur-xl border-b border-gray-200">

      {/* LEFT SECTION */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Manage your job applications efficiently
        </p>
      </div>

      {/* CENTER SEARCH */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-indigo-400 transition">
          <span className="text-gray-400">🔍</span>

          <input
            type="text"
            placeholder="Search jobs, companies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none text-sm w-[220px]"
          />

          <span className="text-xs bg-gray-100 px-2 py-1 rounded-lg text-gray-500">
            Ctrl K
          </span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-3">

        {/* NOTIFICATIONS */}
        <button className="relative w-10 h-10 flex items-center justify-center rounded-2xl bg-white border border-gray-200 hover:shadow-md transition">
          🔔
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* STATUS */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-gray-600 bg-white border border-gray-200 px-3 py-2 rounded-2xl shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Active Pipeline
        </div>

        {/* AVATAR (NO ROLE INFO HERE AS REQUESTED) */}
        <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center font-bold shadow-md">
          J
        </div>

      </div>
    </header>
  );
};

export default Topbar;
const Topbar = () => {
  return (
    <header className="h-20 bg-white/70 backdrop-blur-2xl border-b border-white/30 flex items-center justify-between px-6 shadow-sm">

      {/* LEFT SECTION */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          JobberHaunt
        </h2>

        <div className="flex items-center gap-3 mt-1">

          <p className="text-sm text-gray-500">
            Track applications, interviews & offers efficiently
          </p>

          {/* LIVE STATUS */}
          <span className="hidden md:flex items-center gap-2 text-xs text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Live Pipeline
          </span>

        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">

        {/* SEARCH BAR */}
        <button className="hidden lg:flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 min-w-[220px]">

          <span className="text-gray-400">🔍</span>

          <span className="text-sm text-gray-400">
            Search jobs...
          </span>

          <span className="ml-auto text-xs bg-gray-100 border border-gray-200 px-2 py-1 rounded-lg text-gray-500">
            Ctrl K
          </span>

        </button>

        {/* QUICK STATS */}
        <div className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg">

          <span className="text-sm font-semibold">
            12 Applications
          </span>

          <span className="text-xs opacity-80">
            this week
          </span>

        </div>

        {/* NOTIFICATIONS */}
        <button className="relative w-11 h-11 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md hover:bg-gray-50 transition-all duration-300">

          🔔

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

        </button>

        {/* USER PROFILE */}
        <button className="flex items-center gap-3 bg-white border border-gray-200 px-3 py-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">

          <div className="text-right hidden md:block">

            <p className="text-sm font-semibold text-gray-700">
              Workspace
            </p>

            <p className="text-xs text-gray-500">
              Premium Plan
            </p>

          </div>

          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center font-bold shadow-lg">
            J
          </div>

        </button>

      </div>

    </header>
  );
};

export default Topbar;
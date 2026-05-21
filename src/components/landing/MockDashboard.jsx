import { motion, useScroll, useTransform } from "framer-motion";

const MockDashboard = () => {
  const { scrollY } = useScroll();

  // PARALLAX
  const y = useTransform(scrollY, [0, 500], [0, -60]);
  const rotate = useTransform(scrollY, [0, 500], [0, -2]);

  return (
    <section className="relative px-4 md:px-8 mt-24 md:mt-32">
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full" />
      </div>

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 shadow-lg">
          ✨ Modern AI-powered Job Tracking Dashboard
        </div>
      </motion.div>

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
          Everything you need to manage your job search
        </h2>

        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Built with modern workflows in mind — track applications, interviews,
          offers, and analytics inside one beautifully crafted system.
        </p>
      </motion.div>

      {/* DASHBOARD */}
      <motion.div
        style={{ y, rotateX: rotate }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative mt-16 md:mt-20 max-w-7xl mx-auto perspective-[2000px]"
      >
        {/* OUTER GLOW */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-[40px]" />

        {/* WINDOW */}
        <div className="relative rounded-[32px] overflow-hidden border border-white/10 bg-[#0F1117]/90 backdrop-blur-2xl shadow-2xl">
          {/* TOP BAR */}
          <div className="h-14 border-b border-white/10 bg-white/5 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-yellow-400 rounded-full" />
              <div className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="px-3 py-1 rounded-lg bg-white/5 text-xs text-gray-400">
                Dashboard
              </div>

              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="grid lg:grid-cols-[260px_1fr] min-h-[650px]">
            {/* SIDEBAR */}
            <div className="hidden lg:flex flex-col border-r border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-white font-semibold text-xl mb-10">
                JobberHaunt
              </h3>

              <div className="space-y-3">
                {[
                  "Dashboard",
                  "Applications",
                  "Analytics",
                  "Interviews",
                  "Settings",
                ].map((item, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 rounded-xl text-sm transition ${
                      i === 0
                        ? "bg-indigo-500 text-white shadow-lg"
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* PRO CARD */}
              <div className="mt-auto rounded-2xl p-5 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl">
                <p className="text-sm text-indigo-100">
                  Upgrade to Pro for AI-powered analytics.
                </p>

                <button className="mt-4 w-full py-2 rounded-xl bg-white text-black text-sm font-medium">
                  Upgrade
                </button>
              </div>
            </div>

            {/* MAIN DASHBOARD */}
            <div className="p-5 md:p-8">
              {/* KPI CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    title: "Applications",
                    value: "124",
                    color: "from-indigo-500 to-blue-500",
                  },

                  {
                    title: "Interviews",
                    value: "18",
                    color: "from-purple-500 to-pink-500",
                  },

                  {
                    title: "Offers",
                    value: "6",
                    color: "from-orange-400 to-pink-500",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -6 }}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    <div
                      className={`absolute inset-0 opacity-20 bg-gradient-to-br ${card.color}`}
                    />

                    <div className="relative z-10">
                      <p className="text-gray-400 text-sm">{card.title}</p>

                      <h3 className="mt-4 text-4xl font-bold text-white">
                        {card.value}
                      </h3>

                      <p className="mt-2 text-green-400 text-sm">
                        +12% this month
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ANALYTICS */}
              <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-5 mt-5">
                {/* CHART CARD */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="p-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">
                        Application Insights
                      </h3>

                      <p className="text-gray-400 text-sm mt-1">
                        Performance over the last 30 days
                      </p>
                    </div>

                    <div className="text-green-400 text-sm">+28%</div>
                  </div>

                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
                    alt="analytics"
                    className="w-full h-[320px] object-cover"
                  />
                </motion.div>

                {/* SIDE PANEL */}
                <div className="space-y-5">
                  {/* INTERVIEW CARD */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Next Interview</p>

                        <h3 className="text-white text-xl font-semibold mt-2">
                          Frontend Engineer
                        </h3>
                      </div>

                      <div className="w-12 h-12 rounded-2xl overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=400&auto=format&fit=crop"
                          alt="company"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between text-sm">
                      <p className="text-gray-400">Tomorrow • 2:00 PM</p>

                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                        Scheduled
                      </span>
                    </div>
                  </motion.div>

                  {/* ACTIVITY CARD */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
                  >
                    <h3 className="text-white font-semibold">
                      Recent Activity
                    </h3>

                    <div className="mt-5 space-y-4">
                      {[
                        "Applied to Stripe",
                        "Interview at Vercel",
                        "Offer from Linear",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-400" />

                          <p className="text-gray-300 text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MockDashboard;

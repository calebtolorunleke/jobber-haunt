import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#050507] text-gray-400 border-t border-white/10">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-indigo-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-[-250px] right-[-100px] w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-10">

        {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-white/[0.03] to-purple-500/10 backdrop-blur-2xl p-8 md:p-14 mb-24"
        >

          {/* INNER GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-6">
                ✨ Start smarter job tracking today
              </div>

              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
                Your career deserves a better workflow
              </h2>

              <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                Organize applications, track interviews, and land opportunities
                with a modern productivity platform built for ambitious professionals.
              </p>

            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

              <button className="px-7 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300 shadow-2xl">
                Get Started
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 transition-all duration-300">
                Book Demo
              </button>

            </div>

          </div>

        </motion.div>

        {/* MAIN FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-14">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-2xl">
                J
              </div>

              <div>
                <h2 className="text-white text-2xl font-semibold tracking-tight">
                  JobberHaunt
                </h2>

                <p className="text-sm text-gray-500">
                  Modern career operating system
                </p>
              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
              A next-generation job tracking SaaS designed to help ambitious
              professionals organize applications, monitor opportunities,
              and accelerate career growth.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              {["𝕏", "in", "ig", "gh"].map((social, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-sm text-white cursor-pointer hover:bg-white/10 transition"
                >
                  {social}
                </motion.div>
              ))}

            </div>

          </div>

          {/* LINKS */}
          {[
            {
              title: "Product",
              links: [
                "Dashboard",
                "Analytics",
                "Job Tracking",
                "Interview Pipeline",
                "AI Insights",
              ],
            },

            {
              title: "Resources",
              links: [
                "Documentation",
                "Help Center",
                "Guides",
                "API",
                "Status",
              ],
            },

            {
              title: "Company",
              links: [
                "About",
                "Careers",
                "Blog",
                "Contact",
                "Partners",
              ],
            },
          ].map((section, index) => (
            <div key={index}>

              <h3 className="text-white font-semibold mb-6 text-lg">
                {section.title}
              </h3>

              <div className="space-y-4">

                {section.links.map((link, i) => (
                  <motion.p
                    key={i}
                    whileHover={{ x: 6 }}
                    className="text-gray-400 hover:text-white transition cursor-pointer text-sm md:text-base"
                  >
                    {link}
                  </motion.p>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* NEWSLETTER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10"
        >

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold">
                Stay ahead in your career
              </h3>

              <p className="text-gray-400 mt-3 max-w-xl">
                Get product updates, career insights, and productivity tips
                directly in your inbox.
              </p>
            </div>

            {/* INPUT */}
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[320px] px-5 py-4 rounded-2xl bg-black/40 border border-white/10 text-white placeholder:text-gray-500 outline-none focus:border-indigo-500 transition"
              />

              <button className="px-7 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300">
                Subscribe
              </button>

            </div>

          </div>

        </motion.div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          <div className="flex items-center gap-6 text-gray-500">
            <p>© {new Date().getFullYear()} JobberHaunt</p>
            <p>All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6 text-gray-500">

            <p className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Terms
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Cookies
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
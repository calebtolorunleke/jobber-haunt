import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Job Tracking",
    description:
      "Organize every application, interview, and offer inside one beautifully crafted workflow.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Visual Hiring Pipeline",
    description:
      "Track your entire career pipeline with intuitive status flows and modern productivity systems.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  },

  {
    title: "Advanced Analytics",
    description:
      "Understand trends, interview rates, and application performance with actionable insights.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  },
];

const Features = () => {
  return (
    <section className="relative py-32 bg-[#0B0B0F] overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-[-200px] w-[500px] h-[500px] bg-indigo-500/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-[-200px] w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >

          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-5">
            Features
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
            Built for modern job seekers and ambitious professionals
          </h2>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Powerful workflows, beautiful analytics, and intelligent organization —
            all designed to help you stay ahead in your career journey.
          </p>

        </motion.div>

        {/* FEATURES GRID */}
        <div className="mt-24 space-y-32">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* IMAGE SIDE */}
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.01,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="relative group"
              >

                {/* GLOW */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-[40px]" />

                {/* IMAGE CONTAINER */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">

                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[320px] md:h-[500px] object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* FLOATING CARD */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-2xl p-5">

                    <div className="flex items-center justify-between">

                      <div>
                        <p className="text-gray-300 text-sm">
                          Active Progress
                        </p>

                        <h3 className="text-white text-2xl font-semibold mt-1">
                          94%
                        </h3>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-white text-xl">
                        ✨
                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

              {/* TEXT SIDE */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >

                <div className="inline-flex px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-xl">
                  Feature 0{index + 1}
                </div>

                <h3 className="text-3xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {feature.description}
                </p>

                {/* FEATURE LIST */}
                <div className="mt-10 space-y-5">

                  {[
                    "Modern productivity workflow",
                    "Real-time tracking system",
                    "Beautiful responsive experience",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 6 }}
                      className="flex items-start gap-4"
                    >

                      <div className="mt-1 w-3 h-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-lg shadow-indigo-500/30" />

                      <p className="text-gray-300 text-sm md:text-base">
                        {item}
                      </p>

                    </motion.div>
                  ))}

                </div>

                {/* CTA */}
                <button className="mt-10 px-7 py-4 rounded-2xl bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300 shadow-2xl">
                  Explore Feature
                </button>

              </motion.div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;
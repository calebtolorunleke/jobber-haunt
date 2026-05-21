import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedNumber from "./AnimatedNumber";

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-28 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/20 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full" />
      </div>

      {/* FLOATING NOISE LAYER (optional visual depth) */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/noise.png')]" />

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-xs md:text-sm text-gray-300"
      >
        ✨ Built for ambitious developers & professionals
      </motion.div>

      {/* TITLE */}
      <motion.h1
        style={{ y: heroY }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight max-w-5xl leading-tight"
      >
        Track your job applications like a{" "}
        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          modern SaaS product
        </span>
      </motion.h1>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-gray-400 max-w-2xl text-base md:text-lg"
      >
        Organize applications, track interviews, and optimize your job search
        with structure, clarity, and real-time insights.
      </motion.p>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto"
      >
        <button
          onClick={() => navigate("/jobs")}
          className="px-7 py-4 bg-white text-black rounded-2xl font-medium hover:scale-[1.03] transition shadow-2xl"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="px-7 py-4 border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl text-white hover:bg-white/10 transition"
        >
          View Dashboard
        </button>
      </motion.div>

      {/* STATS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-16 md:mt-20 text-center"
      >
        <div>
          <p className="text-3xl md:text-4xl font-semibold">
            <AnimatedNumber value={1200} />
          </p>
          <p className="text-gray-500 text-sm mt-1">Applications Tracked</p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-semibold">
            <AnimatedNumber value={87} />%
          </p>
          <p className="text-gray-500 text-sm mt-1">Interview Success</p>
        </div>

        <div>
          <p className="text-3xl md:text-4xl font-semibold">
            <AnimatedNumber value={320} />
          </p>
          <p className="text-gray-500 text-sm mt-1">Active Users</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
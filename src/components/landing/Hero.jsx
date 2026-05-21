import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedNumber from "./AnimatedNumber";

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 400], [0, 60]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 pt-28">
      {/* HERO TITLE */}
      <motion.h1
        style={{ y: heroY }}
        className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-tight"
      >
        Track your job applications like a modern SaaS product
      </motion.h1>

      <p className="mt-5 md:mt-6 text-gray-600 max-w-xl text-sm md:text-base">
        Organize, analyze, and optimize your job search with clarity and
        structure.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 w-full sm:w-auto">
        <button
          onClick={() => navigate("/jobs")}
          className="px-6 py-3 bg-black text-white rounded-xl w-full sm:w-auto hover:scale-[1.03] transition"
        >
          Get Started
        </button>

        <button
          onClick={() => navigate("/dashboard")}
          className="px-6 py-3 border rounded-xl w-full sm:w-auto hover:border-black transition"
        >
          View Dashboard
        </button>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-14 md:mt-16 text-center">
        <div>
          <p className="text-2xl md:text-3xl font-semibold">
            <AnimatedNumber value={1200} />
          </p>
          <p className="text-gray-500 text-sm">Applications</p>
        </div>

        <div>
          <p className="text-2xl md:text-3xl font-semibold">
            <AnimatedNumber value={87} />%
          </p>
          <p className="text-gray-500 text-sm">Success</p>
        </div>

        <div>
          <p className="text-2xl md:text-3xl font-semibold">
            <AnimatedNumber value={320} />
          </p>
          <p className="text-gray-500 text-sm">Users</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
